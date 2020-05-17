# next-express-ts-boiler

This repository is a boilerplate for creating an app using Next.JS, TypeScript, Express, and SCSS.

### Prerequisites
This boilerplate requires [Node.JS](https://nodejs.org/en/) and [yarn](https://github.com/yarnpkg/yarn) to be installed on your computer.
I recommend using `yarn` over `npm`

### Installation
```
git clone https://github.com/aiomonitors/next-express-ts-boiler.git
cd next-express-ts-boiler
rm -rf .git
yarn install
```
After running the above commands, you should be able to run the program using `yarn start`

### Usage
First you will want to edit the `package.json` to reflect your project (Name, repo, author)
After editing the `package.json`, you are ready to start coding!

All your server code should be put in `server/`. Anything in this directory will be compiled into `dist/`.
All your frontend code should be put in `src/`.  Anything in this directory will be compiled into `.next/`

### Commands
`yarn start`        - Starts the server (Note: Must have run `yarn build` before using this command) <br/>
`yarn build:server` - Compiles the `server/` directory into `dist/`  <br/>
`yarn build:next`   - Builds the `src/` directory into `.next/` for production <br/>
`yarn build`        - Runs `yarn build:server` & `yarn build:next` <br/>
`yarn dev:server`   - Starts the application using `ts-node-dev` and reloads when changes are detected in `server/` <br/>
`yarn dev`          - Starts the next application (Note: Does not start the server) <br/># member-dashboard
