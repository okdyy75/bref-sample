.PHONY: build clean deploy

clean:
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
