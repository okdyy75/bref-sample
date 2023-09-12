.PHONY: build deploy

build:
	npm run build:dev

build-prd:
	npm run build:prd

deploy: build
	sls deploy --verbose

deploy-prd: build-prd
	sls deploy --stage prd --verbose
