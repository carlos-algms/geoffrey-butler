FROM alpine:latest

USER root
# Installs latest Chromium package.
RUN set -ex \
		&& echo @edge http://nl.alpinelinux.org/alpine/edge/community > /etc/apk/repositories \
		&& echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories \
		&& apk add --no-cache \
			nodejs@edge \
			nodejs-npm@edge \
			chromium@edge \
			ttf-freefont@edge \
			freetype@edge \
			libstdc++@edge \
			harfbuzz@edge \
			nss@edge \
			tini@edge \
			# make@edge \
			# gcc@edge \
			# g++@edge \
			# python@edge \
			# git@edge \
		# && apk add --no-cache -X http://dl-cdn.alpinelinux.org/alpine/edge/testing wqy-zenhei \
		&& rm -rf \
			/var/cache/* \
			/var/lib/apt/lists/* \
			/usr/share/man \
			/tmp/* \
		&& mkdir /var/cache/apk \
		# Add Chrome as a user
		&& mkdir -p /usr/src/app \
		&& adduser -D chrome \
		&& chown -R chrome:chrome /usr/src/app

# Run Chrome as non-privileged
USER chrome
WORKDIR /usr/src/app

ENV CHROME_BIN=/usr/bin/chromium-browser \
		CHROME_PATH=/usr/lib/chromium/ \
		PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 \
		PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser \
		HUSKY_SKIP_INSTALL=1 \
		CI=1

COPY --chown=chrome ["package*.json", "./"]

RUN echo "Who am I? '$(whoami)'" \
		&& echo "Node version: $(node -v)" \
		&& echo "NPM version: $(npm -v)" \
		&& echo "Current dir: $(pwd)" \
		&& ls -la \
		&& npm ci \
		&& npm cache clean --force

COPY --chown=chrome ["src/", "./src/"]
COPY --chown=chrome ["tsconfig.json", "./"]

ENV NODE_ENV production
RUN set -ex \
		&& npm run build \
		&& npm prune

EXPOSE 80 443 3000

ENTRYPOINT ["tini", "--"]

CMD ["node", "./build/server/index.js"]
