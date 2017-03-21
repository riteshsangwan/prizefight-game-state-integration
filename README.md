Live Free and Play Hard - Game State Integration API's
---

### Prerequisites

- nodejs: Node js version 6.9.x is required to run this application. A convient way to maanage and install multiple node js versions is [nvm](https://github.com/creationix/nvm)
- MySQL: Latest MySQL DB is required to run this application.

### Configuration

The application uses [config](https://github.com/lorenwest/node-config) module to manage the application configuration

Below table details all the application configuration

| NAME  | DESCRIPTION  | VALUE  |
|:-:|:-:|:-:|
| LOG_LEVEL  | The application log level  | debug  |
| PORT  | The port on which server should listen  | 3500  |
| KNOTS_TO_KM  | A constant multiplication factor from knots to km  | 1.852  |
| db.url  | The MySQL connection string  | mysql://localhost:3306/lfph  |

#### Sensitive configuration

db.url: MySQL url is quite sensitive information and it should not be directly committed in version control for production environment. For this purpose it is possible to have this set up as environment variable.

`export DB_URL=whatever-your-url-is`

For the purpose of local deployment, it is not required to do these steps and application can use the default configuration.

> NOTE: By default the application will connect to mysql on `localhost` at port `3306`

### Application setup

Next step is to install the node module dependencies and get the server running.

To install the dependencies run `npm install` from root of the project.

#### Linting

To lint the source run `npm run lint` from root of project.

There should not be any lint errors.

#### Start the server

To start the server run `npm run start`. This should start the server on port `3500` (default port).
