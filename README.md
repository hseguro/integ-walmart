# integ-walmart

Clone the repository with this command.

``git clone --recursive git@github.com:hseguro/integ-walmart.git``

``cd integ-walmart/ ``

## Start the project

``docker-compose up``

## Populate database

``make -f ./products-db/Makefile database-provision``

## Test the api
``curl localhost:8080/api/search?search=121``