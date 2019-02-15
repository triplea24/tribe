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
	
## Some insights about the technical challenges

### POST /api/v1/posts

To generate delays or 500 code I used a counter which is initialy 0. It increases after each request.

To send `500` error on 10% of the time I just check wheter the counter is dividable by 9 which occures roughly 1/9 = 11% of the times.

To delay more than 5 seconds 20% of the time I just check wheter the counter is dividable by 5 which occures exactly 20% of the times excluding the first 4 requests.

### GET /api/v1/posts

To delay in the request I used the same strategy above to generate delay in 20% of the times.

### Test coverage

The automated test suites in this module just cover some aspects of the codes and are prone to dismiss false negative or false positive or other corner cases I might not considered.