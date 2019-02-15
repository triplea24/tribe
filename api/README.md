# API

The backend is writtent with following technologies:

1. Node
2. TypeScript
3. Express
4. Mongoose

## Getting started

First start off by installing the depandencies using npm or yarn

	yarn (install) || npm install
	
Create a `.env` file in the root directory (/api/) containing following content:

	MONGODB_URL=YOUR_MONGO_URL
	
You can start the server by using following command:
	
	yarn dev || npm run dev
	
## Testing

For matter of testing, I've used Jest framework. But as there is Mongo client in the express app, you should inject `MONGODB_URL` in environment variables while running the test.

You can do it thus:

	MONGODB_URL=YOUR_TEST_MONGO_URL yarn jest
	
