# 웹사이트에 React 추가 (1분 내로 React 추가하기)

### **[참고자료]**
* 교육자료URL : https://ko.reactjs.org/docs/add-react-to-a-website.html  
<br /><br />
---
<br />

### **[싱글 컨포넌트 사용]**
* http://127.0.0.80/reactjs/first/single_componet_index.html  
* 별도의 설치 없이 
* `좋아요!` 버튼 클릭하면 `좋아요 버튼클릭` 화면 출력해주는 심플예시
<br /><br />

### **[멀티 컨포넌트 - 컴포넌트 재사용]**
* http://127.0.0.80/reactjs/first/multi_componet_index.html
* 별도의 설치 없이  
* `좋아요1` `좋아요2` `좋아요3` 버튼 클릭하면
* 함수 하나를 재사용하여 출력 할 수 있는 심플 예시
<br /><br />

### **[JSX로 React 해보기]**
* http://127.0.0.80/reactjs/first/jsx_single_componet_index.html 
* JSX를 추가하는 건 **마치 CSS 전처리기를 추가하는 것과 같다** (`Node.js` 만 설치하면 된다)
* JSX 사용하기 위한 선행작업 (터미널에서 프로젝트 폴더에 접근하여 명령어 실행)
   
    > 1. `npm init -y` 실행[^1]
    > 1. `npm install babel-cli@6 babel-preset-react-app@3` 실행[^2]

* 파일 구조  
    > 1. `/reactjs/first/jsx_single_componet_index.html` <- 실행 URL  
    > 2. `/src/reactjs/first/jsx_single_componet_like_button.js`  <- JSX를 방식으로 작성한 파일(개발자용)  
    > 3. 터미널에서 `npx babel --watch src --out-dir . --presets react-app/prod` 명령어 실행  
    > &nbsp;&nbsp; - `/reactjs/first/jsx_single_componet_like_button.js` 에 변환된 파일 생성됨. <- 브라우저가 해독 가능한 파일
    
    
--- 
### **[마무리]**  
여기까지 따라하는데 4시간은 걸릴듯하다.   
`react` `npm` `jsx` `github` 등 모두 처음 사용해봤기에 전반적인 실행계획 및 개념이 많이 혼돈 스러웠다.  
머리 속 및 문서로 잘 정리하고 빨리 다음장 가봐야겠다. 
<br /><br />

[^1]:  
* `npm init` 은 node 프로그램을 시작(initialize)하는 명령이고 / `-y` 는 `package.json` 파일을 자동 생성시켜준다.  
* 실행하니 package.json파일만 생성되었다.  
<br />

[^2]: 
* 실행 환경에 구애받지 않고 항상 최신 문법의 자바스크립트로 코딩 할 수 있도록 도와주는 도구  
* `cli`는 터미널에서 커맨드를 입력해서 babel을 사용할 때 필요한 패키지  
* `preset` 은 플러그인이나 프리셋을 통해 babel에서 문법 변환 규칙을 알려줄 때 사용
<br />
<br />

