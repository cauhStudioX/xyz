# 소개 및 기능 설명
------------
## 소개
> 아무튼.. 일단 html은 만들어놨고, 훗날 참고해야할지도 모르는 이 파일을 보는 (아마도 다음 부장..?)너에게..
------------
## 파일 설명
1. test, test2.png는 테스트용으로 사용한 이미지입니다. 2는 정방형입니다.
2. 페이지 최상단 로고가 흰색 로고2.png입니다.
3. 헤더의 로고가 로고.png, 로고2.png는 탭 옆에 뜨는 작은 로고입니다.
4. index.html을 기반으로 굴러갑니다. 본체입니다.
5. style.css로 페이지에 디자인을 부여합니다. 역시 중요합니다.
------------
## index.html 설명
### 의미 불명일 수 있는 것들
- class
    - wrap : footer 추가하기 위해서 전체적으로 싸놨습니다.
    - introcon, actcon, workcon : 본문의 각 영역들을 구별하고자 넣었습니다.
    - workcon2: 작업물 영역 내의 본문만 묶어놨습니다.
    - data-animation-scroll, data-target: js로 버튼 클릭 시 스크롤 구동할 때 쓰입니다.
-웹폰트
```
<span class="material-symbols-outlined">
youtube_activity
</span>
```

-이런식으로 글씨 대신 들어가있는 span 태그는 웹폰트를 불러오는 형식과 동일하게 아이콘을 불러오는 것입니다.
------------
## 만약 내용을 추가할거면
```
<div class="workpieces">
    <!--n번째 작품-->
    <div class="line" style="width: 80%; height: 0.5em; background: linear-gradient(90deg, rgb(142, 220, 90), transparent);"></div>
    <div class="left">
        <img src="test2.png" alt="" style="max-width:100%;">
    </div>
    <div class="middle">
        <img src="test2.png" alt="" style="max-width:100%;">
    </div>
    <div class="right">
        <h2>여기가 작품 제목</h2>
        <p style="width:100%">하단 작성자 이름</p>
        <button class="click" onclick="window.open('#')">구경하기 ></button>
    </div>
</div>
<p style="margin-bottom:15vh;">작품 설명 기입하는 곳</p>
```
- 작업물 부분 (workcon 안)을 보면 위와 같은 코드가 복붙되어있을텐데, 저거 복사해서 소스 이미지랑 내용만 바꾸면 됩니다.
- 이외의 것들을 수정하거나 추가하고 싶으면... 열심히 뒤져보세용.. 다 설명 못할듯
- 설명이 이것저것 이상해도 용서해주라 나도 오래 안했다 이거
