[![codecov](https://codecov.io/gh/codecov/gazebo/branch/main/graph/badge.svg?token=UAP786D58M)](https://codecov.io/gh/codecov/gazebo)

# Gazebo

Gazebo is the Front-end SPA of Codecov. It's a greenfield project we kicked off in November 2020 with the ambition of rewriting all the legacy pages from [codecov.io](https://github.com/codecov/codecov.io) and [codecov-client](https://github.com/codecov/codecov-client) in a single repository with a more modern approach.

We decided to use React from our investigation [here](https://codecovio.atlassian.net/wiki/spaces/ENG/pages/825393161/React+investigation)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

We recommend using the same Node version as in CircleCI: [Node (Latest LTS)](https://nodejs.org/en/download/).
You can refer to the .nvmrc in the root folder.

## Run the project

To run the project in development mode

```bash
> npm install
> npm run start
```

The page will reload when you make edits. There is a local proxy to the staging API so you can develop against it. You can overwrite it by creating a `.env.local` file with it with the following:

```
PROXY_TO=http://localhost:5100
```

## Run tests

You can run the tests with

```bash
> npm run test
```

This script is using Jest, so any valid Jest options can be added to the command.

We are using the [Testing Library](https://testing-library.com/docs/react-testing-library/intro) to test the React components.


## Linting

```bash
> npm run test
```
will lint the whole project.

We have some extra rules to keep the code more maintainable:

- Complexity of max 5 per function: to prevent functions with a lot of of different outcome
- 10 max statements per function: to prevent a function doing too much
- 2 level of nested callbacks: to prevent complexity within nested functions
- Mandatory prop-types: as we don't have a Type system, this rule will help us have documented components

## Build the application for production

```bash
> npm run build
```

will build the application in the `build` folder. We currently use Netlify for deployment, which will be subject to change.

## Config

The config are centralized in one place in the file `config.js`. The file merges multiple configuration in one object:

- hardcoded configuration in that file
- the configuration from `process.env` [documentation here](https://create-react-app.dev/docs/adding-custom-environment-variables) which is set on build-time
- the configuration from `window.configEnv` which can be set on start-time 
