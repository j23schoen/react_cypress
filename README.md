# open the cypress test runner

follow instructions from [here] (https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/#Docker-compose) for guidance on getting cypress running with docker

the instructions regarding quartz are specific to mac os, linux shouldn't require much fiddling with, other than the following bit about configuring xhost

you may get an error that says x cannot open the display, it's because we need to tell x to accept requests coming from our local
```shell
xhost + local:root
```

docker-compose -f docker-compose.yml -f cy-open.yml up cypress

# run all cypress tests headlessly
ocker-compose up --exit-code-from cypress