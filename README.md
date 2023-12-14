# 미리보기
(https://wnyg-port-elese0s-projects.vercel.app/)

# 시작하기
1. npm create vite@latest

git config --global core.autocrlf true

user-select: none;

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