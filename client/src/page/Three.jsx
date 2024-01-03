import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Three = () => {
    const containerRef = useRef();
    const rendererRef = useRef();
    const cameraRef = useRef();

    useEffect(() => {
        // 창의 너비와 높이 설정
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Renderer와 Camera 초기화
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 0, 100);
        cameraRef.current = camera;
        // 셰이더 코드
        let Noise3D = `
    vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r) {
        return 1.79284291400159 - 0.85373472095314 * r;
    }

    float snoise(vec3 v)
    { 
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

    // Permutations
    i = mod289(i); 
    vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
    }
`
        // 셰이더 정의
        const shaders = {
            fragment: `
        uniform vec2 resolution;
        uniform float time;

        ${Noise3D}

        float addColorStop(float noise, float start, float length) {
            float distance = start - noise;
            float fadeLength = 1.;
            if(distance < 0.) { distance *= -1.; }

            if(distance < length / 2.) { 
                return 1.; 
            }
            else if (distance < length / 2. + fadeLength){
                float fadeDist = fadeLength / (distance + length / 2.);
                return fadeDist * 0.05;
            }
            else {
                return 0.;
            }
        }

        void main() {
            float speed = 8.;
            float scale = .6;
            float opacity = 1.;

            vec2 st = gl_FragCoord.xy/resolution.xy;
            st.x *= resolution.x/resolution.y;
            st *= scale;
            
            float noise = snoise(vec3(st.x, st.y, time * speed * 0.01));

            opacity -= addColorStop(noise, 0., .02);
            opacity -= addColorStop(noise, 0.3, .02);
            opacity -= addColorStop(noise, 0.6, .02);
            
            gl_FragColor = vec4(0., 0., 0., opacity);
        }
    `,
            vertex: `
        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `
        }
        // Uniforms 정의
        const uniforms = {
            resolution: { value: new THREE.Vector2(width, height) },
            time: { value: 0 }
        };

        // 셰이더 재료와 지오메트리 생성
        const shaderMaterial = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: shaders.vertex,
            fragmentShader: shaders.fragment,
        });
        const geometry = new THREE.PlaneGeometry(width, height);
        const plane = new THREE.Mesh(geometry, shaderMaterial);

        // 씬 생성 및 plane 추가
        const scene = new THREE.Scene();
        scene.add(plane);

        // 렌더링 함수
        const render = () => {
            uniforms.time.value += 0.01;
            requestAnimationFrame(render);
            rendererRef.current.render(scene, cameraRef.current);
        };

        render();

        // 창 크기 변경에 대한 리사이즈 핸들러
        const onWindowResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // 카메라 비율 업데이트
            cameraRef.current.aspect = width / height;
            cameraRef.current.updateProjectionMatrix();

            // 렌더러 크기 업데이트
            rendererRef.current.setSize(width, height);

            // 셰이더의 해상도 uniforms 업데이트
            uniforms.resolution.value.set(width, height);

        };
        // 이벤트 리스너 추가
        window.addEventListener('resize', onWindowResize);

        // 컴포넌트가 언마운트될 때 정리 작업
        return () => {
            window.removeEventListener('resize', onWindowResize);
            containerRef.current.removeChild(rendererRef.current.domElement);
            scene.remove(plane);
            geometry.dispose();
            shaderMaterial.dispose();
            rendererRef.current.dispose();
        };
    }, []);

    return <div ref={containerRef} className="three-container"></div>;
};

export default Three;