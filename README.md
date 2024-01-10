# 미리보기

<div align="center">
<a href="https://wonyoung-portfolio-4c189fd6f075.herokuapp.com/"><img src='/client/src/assets/img/cover.png' alt="pf" width="80%"></a>
</div>

- `Express`와 `Mongoose`를 사용한 서버 사이드 구성
- `React Router`를 이용한 클라이언트 사이드 라우팅
- `React Hooks`를 활용한 상태 관리
- `Three.js`를 이용한 3D 렌더링
- `GSAP와 jQuery`를 사용한 애니메이션 효과

## 특징
- `React Router`: 사용자 경험을 향상시키기 위해 SPA(Single Page Application) 구조를 채택.
- `GSAP & jQuery`: 동적인 웹사이트를 위한 복잡한 애니메이션 및 상호작용 구현.
- `Three.js`: 3D 요소를 활용하여 독특한 사용자 인터페이스 제공.
- `Express & Mongoose`: RESTful API를 통해 데이터를 관리하고 서버와 클라이언트 간의 통신을 처리.
  
## 설치
### client
```
npm install gsap 
npm install split-type
npm install three
npm install sass
npm install react-router-dom
npm install jquery
npm install axios
npm install moment
npm install react-icons
npm install framer-motion
npm install react-redux   
npm install @reduxjs/toolkit   
```

### server
```
npm init -y;   
npm install express --save;   
npm install nodemon --save;   
npm install path --save;   
npm install mongoose --save;   
```



## 문제해결
<details>
  <summary></summary>
  
- http-proxy-middleware  vite 환경에서는 사용하지않음
vite config파일 수정
```
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5051',
        changeOrigin: true,
        secure: false, // HTTPS 사용 시 true로 설정
      },
    },
  },
});
```
- 히로쿠 배포 오류  
heroku logs -n 200  
몽고디비 화이트리스트  0.0.0.0

- 배포된 히로쿠 앱 파일 받기
```
heroku login  
heroku git:clone -a wonyoung-portfolio  
defaultValue 수정가능value수정불가
```
- 배포 후 오류.
```
package.json 
nodemon index.js -> node index.js

const port = process.env.PORT || 5050;
heroku logs --tail
heroku restart
```
</details>

### note
<details>
1. 모듈 임포트:
- express: Express 웹 프레임워크를 임포트합니다.
- path: 파일 경로를 다루는 유틸리티 모듈입니다.
- mongoose: MongoDB를 위한 ODM(Object Data Mapping)라이브러리입니다.
- Express 애플리케이션 초기화:
 const app = express();: Express 애플리케이션 인스턴스를 생성합니다.
- 서버 설정:
app.use(express.static(path.join(__dirname, "../client/build")));: 클라이언트 측 정적 파일을 서비스합니다.
- app.use(express.json());: JSON 형태의 요청 본문을 파싱합니다.
- app.use(express.urlencoded({ extended: true }));: URL 인코딩된 요청 본문을 파싱합니다.
- MongoDB 연결 설정

</details>
