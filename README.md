#  🚀  PRE_PROJECT- WANTED_PRE_ONBOARDING  | 원티드 프리온보딩 코스 선별 과제

### 📎 배포 주소
> https://mystifying-joliot-da03da.netlify.app/

###  📌 wanted_pre_onboarding-pre_project 주요 기능

1. GNB 및 CarouselSlider View를 창 크기에 맞게 각기 다른 UI로 랜더링되록 미디어쿼리(Meida Query)를 적용하였습니다.
2. CarouselSlider 내에 Slide들이 넘어가기 위해 **Button Click, setInterval, Swipe** 총 세 가지의 trigger 기능을 구현하였습니다.
3. 각 Slide의 의도 된 시퀀스 순서에 따라 transform의 translateX 수치에 변화를 주어 **Infinite Slider** 기능을 구현하였습니다.

<img src="https://user-images.githubusercontent.com/65222200/150014302-c06478b8-cd28-4318-82bc-5cd06e7e53d2.gif" widh="500px" height="300px"></img>
<img src="https://user-images.githubusercontent.com/65222200/150014806-d2fc8e97-6d16-43fc-9613-cd12ff340039.gif" width="480px" height="300px"></img>

## 👫   팀원

- Front-end: 최병현

## 🗓  개발 기간

- 기간: 2022년 1월 14일 ~ 2022년 1월 19일(5일간)

## 🛠 적용 기술

- Front-end: React(Functional-Component)_react-router-dom(V6), Styled-Components, JavaScript(ES6)

## 📍 주요 구현 사항

> Nav

   - **flex-box 속성과 같이 프로젝트 내에서 공통적으로 사용되는 값들을 한 번에 선언해 줄 수 있도록 Minin 함수 정의** <br /><br />
        `flexMinin: (direction = 'row', justify = 'center', align = 'center') => 
    'display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};'` 

   - **svg파일을 프로젝트 내에서 효율적으로 재사용하기 위해 ReactComponet를 통해 컴포넌트화** <br /><br /> 1.링크 버튼 아이콘 UI에 대한 정보를 지닌 svg 파일를 LinkToButton Component로 변환 <br />
`import { ReactComponent as LinkToButton } from '../../../assets/icon-link_to_button.svg';` <br /><br /> 2. import한 해당 컴포넌트 내에서 동적으로 스타일 값을 변경해주기 원본 svg 파일 내에 동적으로 변할 속성값을 current로 명시 <br />
`<svg width="current" height="current" fill="current" class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path></svg>` <br /><br /> 3. svg component 내에 props로 적용할 style 속성 값을 적용 <br />
`<LinkToButton width="1em" height="1em" fill="#36f" />` <br />
- **공통된 특성을 지닌 MenuList Element들을 map() 메서드를 사용하여 코드 최적화** <br /><br /> 1. 실제 화면에 랜더링되어야 할 네이밍 키 값과 해당 메뉴를 클릭하였을 경우 path 이동이 되어야 하기 때문에 이를 위한 pathName 키 값을 지닌 객체들을 한 배열에 적재 <br> `const menuList = [
  { name: '홈', path: '' },
  { name: '채용', path: 'jobsfeed' },
  (...)
];`<br/><br/>2. 반응형 및 특정 UI 요소를 추가적으로 랜더링되어야 할 메뉴 아이템인 경우는 className을 추가하여 CSS Selector를 통해 추가 스타일 적용<br />`{menuList.map(({ name, path }, index) => {
                  <MenuList
                    className={
                      (name === '홈' && 'home selectNav') ||
                      (name === '채용' && 'jobsFeed') ||
                      (name === '이벤트' && 'events')
                    }
                    key={index}
                  >
                    <MenuLink to={`/${path}`}>
                      {name}
                      <em>
                        {(name === '커뮤니티' && <NewIcon />) ||
                          (name === 'AI 합격예측' && <BetaIcon />)}
                      </em>
                    </MenuLink>
                  </MenuList>
              })}`<br />
- **`@media()`를 통해 반응형 웹을 구현하여 각 사이즈마다 다른 UI가 보여지도록 구현** <br />

-----

> Carousel Slider

- **Infinite & Carousel Slider 기능 구현**<br /><br />1. Slide Sequence 동작 원리<br />
이벤트가 trigger되었을 경우, 연속성을 유지하며 슬라이딩 기능이 동작되도록 **View 상에 User가 실제 보고 있는 세 개의 슬라이드 외에 왼쪽과 오른쪽에 나머지 슬라이드를 숨겨놓음**<br /><br />이전 슬라이드를 보여주기 위해서 **마지막 숨겨진 슬라이드를 시퀀스의 첫 번째 슬라이드 위치로 이동**시키며, 반대로 다음 슬라이드를 보여주기 위해서 **첫 번째 숨겨진 슬라이드를 목록의 마지막 위치로 이동**시킴<br />


