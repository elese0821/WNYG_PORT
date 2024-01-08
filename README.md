# 미리보기
(https://wonyoung-portfolio-4c189fd6f075.herokuapp.com/)

- `Express`와 `Mongoose`를 사용한 서버 사이드 구성
- `React Router`를 이용한 클라이언트 사이드 라우팅
- `React Hooks`를 활용한 상태 관리
- `Three.js`를 이용한 3D 렌더링
- `GSAP와 jQuery`를 사용한 애니메이션 효과

#히로쿠 배포 오류  
heroku logs -n 200  
로 보고 gpt 검색   
몽고디비 화이트리스트  

- 배포된 히로쿠 앱 파일 받기  
heroku login  
heroku git:clone -a wonyoung-portfolio  
defaultValue 수정가능value수정불가

## 특징
React Router: 사용자 경험을 향상시키기 위해 SPA(Single Page Application) 구조를 채택.
GSAP & jQuery: 동적인 웹사이트를 위한 복잡한 애니메이션 및 상호작용 구현.
Three.js: 3D 요소를 활용하여 독특한 사용자 인터페이스 제공.
Express & Mongoose: RESTful API를 통해 데이터를 관리하고 서버와 클라이언트 간의 통신을 처리.

## 시작하기
1. npm create vite@latest

## 설치
- client
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
## server
```
npm init -y;   
npm install express --save;   
npm install nodemon --save;   
npm install path --save;   
npm install mongoose --save;   
```
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

## 문제 해결
배포 후 오류.
package.json 
nodemon index.js -> node index.js

const port = process.env.PORT || 5050;
heroku logs --tail
heroku restart
