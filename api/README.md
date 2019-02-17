# API

The backend side is written with following technologies:

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

To generate delays or 500 code I use `Math.random()` to generate a random number between `0` and `1`. The random number happened to be less than `0.1` in `10%` of the times.

For the rest of the times, which is `90%`, I need to delay as it happen to be `20%` of the times in overall. So I just need to delay in `18%` of the times for the remaining. So I generate a new `Math.random()` and see if it is less than `0.18`. 

The whole process is thus:

	if ( Math.random() < 0.1) {
		// 10% of the overall times
    	// Send 500 staus code
    }
    
    // The 90% of the overal times
    if ( Math.random() < 0.18) {
		// 18% of the rest == 20% of overall
    	// Delay more than 5 sec
    }
    

### GET /api/v1/posts

To delay in the request I used the same strategy above to generate delay in 20% of the times.

### RabbitMQ

To handle the requests better, my suggestion is to use RabitMQ to process the requests.

### Test coverage

The automated test suites in this module just cover some aspects of the codes and are prone to dismiss false negative or false positive or other corner cases I might not considered.