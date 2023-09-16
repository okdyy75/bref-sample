.PHONY: build clean deploy

clean:
	docker compose exec lambda php artisan config:clear
	rm -rf ./frontend/.nuxt
	rm -rf ./frontend/.output

build:
	npm --prefix ./frontend run build:dev

build-prd:
	npm --prefix ./frontend run build:prd

deploy: clean build
	sls deploy --verbose

deploy-prd: clean build-prd
	sls deploy --stage prd --verbose
