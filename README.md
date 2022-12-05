# todolist redux로 구현하기

### 구현 해야되는 부분

- 각각의 todo는 id, 제목, 내용, 실행여부 값을 갖는다.
- todo 카드에는 상세보기, 제목 , 내용, 삭제버튼, 완료(<->취소)버튼을 구현한다.
- 상세보기를 눌렀을시 새로운 페이지로 넘어가며 id값, 제목, 내용 , 이전으로 돌아가기버튼 을 갖는다.
- input에 내용을 적은뒤 추가하기를 누르면 input안 값을 빈값이 되도록 구현한다.
- input에 값이 들어가있는 상태로 상세페이지로 이동하는 경우에도 빈값으로 만든다.
- 전체화면의ㅏ 넓이는 1200px, 최소넓이는 800px, 컨텐츠는 화면의 가운대로 배치

### 22.12.05

- 갈피 못잡는중
- 강의보면서 천천히 천천히 따라가보자!!!!!!
- dispatch 연결 까진 잘하고 있으나 module에서 switch문 돌릴때 case안에 로직을 어떻게 짜야하지..
- 컴포넌트를 어떻게 구분해야할지, 어떤식으로 나눠서 구현해야할지 감이 잡히지 않음

> action creator를 사용하는 이유

1. 자동완성을 사용가능하다(휴먼에러 방지가능)
2. 유지보수에 상당히 용이하다.
3. 코드 가독성이 높아진다.
