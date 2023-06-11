## **클론코딩으로 시작하는 Next.js**

### **목차**

[넥스트](#넥스트nextjs)  
[넥스트를 사용하는 이유](#넥스트를-사용하는-이유)  
[넥스트의 특징](#넥스트의-특징)  
[넥스트 설치하기](#next-설치하기)  
[Eslint](#eslint)  
[Prettier](#prettier)  
[넥스트의 기본 기능](#넥스트의-기본-기능)  
[Link 컴포넌트](#link-컴포넌트)
[Link 컴포넌트의 속성](#link-컴포넌트의-속성들)
[넥스트 라우팅](#넥스트의-라우팅)
[getServerSideProps](#getserversideprops)
[getStaticProps](#getstaticprops)
[getInitialProps](#getinitialprops)

## **넥스트(Next.js)**

Vercel(버셀)에서 만든 리액트 기반 프레임워크로 개발자에게 뛰어난 생산성과 편의성을 제공

### **넥스트를 사용하는 이유**

#### **SPA의 장점**

SPA는 페이지 이동을 하게 되면 받아온 파일을 이용하여 UI를 변화시키고 필요한 데이터는 서버에 JSON형태로 받아서 UI를 빠르게 변화시킬 수 있어 사용자 경험에는 좋게 함

#### **SPA의 단점**

모든 자바스크립트 코드를 불러와야 하기 때문에 처음 페이지를 불러올 때 시간이 오래 걸리게 됨
검색 엔진 최적화(SEO)에 좋지 않음  
검색 엔진 봇이 사이트에 방문하였을 때 콘텐츠를 제공하지 못하여 사이트를 파악하는 데 어려움이 있음

위에 두 문제를 **서버 사이트 렌더링(SSR)**을 사용함으로써 해결할 수 있음

#### **SSR의 장점**

사이트에 접속할 때 렌더링 된 html을 불러옴
필요한 자바스크립트 파일을 불러올 때까지 반응하지 않지만 빠르게 화면을 보일 수 있기에 속도가 빨라 보임  
검색 엔진 봇에 렌더링 된 html을 제공하여 SEO에 좋음

#### **SSR의 단점**

페이지 이동 시 새로운 페이지를 요청하기 때문에 페이지 이동 시에 깜박임이 존재  
페이지 이동 시 템플릿을 중복해서 로딩  
서버에 부담을 줘 성능상 좋지 않음

```
Next는 SPA와 SSR의 단점을 해결하기 위해 리액트(SPA)에 서버 사이트 렌더링 기능을 더하여 SPA와 SSR의 장점을 가질 수 있게 됨
```

리액트에서 SSR 기능을 추가하려면 웹 서버를 만들어 주어야 하고 웹 팩 설정, 데이터 로딩, 코드 스플리팅 등 복잡한 과정을 필요로 하지만 넥스트를 사용하면 이러한 것들을 설정하지 않고 사용할 수 있게 됨  
즉 개발 환경을 설정하는 번거로움을 줄일 수 있음

### **넥스트의 특징**

**사진 렌더링 및 서버 사이드 렌더링**  
넥스트는 빌드 시에 만든 모든 페이지를 미리 렌더링함  
그래서 처음 페이지를 불러올 때 사용자에게 빠르게 보일 수 있고 HTML이 미리 렌더링 되어 SEO에도 좋다  
HTML을 불러온 후에는 페이지에 필요한 최소한의 자바스크립트 코드를 불러와 페이지를 사용할 수 있게 됨

**Hot Code Reloading을 지원하는 개발 환경**  
코드 변경 사항이 저장되면 응용 프로그램을 자동으로 다시 로드  
개발 모드일 때 소스코드를 저장하면 오른쪽 하단에 삼각형 애니메이션이 생겨 넥스트가 응용 프로그램을 컴파일 하고 있다는 것을 알림

**자동 코드 분할**  
자동 코드 분할 기능 덕분에 코드의 모든 가져오기가 번들로 묶여 각 페이지와 함께 제공됨
불필요한 코드가 페이지에 로드되지 않음

**설정이 필요 없다**  
기본적으로 SSR 및 개발에 필요한 설정인 웹 팩(webpack)과 바벨(babel)을 사용하기 있음  
사용하고 싶은 플러그인이 있다면 손쉽게 추가하여 사용할 수 있도록 지원하고 있음

**Typescript 내장**  
타입스크립트와 함께 사용할 때 타입 지원을 통해 편리함과 안정성을 얻을 수 있음  
넥스트는 타입스크립트 설정을 따로 할 필요가 없음

**파일 기반 내비게이션 기능**  
리액트에서는 라우트를 위해 react-router라는 라이브러리를 사용하여 라우팅 설정을 해주어야 함  
그로 인해 페이지의 경로에 대하여 직접 설정을 해주어야 하였지만 넥스트는 파일 시스템 기반 라우팅을 사용하여 폴더의 경로에 따라 페이지의 경로가 설정되어 구축이 빠르고 관리가 편하다는 장점이 있음

**Styled-jsx 지원**  
CSS-in-JS인 styled-jsx를 지원함  
스타일을 서버사이트 렌더링하기 위한 설정이 필요하지 않음

### **Next 설치하기**

#### **1. Node.js 설치**

#### **2. Yarn 설치**

**Yarn**
페이스 북에서 만든 자바스크립트 패키지 매니저
Npm과 동일한 기능을 가지고 있으며 npm보다 빠르고 안정적이며 보안성이 뛰어나다고 주장하고 있음

```bash
npm install yarn -g
```

-g는 글로벌 하게 설치하겠다는 옵션으로 설치 시 권한을 필요로 함  
macOS라면 sudo를 앞에 붙여야 함

### **CNA를 사용하여 넥스트 설치하기**

```bash
npx create-next-app
```

해당 명령어를 실행하면 안내 텍스트가 출력되는데 프로젝트에 맞는 설정을 해주면 된다.

**만들어진 명령어들**  
**next dev** : 개발 환경의 넥스트를 실행 개발 환경은 학 코드 리로딩을 지원  
**next build** : 넥스트 애플리케이션 번들을 만듦  
**next start** : 빌드 된 넥스트 애플리케이션을 실행함

**실행방법**  
npm run dev 혹은 yarn dev를 입력하면 dev에 있는 텍스트가 실행됨

### **넥스트 수동으로 설치**

**터미널에서 프로젝트 폴더 생성**

```bash
mkdir next-app
cd next-app
```

**npm 관리 및 프로젝트 설정을 위해서 package.json 만들기**  
-y로 대화식 세션 건너뛰기

```bash
npm init -y
yarn init -y
```

**필요한 모듈 설치**

```bash
yarn add next react react-dom
npm install next react react-dom
```

package.json에 넥스트 실행 script 명령어 추가

```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
  },
```

## **Eslint**

자바스크립트를 사용하면서 생기는 에러들을 미리 알려주는 정적 분석 툴  
미리 생기는 에러를 방지할 수 있고 규칙을 정하여 코드 스타일을 정할 수도 있음

```bash
npm install -g eslint
```

설치 후 vscode에서 eslint를 사용할 수 있도록 확장 프로그램을 설치하여야함

확장 프로그램을 설치하면 .eslintrc파일을 만들어 eslint설정을 하여 사용할 수 있음  
프로젝트 폴더의 경로에서 eslint --init을 입력하면 설정할 수 있음  
**enlintrc.js**

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'double'], //더블 쿼터 사용
    '@typescript-eslint/quotes': ['error', 'double'], //더블 쿼터 사용
    'no-unused-vars': 'off', //사용안한 변수 경고 중복
    '@typescript-eslint/no-unused-vars': 'warn', //사용안한 변수는 경고
    'jsx-a11y/control-has-associated-label': 'off', // 상호작용하는 엘리먼트에 label을 넣는다
    'react/no-array-index-key': 'off', // key값으로 index를 사용할수 있다.
    'comma-dangle': 'off', // 마지막에 , 을 넣어주지 않는다.
    'arrow-body-style': 'off', //화살표 함수 안에 return을 사용 할 수 있다.
    'react/no-unescaped-entities': 'off', //문자열 내에서 " ' > } 허용
    'react/prop-types': 'off', //proptypes를 사용하지 않는다.
    'object-curly-newline': 'off', // { 다음 줄 바꿈을 강제로 사용하지 않는다.
    'react/jsx-one-expression-per-line': 'off', //한라인에 여러개의 JSX를 사용 할 수 있다.
    'implicit-arrow-linebreak': 'off', // 화살표 함수 다음에 줄 바꿈을 사용할 수 있다.
    'no-shadow': 'off', //파일 내에서 중복 이름을 사용 할 수 있다.
    'spaced-comment': 'off', //주석을 뒤에 달 수 있다.
    'operator-linebreak': 'off', //연산자 다음 줄 바꿈을 사용 할 수 있다.
    'react/react-in-jsx-scope': 'off', // jsx를 사용하여도 React를 꼭 import 하지 않아도 된다.
    'react/jsx-props-no-spreading': 'off', //props를 스프래드 할 수 있다.
    'jsx-a11y/anchor-is-valid': 'off', // next js에서는 a에 href없이 사용
    'global-require': 'off', //함수 내에서 require 사용가능
    'jsx-a11y/label-has-associated-control': 'off', //label htmlFor을 사용하지 않아도 된다.
    'import/prefer-default-export': 'off', //export default 를 사용하라.
    'no-param-reassign': 'off',
    'react/jsx-curly-newline': 'off', // jsx안에 }를 새로운 라인에 사용할 수 있다.
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }, //jsx사용가능한 확장자 설정
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }, //import 시 확장자명은 사용하지 않는다.
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
```

## **Prettier**

코드 스타일을 정해진 규칙대로 변화해주는 코드 포맷터  
저장 시에 자동으로 변환되게 하기 위해 vscode 설정에 editor format On save를 체크해줌

**Prettier 추가 설정하기**  
.prettierrc파일을 생성하여 사용

```js
{
  "singleQuote": true
  //쌍따옴표 대신에 따옴표를 사용
}
```

## **넥스트의 기본 기능**

### **넥스트의 라우팅**

pages 폴더를 사용하여 정적 페이지와 동적 페이지의 라우팅 설정 하고 Link 컴포넌트와 라우터 객체를 이용하여 주소 이동을 할 수 있음  
이를 통해 넥스트에서 제공하는 라우팅 관련 기능들의 편리함을 알 수 있음

#### **정적 페이지 라우팅**

pages 폴더에 파일을 만드는 것만으로 경로가 자동으로 설정됨

**index.jsx**

```js
import React from 'react';
import Link from 'next/link';
function App() {
  return (
    <div>
      <h2>Link to 'tomato' Page</h2>
      <Link href="/tomato">
        <a>Move to '/tomato'</a>
      </Link>
    </div>
  );
}
export default App;
```

**tomato.jsx**

```js
import Link from 'next/link';

const Tomato = () => {
  return (
    <div>
      <h2>Link to 'main' Page</h2>
      <Link href="/">
        <a>Move to '/'</a>
      </Link>
    </div>
  );
};
export default Tomato;
```

#### **Link 컴포넌트**

넥스트에서 주소 이동을 할 때 주로 쓰이는 컴포넌트  
DOM을 가지진 않짐나 자식인 `<a>`태그를 클릭하게 되면 클라이언트 측 네비게이션을 실행하여 페이지 전체를 새로 불러오지 않고 주소 이동이 가능

```
교재에서는 <a>태그를 사용하여 예제를 구현하였지만 Link 컴포넌트의 자식 요소로 <a>태그를 사용할 때
발생하는 오류가 발생하여 <a>태그를 제외하였더니 오류가 해결되었다
```

주소 이동을 하게 되면 브라우저의 History API를 지원함으로써 뒤로가기를 할 때 이전에 렌더링된 페이지를 가져오게 됨

#### **`<a>`태그와 Link 컴포넌트의 차이**

페이지 전체를 새로 받아오게 되어 속도가 느려지게 되고 깜빡임이 발생  
뒤로가기를 하게 되어도 페이지를 새로 받아오게 됨

#### **`<a>` 태그를 사용하지 않는다면**

HTML태그들은 라우팅 기능을 수행하지만 웹 접근성과 SEO에 좋지 않음

```

최신 버전의 Next.js에서는 <Link> 컴포넌트가 자동으로 <a> 태그를 생성하므로, 별도의 <a> 태그를 사용할 필요가 없음
```

#### **Link 컴포넌트의 속성들**

**href**  
string 값으로 이동할 경로 또는 URL  
**as?**
string 값으로 브라우저의 URL에 표시될 값으로 Next 버전 9.5.3 이전에 동적 라우팅을 위하여 사용  
**replace?**  
boolean 값으로 브라우저의 history 스택에 url을 추가하지 않고 현재 상태를 변경  
**scroll?**  
boolean값으로 스크롤을 맨 위로 이동할지 설정하는 값  
기본값은 true  
**shallow?**  
boolean값으로 서버에서 데이터를 불러오는 작업을 스킵 할 때 사용  
기본값은 false  
**passHref?**  
boolean값으로 자식에게 href를 전달  
리액트 컴포넌트에 href를 전달할 수 있게됨  
**prefetch?**  
boolean값으로 백그라운드에서 페이지를 미리 가져오게 됨  
브라우저의 화면의 Link 컴포넌트의 페이지들을 미리 가져오게 됨  
기본값을 true

#### **동적 페이지 라우팅**

파일이름을 대괄호로 감싸서 만들면 동적 페이지를 의미하게 됨  
대괄호에 있는 값은 라우터 객체의 query속성으로 들어가게됨  
useRouter훅을 사용하여 확인할 수 있음

#### **useRouter**

라우트 객체를 리턴하는 next/router의 훅스  
대괄호로 감싼 파일이름이 속성명  
속성값은 접속하는 주소명으로 정해지게 됨

### **라우팅 객체를 이용하여 라우팅 하기**

주소 이동을 항상 Link 컴포넌트를 사용하지 않음  
때로는 함수 내에서 라우트 이동을 하게 되는 경우도 있음

**useState를 이용한 동적 라우팅**  
`<input>`태그를 이용하여 텍스트를 입력하고 입력한 텍스트 주소로 이동하는 예시  
**index.jsx**

```js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function App() {
  const [name, setName] = useState('');
  const router = useRouter();
  return (
    <div>
      <button type="button" onClick={() => router.push('/tomato')}>
        tomato로 가기
      </button>
      <p>이름</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '12px' }}
      />
      <button type="button" onClick={() => router.push(`vegetable/${name}`)}>
        {name} 으로 가기
      </button>
    </div>
  );
}
export default App;
```

**pages/vegetable/[name].jsx**

```js
import Link from 'next/link';
import { useRouter } from 'next/router';

const name = () => {
  const { query } = useRouter();
  return (
    <div>
      <h2>Hello!!! {query.name}</h2>
      <Link href="/">Move to '/'</Link>
    </div>
  );
};
export default name;
```

### **정적 파일 사용**

public폴더를 사용하여 정적 파일을 제공할 수 있음  
브라우저에서 네트워크를 통하여 이미지를 불러오게 됨  
이미지 파일 이외에도 폰트, manifest.json, robots.txt, favicon.ico 등의 정적 파일을 제공할 때 유용하게 사용됨

### **서버로부터 데이터 불러오기**

기본적으로 Next.js는 모든 페이지를 미리 렌더링함  
렌더링을 하여 html을 생성하게 되면 더 나은 성능과 SEO이점을 얻을 수 있음

#### **넥스트의 사전 렌더링**

1. 정적 생성  
   빌드 시에 페이지를 html로 만들어 요청 시 제공
2. 서버 사이드 렌더링  
   페이지 요청 시 서버 사이트 렌더링을 통하여 html을 제공

#### **isomorphic-unfetch**

서버에서 데이터를 패치하기 위해 필요한 모듈

```bash
yarn add isomorphic-unfetch
```

### **getServerSideProps**

이름 그래도 서버 측에서 props를 받아오는 기능  
페이지의 데이터를 서버로부터 제공받는 기본 API  
서버에서 데이터를 패치하여 초기 데이터를 전달하도록 구성 되어있음  
페이지를 요청 시마다 실행이 되며 getServerSideProps에서 페이지로 전달해준 데이터를 서버에서 렌더링 하게 됨  
파일명의 [name]값은 getServerSideProps의 매개변수 값인 query로 받아올 수 있음  
query를 통해 얻은 name값은 api의 파라미터로 전달하여 원하는 유저의 정보를 불러올 수 있음

#### **유저 검색하기**

**index.jsx**

```js
import React, { useState } from 'react';
const App = () => {
  const [username, setUsername] = useState('');
  return (
    <div>
      <label>
        username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}`}>검색하기</Link>
    </div>
  );
};

export default App;
```

**[name].jsx**

```js
import fetch from 'isomorphic-unfetch';

const name = ({ user }) => {
  const username = user && user.name; //user값이 undefined 일 수 있기 때문
  return <div>{username}</div>;
};

export const getServerSideProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    //query를 통해 얻은 name 값을 api의 파라미터로 전달하여 원하는 정보를 불러올 수 있음
    if (res.status === 200) {
      //데이터를 불러오기에 성공했다면 user 정보를 페이지에 props로 전달
      const user = await res.json();
      return { props: { user } };
    }
    return { props: {} }; //실패시 아무것도 전달하지 않음
  } catch (e) {
    console.log(e);
    return { props: {}

```

### **getStaticProps**

getServerSideProps와 다르게 빌드 시에 데이터를 불러와 결과를 json으로 저장하여 사용하게 됨  
일관된 데이터를 보여줄 때 사용
9.5 버전부터 정적 데이터를 갱신할 수 있음  
**revalidate**  
정해진 시간마다 요청이 들어올 때 데이터를 갱신하여 제공  
ex) staticPage.jsx

```js
const staticPage = ({ time }) => {
  return <div>{time}</div>;
};

export const getStaticProps = async () => {
  return { props: { time: new Date().toISOString() }, revalidate: 3 }; //3초마다 요청이 들어올때 갱신
};
export default staticPage;
```

#### **동적페이지에서 getStaticProps**

getServerSideProps와 달리 **query** 대신 **params**를 사용
**getStaticPaths**를 이용해 **params를 미리 지정**해 주어야함  
**fallback** 값은 지정한 경로 이외의 경로에 대해 설정  
**fallback**이 **false**이면 이외의 경로는 **404 에러** 페이지로 감
**getStaticPaths**는 페이지의 경로가 외부 데이터에 의존할 때 사용됨

**[name].jsx**

```js
import fetch from 'isomorphic-unfetch';

const name = ({ user, time }) => {
  const username = user && user.name; //user값이 undefined 일 수 있기 때문
  return (
    <div>
      {username}
      {time}
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`https://api.github.com/users/${params.name}`);
    //query를 통해 얻은 name 값을 api의 파라미터로 전달하여 원하는 정보를 불러올 수 있음
    const user = await res.json();
    if (res.status === 200) {
      //데이터를 불러오기에 성공했다면 user 정보를 페이지에 props로 전달
      const user = await res.json();
      return { props: { user, time: new Date().toISOString() } };
    }
    return { props: { time: new Date().toISOString() } }; //실패시 아무것도 전달하지 않음
  } catch (e) {
    console.log(e);
    return { props: { time: new Date().toISOString() } };
  }
};
export async function getStaticPaths() {
  return {
    paths: [{ params: { name: 'jerrynim' } }],
    //넥스트를 사용하는 유저를 조회한 결과 ["jerrynim"]의 값을 얻고
    //static/jerrymin 페이지를 getStaticProps를 사용하여 데이터를 저장하게 되고
    //페이지에 접속할 때마다 미리 렌더링된 html을 제공할 수 있음
    fallback: true, //false이면 이외의 경로일때 404 에러 발생
  };
}
export default name;
```

### **getInitialProps**

9.3 버전 이전부터 서버 사이드 데이터 패치를 위해 사용되던 함수  
9.3 이상의 버전부터 getServerSideProps, getStaticProps 사용을 권장함  
getServerSideProps와 비슷하지만 컴포넌트의 함수에 getInitialProps를 추가하는 방식으로 사용됨

```js
import fetch from 'isomorphic-unfetch';

const name = ({ user }) => {
  const username = user && user.name; //user값이 undefined 일 수 있기 때문
  return <div>{username}</div>;
};

name.getInitialProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { user };
    }
    return {};
  } catch (e) {
    console.log(e);
    return {};
  }
};
export default name;
```

props속성을 사용하지 않고 return 함  
**getInitialProps를 사용하면**  
초기 렌더링 시에는 서버에서 데이터를 불러오지만 클라이언트 측 내비게이션을 사용하게 되면 클라이언트 측에 데이터를 불러옴

### **styled-jsx**

CSS-in-JS 라이브러리로 css를 캡슐화하고 범위가 지정되게 만들어 구성요소를 스타일링 할 수 있음  
Next에 기본으로 제공되기 때문에 설치할 필요 없음  
한 구성 요소의 스타일링은 다른 구성 요소에 영향을 미치지 않도록 하는 특징  
`<styled jsx>`태그를 사용해 내부에 css을 간단하게 사용할 수 있음
**[name].jsx**

```js
import fetch from 'isomorphic-unfetch';
import css from 'styled-jsx/css';

const style = css`
  .profile-box {
    width: 25%;
    max-width: 272px;
    margin-right: 26px;
  }
  .profile-image-wrapper {
    width: 100%;
    border: 1px solid #ele4e8;
  }
  .profile-image-wrapper .profile-image {
    display: block;
    width: 100%;
  }
  .profile-username {
    margin: 0;
    pading-top: 16px;
    font-size: 26px;
  }
  .profile-user-login {
    margin: 0;
    font-size: 20px;
  }
  .profile-user-bio {
    margin: 0;
    padding-top: 16px;
    font-size: 14px;
  }
`;
const name = ({ user }) => {
  if (!user) {
    return null; // user 정보가 없을 경우 에러 방지
  }
  return (
    <>
      <div className="profile-box">
        <div className="profile-image-wrapper">
          <img
            className="profile-image"
            src={user.avatar_url}
            alt={`${user.name} 프로필 이미지`}
          />
        </div>
        <h2 className="profile-username">{user.name}</h2>
        <p className="profile-user-login">{user.login}</p>
        <p className="profile-user-bio">{user.bio}</p>
      </div>
      <style jsx>{style}</style>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }
  } catch (e) {
    console.log(e);
  }
};
export default name;
```

### **react-icon**

여러 아이콘들을 모아놓은 라이브러리로 아이콘을 다운로드 받지 않고도 쉽게 사용할 수 있음

**styled-jsx와 react-icon을 이용한 github 프로필 만들기**  
Profile이라는 이름의 컴포넌트로 해당 코드 분리
props로 user를 전달하여 렌더링

```js
import Profile from '@/components/Profile';
import fetch from 'isomorphic-unfetch';

const name = ({ user }) => {
  if (!user) {
    return null; // user 정보가 없을 경우 에러 방지
  }
  return (
    <>
      <Profile user={user} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }
    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};
export default name;
```

#### **깃허브 프로필에 레포지토리 리스트 렌더링**

**레포지토리 요청 api**

```
https://api.github.com/users/${username}/repos?sort=updated&page=1&per_page=10
```

per_page : 페이지 당 받게될 레포지토리의 개수  
page : per_page의 개수만큼 나누었을 떄 불러올 그룹의 번호
