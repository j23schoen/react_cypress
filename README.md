# open the cypress test runner

docker-compose -f docker-compose.yml -f cy-open.yml up cypress

# run all cypress tests headlessly
ocker-compose up --exit-code-from cypress