<img src="https://user-images.githubusercontent.com/65222200/150059918-01235d72-a226-45d5-a668-7f63b5f6cccb.jpg" width="500px" height="300px"></img><br/>

`&:nth-child(1) {
    z-index: 1;
    transform: translateX(-204%);
  }
  &:nth-child(2) {
    z-index: 2;
    transform: translateX(-102%);
  }
  &:nth-child(3) {
    z-index: 4;
  }
  &:nth-child(4) {
    z-index: 2;
    transform: translateX(102%);
  }
  &:nth-child(n + 5) {
    z-index: 1;
    transform: translateX(204%);
  }` <br /><br />2. Slide Animation을 위한 요소 타켓팅<br />화면에 지속적으로 보여지는 세 슬라이드를 제외 한 양 끝단의 슬라이드는 이동 방향에 따라 유동적으로 위치가 바뀌어야 하기 때문에, 이를 위해서 **Node.insertBefore**와 **Node.appendChild**를 사용하였고 해당 요소를 DOM 상에서 불러와 변수에 바인딩하기 위해 **React.useRef**를 사용<br /><br />
`<SlideTrack ref={target}>(...)</SlideTrack> // SlideContainer. 새롭게 위치가 바뀐 슬라이드 요소를 재설정해주기 위함`<br /><br >`<Slide ref={el => targets.current[index} = el>(...)</Slide> // 양끝단의 슬라이드의 위치를 바꿔주기 위한 NodeList`<br /> <br />3. 이동방향에 따른 Node.Element의 위치 변화<br /><br /> `if (id === 'prev') {
        const prevSlide = targets.current[2];
        target.current.insertBefore(
          targets.current[targets.current.length - 1],
          targets.current[0]
        );
        targets.current = Array.from(target.current.childNodes);
      } // 왼쪽 슬라이드로 이동한 경우`<br/><br />`target.current.appendChild(targets.current[0]);
        targets.current = Array.from(target.current.childNodes); // 오른쪽 슬라이드로 이동한 경우`


## 💁‍♂️  소감 및 후기   


  > 여러모로 도움이 되었던 사전 과제였다. <br /><br />일전에 어떠한 전처리기나 라이브러리 없이 CSS만으로 반응협 웹 프로젝트를 진행해 본 경험은 있었지만 styled-components와 media query를 같이 써본 적은 없어, 다소 걱정이 되었지만 생각했던  것보다 CSS로 반응형 웹을 적용하는 방식과 큰 차이가 없어 적용 자체에 있어선 수월하게 할 수 있었다. <br /> 
<br /> Carousel Slide 기능은 여러 프로젝트에서 바닐라 JS와 라이브러리를 사용하여 구현한 경험이 있었다. 하지만 그 경우 모두 
단일 이미지만 보이는 슬라이더 구조를 지녔기 때문에 슬라이드 시퀀스 앞단엔 마지막 슬라이드를 복사(clone)해주고 뒷단엔 처음 슬라이드를 마찬가지로 복사해주는 방식으로 쉽게 해결할 수 있었다. <br /><br />이번 과제에선 위와 같은 방식으로 가장 끝단에 있는 슬라이드에 도달했을 경우에 duration 값을 0으로 준 채 자연스럽게 반대 끝단으로 이동하는 것은 다소 부적합하다는  생각이 들었다. 원티드에서의 슬라이드는 한 view에 하나의 슬라이드 아이템이 아닌 양끝에 이전 및 다음 슬라이드의 형태가 남아있기 때문이었다.<br><br />이를 해결하기 위해 많은 레퍼런스를 참조하고 스스로도 많은 방안을 강구해 본 결과, 요소에 직접 접근하여 이벤트가 일어날때마다 끝단의 요소를 반대편 방향의 끝단으로 패치해주도록 코드를 작성해 보았다. <br />실제적으론 기능 동작엔 무리가 없었지만, SliderContainer 내에 각 Slider의 위치가 인덱스 별로 각기 상이하게 고정되어 있기 때문에 Carousel Slide를 완벽하게 반응형으로 구현하거나 Swipe할 때 좌우로 슬라이더가 움직이지 않고 바로 스냅핑되어 넘어간다는 한계가 있었다.<br /><br />어려웠던 만큼  알고 있었던 개념들을 체화하며 새로운 기능들 또한 학습할 수 있었던 좋은 과제였으며 라이브러리를 의존하지 않고 어떠한 문제에 대해 해결 능력을 더욱 키워야 한다고 한번 더 생각이 들었다.

## 📄 레퍼런스

- 이 프로젝트는 <u>[프론트앤드 프리온보딩 선발 과제](https://www.notion.so/X-9e8ff10dd1614112a81797219b7e6742)를 참조하여 만들었습니다.
- 본 과제는 저작권의 보호를 받으며, 문제에 대한 정보를 배포하는 등의 행위를 금지 합니다. 
