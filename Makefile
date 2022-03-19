

build: lint
	npm run tsc

lint:
	npm run lint

run:
	node --experimental-modules --es-module-specifier-resolution=node ./out/index.js

re: build run
