install:
	npm install
dev:
	npm run dev
lint:
	npm run lint
prod-build:
	docker compose build
prod:
	make prod-build && docker compose up
down:
	docker compose down
