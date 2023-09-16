.PHONY: build clean deploy

clean:
	docker compose exec lambda php artisan config:clear

build:
	npm run build:dev

build-prd:
	npm run build:prd

deploy: clean build
	sls deploy --verbose

deploy-prd: clean build-prd
	sls deploy --stage prd --verbose
