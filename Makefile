
all: 
	tsc

re: all server/run

server/lint:
	npm run lint

server/run:
	node ./out/server.js