
all: 
	npm run tsc

re: all server/run

server/lint:
	npm run lint

server/run:
	node --experimental-modules --es-module-specifier-resolution=node ./out/index.js