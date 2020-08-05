# Development Logs

# Project Reviews
* Application 파일은 build와 src 두 가지로 나눔
* build 는 배포 서버, src는 개발용 테스트 서버

# 200804 frontend
* src/views/_html은 개발을 돕기 위한 임시 폴더이므로 build로 배포하지 말아주세요
* views 구조 변경
* views/template/login.pug 를 추가 (scss 수정)
* main.pug > index.pug로 변경(testcontrollers 경로 수정)

## 200804 backend
* mariadb, Sequelize 모듈 추가 설치했습니다. ( npm i 설치 필요 )
* db 설정값은 config/config.json에 포함되어 있습니다.
* model/index.js 에서 db에 관한 환경설정이 작성되어있습니다.
* middlewares.js에 db 에 연결하고 연결진위여부를 반환하는 함수를 작성해서 app.js에 연결해 두었습니다.
* app.js를 개편하고 더 많은 모듈을 추가하였습니다.

## 200805 backend
* passport, passport-local, passport-naver 를 설치 하였습니다 'npm i' 요청드립니다.
* 테스트 라우터를 분리하였습니다. /test 로 접근이 가능합니다.
### * naver 로그인을 구현하였습니다. naver 로그인 기능을 테스트하기 위해서 네이버 Oauth API의 client키와 Secret 키가 필요로 합니다.
    - 해당 키를 인증하기위해서 node.js 환경변수를 설정해야합니다. 환경변수는 process.env로 접근이 가능합니다.
    - 환경변수 설정 파일은 프로젝트 최상위 디렉터리에 .env를 생성합니다.
    - dotenv 모듈이 .env에 작성된 환경변수를 불러오게 됩니다.
    - naver client키는 NAVER_CLIENT, secret키는 NAVER_SECRET 으로 지정합니다.
    - 해당 키 값 목록은 백엔드 담당에게 전달받으세요.

* url 설계가 더 복잡해진거같습니다. 고로 다음 업데이트 때 url를 더 간략하게 변경 할 예정입니다.
* 각 기능을 수행하는 컨트롤러가 존재하는 파일과 라우터 경로의 의미가 잘못된거같습니다. 다음 업데이트 때 개선할 예정입니다.