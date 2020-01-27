FROM carlosalgms/docker-node-slim-with-chromium

COPY ["package*.json", "./"]

RUN echo "Who am I? '$(whoami)'" \
		&& echo "Node version: $(node -v)" \
		&& echo "NPM version: $(npm -v)" \
		&& echo "Current dir: $(pwd)" \
		&& set -ex \
		&& npm ci \
		&& npm cache clean --force

COPY ["src/", "./src/"]
COPY ["tsconfig.json", "./"]

ENV NODE_ENV production
RUN set -ex \
		&& npm run build

COPY ["static/", "./static/"]

CMD ["node", "./build/server/index.js"]
