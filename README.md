# tic tac toe app
followed [tutorial here](https://reactjs.org/tutorial/tutorial.html#before-we-start-the-tutorial)

## setting up the cypress test runner

I followed instructions from [here](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/#Docker-compose) for guidance on getting cypress running with docker

most of those instructions are mac os specific, linux users should experience limited configuration

the instructions regarding quartz are specific to mac os

you may get an error that says x cannot open the display, it's because we need to tell x to accept requests coming from our local

I solved this on linux with the following line:

```shell
xhost + local:root
```

for mac os, following the linked instructions above should fix this. 

when I followed the instructions on a mac I forgot to set the DISPLAY environment variable and I forgot to restart my computer after installing quartz.

The DISPLAY env variable is used by docker compose to pass into the cypress image.


## running cypress

docker-compose -f docker-compose.yml -f cy-open.yml up cypress

## run all cypress tests headlessly
ocker-compose up --exit-code-from cypress