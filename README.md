# ExpressJS testing with a simple blog

## Installation

### Set the ExpressJS project

```bash
express --view=pug myapp
npm install
```

### Set Sequelize with the previously created PostgreSQL database

```bash
npm install --save sequelize
npm install --save pg pg-hstore
npm install --save-dev sequelize-cli
```

## Usage

### Run the server

```bash
DEBUG=myapp:* npm start
```
