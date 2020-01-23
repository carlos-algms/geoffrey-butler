# Geoffrey the Butler

## Docker

To test the App running from Docker, first it necessary to build it locally:

```shell
docker build --rm -t geoffrey:latest .
```

Then, run the image mapping the port `80` from Docker to `3000`

```shell
docker run --rm -d -p 3000:80 geoffrey:latest
```

Now the App will be running at http://localhost:3000/
