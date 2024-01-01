# 미리보기
(http://wnyg-port.kro.kr/)

심플블로그 배포

#히로쿠 배포 오류
heroku logs -n 200
로 보고 gpt 검색 
몽고디비 호ㅓㅏ이트리스트

배포된 히로쿠 앱 파일 받기
heroku login
heroku git:clone -a wnyg-portfolio
# 시작하기
1. npm create vite@latest

# 설치
- client
```
npm install gsap 
npm install split-type
npm install @studio-freight/lenis
npm install three
npm install sass
npm install react-router-dom
npm install jquery
npm install firebase
npm install axios
npm install moment
npm install react-icons
```
npm install react-redux   
npm install @reduxjs/toolkit   
npm install react-avatar

# 문제해결
- git config --global core.autocrlf true

- http-proxy-middleware  vite 환경에서는 사용하지않음
vite config파일 변경

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

npm install aws-sdk@2.348.0 --save;      

1. server index.js 생성
2. package.json start : nodemon index.js 
3. 클라이언트 src에 프록시파일 생성
4. cilent npm run build 
5. 웹 서버 설정
```
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
// const port = process.env.PORT || 5050;
const port = 5050;
// const config = require("./server/config/key.js");

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    mongoose
        .connect(config.mongoURI)
        .then(() => {
            console.log("listening  --> " + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
```
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
- MongoDB 연결 설정:

mongoose.connect(config.mongoURI): MongoDB 데이터베이스에 연결합니다. 연결 설정은 config.mongoURI에 저장되어 있습니다.
- 포트 설정 및 서버 시작:
서버는 5050 포트에서 시작됩니다.
MongoDB에 성공적으로 연결되면 콘솔에 메시지를 출력합니다.
- 라우트 설정:
app.get("/")과 app.get("*"): 모든 GET 요청을 클라이언트 측의 index.html로 라우팅합니다. 이는 Single Page Application(SPA)을 위한 일반적인 설정입니다.


## gsap
stagger는 여러 요소에 걸쳐 애니메이션을 순차적으로 적용하는 기능입니다. 이를 통해 같은 애니메이션 효과를 여러 요소에 일정한 시간 간격으로 적용할 수 있습니다. stagger 기능은 복수의 요소에 애니메이션이 순차적으로 발생하도록 해서 보다 동적이고 매력적인 시각 효과를 만들어냅니다.

amount: 0.4 - 이는 전체 '지연' 시간을 의미합니다. 즉, 첫 번째 요소와 마지막 요소 사이에 애니메이션 시작 시간이 0.4초 차이가 난다는 것을 나타냅니다. 이것은 애니메이션 시퀀스를 통해 요소들 사이의 시간 간격을 균등하게 분배합니다.

from: "start" - 이 옵션은 애니메이션 시퀀스가 어디서 시작할지를 정합니다. "start"는 시퀀스가 첫 번째 요소에서 시작되어 순차적으로 다음 요소로 진행됨을 의미합니다. 다른 옵션으로는 "end" (마지막 요소에서 시작), "center" (중간 요소에서 시작하여 양쪽으로 퍼져 나감), 또는 특정 인덱스 (특정 요소에서 시작) 등이 있습니다.

## client
npx create-react-app .   
npm install sass   
npm install react-bootstrap bootstrap   
npm install react-router-dom   
npm install axios   
npm install http-proxy-middleware   
npm install @emotion/css    
npm install @emotion/react  
npm install @emotion/styled   
npm install firebase   
npm install react-redux   
npm install @reduxjs/toolkit   
npm install react-avatar
npm install moment

## server
npm init -y;   
npm install express --save;   
npm install nodemon --save;   
npm install path --save;   
npm install mongoose --save;   
npm install multer --save;      
npm install aws-sdk@2.348.0 --save;      
npm install multer-s3@2.10.0 --save;      

## 문제 해결
- client 폴더에 화살표 생길 때 : .git 폴더를 지운다.   
`rm -rf .git`   
`git rm --cached . -rf`# simple300   

## 미리보기
[https://portfolio-won.vercel.app/]
git config --global core.autocrlf true
## GSAP
```
const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", appHeight);
appHeight();
window.addEventListener("DOMContentLoaded", (event) => {
    appHeight();
});
```
- gsap.registerPlugin(ScrollTrigger);: 플러그인 등록
- const appHeight = () => { ... }: 화면의 높이를 측정하여 CSS 변수 --app-height에 반영하는 함수 브라우저 창 크기 조절 시 이 함수를 통해 뷰포트의 높이를 업데이트
- window.addEventListener("resize", appHeight);: 브라우저 창 크기가 조절될 때마다 appHeight 함수를 호출하여 뷰포트 높이를 업데이트합니다.
- window.addEventListener("DOMContentLoaded", (event) => { ... });: 문서가 로드될 때 appHeight 함수를 호출하여 초기 뷰포트 높이를 설정합니다.
```
("use strict"); // 엄격모드
```
## Lenis (라이브러리)

Lenis는 스크롤 동작을 조정하기 위한 라이브러리입니다.
페이지 내 스크롤 동작을 Lenis 객체를 통해 다룹니다. 예를 들어, 사용자가 [data-lenis-toggle] 속성을 가진 요소를 클릭하면 스크롤을 멈추거나 시작하는 기능을 제어합니다.
```
let lenis;

lenis = new Lenis({
    duration: 1.2,
    infinite: false,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

$("[data-lenis-toggle]").on("click", function () {
    $(this).toggleClass("stop-scroll");
    if ($(this).hasClass("stop-scroll")) {
        lenis.stop();
    } else {
        lenis.start();
    }
});
```
- Lenis 라이브러리를 초기화하고 설정합니다. Lenis는 스크롤 이벤트를 다루는 라이브러리로, 스크롤을 제어하거나 효과를 주는 데 사용됩니다.
- $("[data-lenis-toggle]").on("click", function () { ... });: Lenis의 스크롤을 토글하는 기능을 가진 요소가 클릭될 때 Lenis의 동작을 멈추거나 다시 시작하는 이벤트 핸들러를 정의합니다.
- gsap.defaults({ ... }): GSAP (GreenSock Animation Platform)에서 기본적으로 사용되는 애니메이션 속성을 설정하는 부분입니다. 여기서는 기본적인 애니메이션 이징(ease)을 "power3.inOut"으로, 기본적인 애니메이션 지속 시간(duration)을 0.8초로 설정하고 있습니다.


## SplitType (라이브러리)

SplitType은 텍스트를 단어 또는 글자로 분할하여 표시하는 기능을 제공합니다.

```
let splitText = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
});

let typeSplit;
let lineSplit;
function runSplit() {
    typeSplit = new SplitType(".higlighted-text", {
        types: "lines, words, chars",
    });
    lineSplit = new SplitType("[split-lines]", {
        types: "lines",
    });
}
runSplit();
```
1. splitText라는 변수는 SplitType이라는 클래스의 인스턴스를 생성합니다. 이 클래스는 "[text-split]"이라는 태그를 기준으로 텍스트를 분할하는 기능을 제공합니다. 분할된 텍스트는 "span" 태그로 감싸집니다.
2. typeSplit과 lineSplit이라는 변수를 선언합니다.
3. runSplit() 함수를 정의합니다. 이 함수 내에서 typeSplit 변수는 .highlighted-text 클래스를 기준으로 텍스트를 줄, 단어, 문자로 분할합니다. lineSplit 변수는 "[split-lines]" 태그를 기준으로 텍스트를 줄 단위로 분할합니다.

- 따라서, 이 코드는 주어진 HTML 문서에서 특정 태그나 클래스를 기준으로 텍스트를 분할하는 기능을 구현하는 것을 목적으로 합니다.



git push --force origin main

## 라이브러리
1. moment
moment 명령은 Node.js 프로젝트에서 JavaScript 라이브러리인 "moment.js"를 설치하는 명령입니다. "moment.js"는 날짜와 시간을 처리하는 JavaScript 라이브러리로, 날짜와 시간을 쉽게 다루고 포맷팅하는데 도움을 줍니다.

<<<<<<< HEAD
위 명령을 실행하면 현재 프로젝트 디렉토리에 "moment" 라이브러리가 설치됩니다. 이후에 프로젝트의 JavaScript 파일에서 "moment" 라이브러리를 사용할 수 있게 됩니다.

일반적으로 프로젝트에서 필요한 라이브러리를 설치하기 위해 npm install 명령을 사용합니다. 이 명령은 프로젝트의 종속성(dependencies)을 관리하고 필요한 라이브러리를 프로젝트에 추가하는 데 사용됩니다.

2. avatar
npm install react-avatar 명령은 React 애플리케이션에서 사용할 수 있는 프로필 이미지 및 아바타(avatar)를 만들기 위한 React 컴포넌트 라이브러리인 "react-avatar"를 설치하는 명령입니다.

"react-avatar" 라이브러리를 사용하면 개발자들은 사용자 프로필 이미지, 그룹 아바타, 댓글 작성자의 이미지 등과 같은 아바타 이미지를 생성하고 표시하는 데 도움을 받을 수 있습니다. 이 라이브러리를 사용하면 이미지 크기, 모양, 색상 등을 설정할 수 있는 많은 옵션이 제공됩니다.

예를 들어, 다음과 같이 "react-avatar"를 사용하여 프로필 이미지를 생성할 수 있습니다:
