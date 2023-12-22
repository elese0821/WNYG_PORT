# 미리보기
(https://wnyg-port.vercel.app/)


(https://movie-project-ecru.vercel.app/)
(https://youtube-project-nine.vercel.app/)


# 시작하기
1. npm create vite@latest

git config --global core.autocrlf true

user-select: none;

깃배포
npm install gh-pages --save-dev

# 설치
```
npm install gsap 
npm install split-type
npm install @studio-freight/lenis
npm install three
npm install sass
npm install react-router-dom
npm install jquery

```
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();

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


## 라이브러리
1. moment
moment 명령은 Node.js 프로젝트에서 JavaScript 라이브러리인 "moment.js"를 설치하는 명령입니다. "moment.js"는 날짜와 시간을 처리하는 JavaScript 라이브러리로, 날짜와 시간을 쉽게 다루고 포맷팅하는데 도움을 줍니다.

위 명령을 실행하면 현재 프로젝트 디렉토리에 "moment" 라이브러리가 설치됩니다. 이후에 프로젝트의 JavaScript 파일에서 "moment" 라이브러리를 사용할 수 있게 됩니다.

일반적으로 프로젝트에서 필요한 라이브러리를 설치하기 위해 npm install 명령을 사용합니다. 이 명령은 프로젝트의 종속성(dependencies)을 관리하고 필요한 라이브러리를 프로젝트에 추가하는 데 사용됩니다.

2. avatar
npm install react-avatar 명령은 React 애플리케이션에서 사용할 수 있는 프로필 이미지 및 아바타(avatar)를 만들기 위한 React 컴포넌트 라이브러리인 "react-avatar"를 설치하는 명령입니다.

"react-avatar" 라이브러리를 사용하면 개발자들은 사용자 프로필 이미지, 그룹 아바타, 댓글 작성자의 이미지 등과 같은 아바타 이미지를 생성하고 표시하는 데 도움을 받을 수 있습니다. 이 라이브러리를 사용하면 이미지 크기, 모양, 색상 등을 설정할 수 있는 많은 옵션이 제공됩니다.

예를 들어, 다음과 같이 "react-avatar"를 사용하여 프로필 이미지를 생성할 수 있습니다: