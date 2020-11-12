# ChallengeRecursiva

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

#### INSTALL

- npm install

#### BUILD

- ng build --prod

#### DOCKER

- docker build . -t challenge-recursiva:latest
- docker run -d -p 80:80 challenge-recursiva:latest
- localhost/

#### PUSH DOCKER HUB

- docker tag challenge-recursiva kfiorentino/challenge-recursiva:v0.0.1
- docker push kfiorentino/challenge-recursiva:v0.0.1
