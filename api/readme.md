# Connex Epoch API

This is the API I have built for the backend of the technical task provided by Connex One.

## Environment variables

Currently the project supports two optional variables (default can be found in the appropriate config file).

AUTH_TOKEN<br />
PORT

Note: if you change the port and wish to run in docker you must expose a different port within the Dockerfile.

## Running on docker

Run the following commands to run the project using Docker.

```

docker build . -t name/connex-epoch-api
```

```

docker run -p 49160:8080 -d cameronjyoung/connex-epoch-api

```