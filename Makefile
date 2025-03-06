.PHONY: pull deploy build up down e2e-ci e2e migrate run test cov mt
pull: 
	git pull

e2e-ci: reset
	bundle exec cucumber --publish-quiet --tags "not @doing"

e2e: reset
	bundle exec cucumber --publish-quiet

reset:
	bundle exec rake db:drop db:create db:migrate

migrate: install
	bin/rails db:migrate

install: 
	bundle install

drop:
	bin/rails db:drop

create:
	bin/rails db:create

run: install migrate
	@echo "Starting development server..."
	bin/rails s

test:
	@echo "Running tests..."
	bundle exec rspec

cov:
	open coverage/index.html

lint:
	bundle exec rubocop

format:
	bundle exec rubocop -a