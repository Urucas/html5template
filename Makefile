
BABEL = ./node_modules/.bin/babel

all: node

node: lib
	@mkdir -p ./node
	@cp -r ./assets ./node/assets
	@for path in lib/*.js; do \
		file=`basename $$path`; \
		$(BABEL) "lib/$$file" > "node/$$file"; \
	done

clean:
	@rm -rf ./node/
