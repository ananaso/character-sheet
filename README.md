# Character Sheet

<img src="" alt="" width=""/>

## Table of Contents

1.  [Overview](#Overview)
2.  [Description](#Description)
3.  [Usage](#Usage)
4.  [Installation](#Installation)
5.  [Libraries](#Libraries)
6.  [License](#License)

## Overview

**Text here**

- Database: built in PostgreSQL
- Client: built in ReactJS
- Server: built using Express
- Repository: [GitHub](**URL here**)
- Deployment: [Heroku](**URL here**)

## Description

**Text here**

## Usage

### App

Try it out for yourself! Please follow the instructions below to access the app in 1 of 3 ways: Heroku, Docker, or Source Code.

## Installation

The installation options below are ordered from least configurable to most configurable.

### Set-up Script

- To automate the updating of all configuration and asset files, I've written a bash script named "setup.sh". This script must be run after any changes you make to the .env file.

- Run `chmod +x scripts/setup.sh` to give permission for the bash script to run.

- The script moves a copy of the .env file to the client folder and appends "REACT_APP\_" to the front of all variables.

- Run `scripts/setup.sh` after modifying the .env.example file in the first steps of the Docker and Source Code instructions.

### Heroku

1. To use the application hosted on Heroku, please click or paste the following URL in your browser: **URL here**.

### Docker

1. Go to the config folder and modify the .env.example file using the [format in this README](#Environment-Variables) and the format in the provided .env.example file. Delete the ".example" extension from the .env filename before running the application. Run setup.sh after you are done making modifications.

2. Run `docker-compose --env-file ./config/.env up --build` and using your browser, proceed to the address and port for the client as specified in your .env file (e.g. http://localhost:3000).

### Source Code

_NOTE 1_: The following instructions must be read and followed in-order!

_NOTE 2_: The set-up of this repository and instructions were made to be as developer-agnostic as possible. Custom configuration for ports and names can be done in the .env.example file as noted later in this installation section.

1. Modify the .env.example file using the format commented within the .env.example file. Delete the .example portion of the extension from the .env file before running the application. Run setup.sh after you are done making modifications.

2. Start your Docker app and run the following command to spin-up PostgreSQL and the required database: `docker run --rm --name **DB here** -v $PWD/db:/docker-entrypoint-initdb.d/ --env-file ./config/.env -p $(awk -F "=" '/PG_PORT/{print $NF}' ./config/.env):5432 postgres:latest`

3. Go to the client folder and execute `npm install`

4. Go to the server folder and execute `npm install`

5. (OPTIONAL) If you change the seeds or migrations, or the database becomes corrupted, you can run `npm run db:reset` in the server folder to run the migrations and seeds again.

6. Go to the client and execute `npm run dev` to start the React app.

7. Go to the server and execute `npm run dev` to start the Express server.

8. Proceed to the address and port for the client as specified in your .env file (e.g. http://localhost:3000)

### Environment Variables

Environment variables that control the operation of the app are defined in the
`.env` file in the application root. These variables and their usage are shown
in the following table.

Environment variables maintained in the `.env` file are made available to the
application code via `process.env.<variable-name>`. For example, the
port for the client is accessed in the code by referencing
`process.env.PORT`.

| Environment Variable | Description                              | Example Setting                  | Applicability    |
| :------------------- | :--------------------------------------- | :------------------------------- | :--------------- |
| PORT                 | Local and/or container port for client   | 3000                             | server, client   |
| HOST_DEV             | Local and/or container host for server   | localhost                        | server, client   |
| HOST_LIVE            | Deployed host for server                 | shop-till-you-drop.herokuapp.com | server, client   |
| HOST_DB              | Docker host for database                 | postgres                         | server           |
| PROTO_DEV            | Local and/or container protocol          | http                             | server. client   |
| PROTO_LIVE           | Deployed protocol                        | https                            | server, client   |
| API_PORT             | Local and/or container port API server   | 3001                             | server, client   |
| POSTGRES_DB          | Database name                            | shop-till-you-drop               | server, database |
| POSTGRES_USER        | PostgreSQL username                      | postgres                         | server, database |
| POSTGRES_PASSWORD    | PostgreSQL password                      | docker                           | server, database |
| PG_PORT              | Local and/or container port for database | 5432                             | server, database |

## Libraries

### Client

| Module/Library | Environment | Description                                        |
| :------------- | :---------- | :------------------------------------------------- |
| pg             | Runtime     | PostgreSQL client                                  |
| react          | Runtime     | UI Library                                         |
| react-dom      | Runtime     | DOM renderer for React                             |
| react-scripts  | Runtime     | Scripts and configuration used by Create React App |
| dotenv         | Runtime     | .env file reader                                   |
| js-cookie      | Runtime     | Cookies                                            |

### Server

| Module/Library | Environment | Description         |
| :------------- | :---------- | :------------------ |
| debug          | Development | Debug utility       |
| nodemon        | Development | Live server updates |
| express        | Runtime     | Web framework       |
| http-errors    | Runtime     | Http error creation |
| morgan         | Runtime     | Logger              |
| jade           | Runtime     | Template engine     |
| cookie-parser  | Runtime     | Cookie middleware   |
| cors           | Runtime     | CORS middleware     |
| dotenv         | Runtime     | .env file reader    |
| pg             | Runtime     | Postgres client     |

## License

This software is licensed under the [MIT](./LICENSE) license.
