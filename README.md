# ChallengeRecursiva

## Angular + Docker + NGINX + Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

#### INSTALL

- `npm install`
- `ng serve`

#### Build DOCKER Manualmente

- `docker build . -t challenge-recursiva:latest`
- `docker run -d -p 80:80 challenge-recursiva:latest`
- localhost/

#### Build DOCKER Automatizado

- `docker build . -t challenge-recursiva:latest`
- `docker-compose up -d`
- `docker-compose -d --build (Recompilar container)`

#### PUSH DOCKER HUB

- `docker tag challenge-recursiva {USER_NAME}/challenge-recursiva:v0.0.1`
- `docker push {USER_NAME}/challenge-recursiva:v0.0.1`

#### DEPLOY TO HEROKU CLI

- add files:
    - Dockerfile
    - heroku.yml
    - app.json (Para que funcione el botón `Deploy to Heroku` del README.md)
- `heroku container:login`
- `heroku create`
- `docker tag challenge-recursiva registry.heroku.com/{APP_NAME_HEROKU}/web`
- `docker push registry.heroku.com/{APP_NAME_HEROKU}/web`
- `heroku container:release web --app={APP_NAME_HEROKU}`
- `heroku open`