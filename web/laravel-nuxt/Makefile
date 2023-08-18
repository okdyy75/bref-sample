.PHONY: build clean deploy

build:
	npm --prefix ./frontend run build:dev

clean:
	rm -rf ./frontend/.nuxt
	rm -rf ./frontend/.output

deploy: clean build
	sls deploy --verbose
