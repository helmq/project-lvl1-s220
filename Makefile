install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games-cli.js

start-even:
	npm run babel-node -- src/bin/brain-even-cli.js

start-calc:
	npm run babel-node -- src/bin/brain-calc-cli.js

start-gcd:
	npm run babel-node -- src/bin/brain-gcd-cli.js

start-balance:
	npm run babel-node -- src/bin/brain-balance-cli.js

start-progression:
	npm run babel-node -- src/bin/brain-progression-cli.js

start-prime:
	npm run babel-node -- src/bin/brain-prime-cli.js	

publish:
	npm publish
	
lint:
	npm run eslint .
