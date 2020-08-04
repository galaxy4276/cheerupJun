# Development Logs

# Project Reviews
* Application 파일은 build와 src 두 가지로 나눔
* build 는 배포 서버, src는 개발용 테스트 서버

# 200804 frontend
* src/views/_html은 개발을 돕기 위한 임시 폴더이므로 build로 배포하지 말아주세요
* views 구조 변경
* views/template/login.pug 를 추가 (scss 수정)
* main.pug > index.pug로 변경(testcontrollers 경로 수정)

## 200823 backend
* mariadb, Sequelize 모듈 추가 설치했습니다. ( npm i 설치 필요 )
* db 설정값은 config/config.json에 포함되어 있습니다.
* model/index.js 에서 db에 관한 환경설정이 작성되어있습니다.
* middlewares.js에 db 에 연결하고 연결진위여부를 반환하는 함수를 작성해서 app.js에 연결해 두었습니다.
* app.js를 개편하고 더 많은 모듈을 추가하였습니다.
