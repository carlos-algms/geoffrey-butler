IMAGE=geoffrey

docker:
	docker build --rm -t $(IMAGE):latest .

run:
	docker run --rm -dp 3000:3000 geoffrey:latest

publish:
	git push heroku master
