IMAGE=geoffrey

docker:
	docker build --rm -t $(IMAGE):latest .

run:
	docker run --rm -dp 3000:3000 geoffrey:latest

publish:
	heroku container:push web

publish_node:
	git push heroku master

release:
	heroku container:release web
