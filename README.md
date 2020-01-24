<img align="right" width="140" src="https://geoffrey-butler-bot.herokuapp.com/static/images/geoffrey-butler.webp" alt="Geoffrey Butler" />

# Geoffrey the Butler

https://geoffrey-butler-bot.herokuapp.com

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md#pull-requests)

Geoffrey Butler is a multi-purpose Bot built to be run inside a docker container.

### Chores:

- Automate tasks with headless browsers
- Be a slack bot
- Be a github bot
- Serve static content

## Running locally with Docker

To test the App running from Docker, first it necessary to build it locally:

```shell
docker build --rm -t geoffrey:latest .
```

Then, run the image mapping the port `3000` from Docker to `80`

```shell
docker run --rm -d -p 80:3000 geoffrey:latest
```

Now the App will be running at http://localhost:3000/

## Local Dev Server (no-docker)

```shell
npm run dev
```

Changing the server port

```shell
PORT=4321 npm run dev
```
