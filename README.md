# Development Logs

# Project Reviews

- Application 파일은 build와 src 두 가지로 나눔
- build 는 배포 서버, src는 개발용 테스트 서버

# 200804 frontend

- src/views/\_html은 개발을 돕기 위한 임시 폴더이므로 build로 배포하지 말아주세요
- views 구조 변경
- views/template/login.pug 를 추가 (scss 수정)
- main.pug > index.pug로 변경(testcontrollers 경로 수정)

## 200804 backend

- mariadb, Sequelize 모듈 추가 설치했습니다. ( npm i 설치 필요 )
- db 설정값은 config/config.json에 포함되어 있습니다.
- model/index.js 에서 db에 관한 환경설정이 작성되어있습니다.
- middlewares.js에 db 에 연결하고 연결진위여부를 반환하는 함수를 작성해서 app.js에 연결해 두었습니다.
- app.js를 개편하고 더 많은 모듈을 추가하였습니다.

## 200805 backend

- passport, passport-local, passport-naver 를 설치 하였습니다 'npm i' 요청드립니다.
- 테스트 라우터를 분리하였습니다. /test 로 접근이 가능합니다.

### \* naver 로그인을 구현하였습니다. naver 로그인 기능을 테스트하기 위해서 네이버 Oauth API의 client키와 Secret 키가 필요로 합니다.

    - 해당 키를 인증하기위해서 node.js 환경변수를 설정해야합니다. 환경변수는 process.env로 접근이 가능합니다.
    - 환경변수 설정 파일은 프로젝트 최상위 디렉터리에 .env를 생성합니다.
    - dotenv 모듈이 .env에 작성된 환경변수를 불러오게 됩니다.
    - naver client키는 NAVER_CLIENT, secret키는 NAVER_SECRET 으로 지정합니다.
    - 해당 키 값 목록은 백엔드 담당에게 전달받으세요.

- url 설계가 더 복잡해진거같습니다. 고로 다음 업데이트 때 url를 더 간략하게 변경 할 예정입니다.
- 각 기능을 수행하는 컨트롤러가 존재하는 파일과 라우터 경로의 의미가 잘못된거같습니다. 다음 업데이트 때 개선할 예정입니다.

## 200806 backend

- 프론트 파트에서 회원가입 폼을 구현해서 가 로그인 기능을 만들었습니다.
- 가짜 로그인 기능이므로 실제 데이터 모델에는 제약사항이 존재하지 않습니다.
- 이메일 하나로 회원가입할 수 있으며 사용자이름, 비밀번호, 나이 등 다른 정보는 필요 없습니다.
- 이메일을 제외하고 다른 사항들은 서버에서 자동으로 생성하여 부여합니다. 예 ) 이름 Anonymous1, Anonymous2 ...
- bcrypt 암호화 모듈을 설치하였습니다. npm i 부탁드립니다.
- 프론트 영역을 많이 건드리게 되었습니다. 프론트가 작업하는 파일은 join 이외에 건드리지 않았습니다.
- 프론트 영역에 backend 디렉터리를 추가하였습니다. 단순 기능이 동작하는지 테스트하기 위한 pug 문서를 작성을 위해서.

## 200806 frontend

- 구글로그인 > 카카오로그인으로 변경하였습니다. login.pug의 해당 경로를 수정해주세요.

### 웹펙에서 file-loader와 url-loader를 추가하였습니다.

    - [ npm install --save-dev file-loader && npm install -D url-loader ] 설치해주세요
    - src에 추가된 img 파일들이 퍼블릭(static) 폴더에 추가될 수 있게 되었고, 5kb 미만의 작은 이미지의 경우 url-loader로 Data-url 형식으로 변환되어 효율적으로 운용됩니다.
    - 결과적으로 이미지 로딩에는 실패했습니다. 추후 수정하겠습니다.

- layout.pug의 script 부분이 block으로 변경되었습니다.
  * backend 에서 수정 사항
  - webpack 이 이미지 파일을 처리 후 바이너리가 깨지던 현상을 해결했습니다.
  - img 소스파일은 public/img 디렉터리에 생성됩니다.
  - 프론트 화면에서 이미지가 깨지던 문제를 해결하였습니다.

## 200810 frontend

- 일부 더미 파일들을 제거하였습니다.
- scss 사용 보류로 assets/scss 의 구성을 css 개발 환경으로 바꾸었습니다.