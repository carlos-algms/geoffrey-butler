IMAGE=geoffrey

docker:
	docker build --rm -t $(IMAGE):latest .

publish:
	heroku container:push web

publish_node:
	git push heroku master

release:
	heroku container:release web
