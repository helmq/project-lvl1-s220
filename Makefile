install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games-cli.js

start-even:
	npm run babel-node -- src/bin/brain-even-cli.js

start-calc:
	npm run babel-node -- src/bin/brain-calc-cli.js

publish:
	npm publish
	
lint:
	npm run eslint .
