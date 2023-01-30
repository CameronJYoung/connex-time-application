# Connex Time Service!

This is the application I have created for the Connex One technical task. It consists of an express API and a vite React application both using TypeScript.

## Requirements

Node v18.13.0

## Setup

This project should work without any additional setup or environment variables. Install node_modules in each folder then, from the root directory create two terminals. On one of them cd into the api project and run "yarn serve". Then on the other terminal cd into frontend and run "yarn dev". You should also be able to run it in docker using the docker-compose file in the root directory (I know it works for the api but had to move to a different device to develop this project and couldn't test it for the frontend).

## Environment variables

Have a look in the config files for each project to see what environment variables you can set.

## Prometheus

I had to use an alternative package to "express-prometheus-middleware" as the documentation doesn't match the library and it is now read only on the git repository. Instead I have started using "express-prom-bundle", it also collects the same default metrics.