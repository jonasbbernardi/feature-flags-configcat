# Poc ConfigCat

ConfigCat validation for feature flags.

## ConfigCat configurations

In ConfigCat panel, there is a **product** level, where you can set a product using the environments and flags.

Inside each product you have options to define **Environments**. Each environment have it's own **SDK KEY**.

The you can add configs based on environments, each config is a bunch of feature flags.

Inside each feature flag, for each environment, you can set tags and **rules** to be validated.

These rules can target **users**, **segments** or **pre-requisites**.

### Users

When getting a feture flag you can send user as parameter to be validated.

Also, it is possible to set a "default user" to validate each time in any environment.

It is possible to filter users by identifier, email, country or any custom field (like group_id).

### Segments

In product level, there is a tab where it is possible to define segments.

Segments is a simple filter to users, where you can set a name and description to it.

### Pre-requisites

Pre-requisites is a condition to one flag be setted by another flag value.

ConfigCat has redundancy check for these rules.

## Project

This project is divided by 2: frontend and backend and use 4 feature flags along both.

Frontend have one feature flag (`enableSymptomChecker`) to demonstrate how it works on live apps.

Backend have thre flags:

- `useAiModuleForTriage`: Used as an endpoint to frontend, to demonstrate live apis called by front;
- `enableDetailedAuditLogs`: Used as API to be called independent from frontend;
- `userHealthPlan`: Used to validate ConfigCat rules for feature flags.

## Setup

Main project use workspace to handle dependencies, so run install on root folder.

**!IMPORTANT!**

Node version must be **> 22**.

```bash
npm install
```

To set environment variables, you can use on root or inside each project (back/front).

In each folder (root/back/front) there is a `.env.enxample`, copy the content of it to a `.env` file, replacing values of variables.

### Backend Configs

- CONFIGCAT_SDK_KEY:      ConfigCat SDK Key (can be founded on feature flag config, for each environment);
- CONFIGCAT_LAZYLOAD_TTL: Interval in seconds to refresh feature flag with value defined in ConfigCat panel;
- PORT:                   Port to run backend service.

### Frontend Configs

- VITE_CONFIGCAT_SDK_KEY:       ConfigCat SDK Key (can be founded on feature flag config, for each environment);
- VITE_CONFIGCAT_POLL_INTERVAL: Interval in seconds to refresh feature flag with value defined in ConfigCat panel;
- VITE_BACKEND_URL:             Full url where the backend is running.

## Run

Projects are configurated to run with `npm run start:dev` command.

To run all together, use command on root folder.

To run frontend or backend separately, go to desired folder and run command.

### Docker

It's possible to run trought docker, exposing ports as env file and using `.env` as environment variables file with commands:

**!IMPORTANT!**

Remove double quotes and comments (with "#") after variable values from .env if using docker.

```bash
  docker build -t feature-flags .
  docker run --rm --name feature-flags -p 8000:8000 -p 9000:9000 --env-file .env feature-flags
```

Current image size: 290.02Mb.

## References

- [React SDK][config-cat-react-sdk]
- [NodeJs SDK][config-cat-nodejs-sdk]
- [Segments][config-cat-segments]

<!-- References -->

[config-cat-react-sdk]: https://configcat.com/docs/sdk-reference/react/
[config-cat-nodejs-sdk]: https://configcat.com/docs/sdk-reference/node/
[config-cat-segments]: https://configcat.com/docs/targeting/targeting-rule/segment-condition/
