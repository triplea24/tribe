# Frontend

The frontend side is written with following technologies:

1. React
2. TypeScript
3. Redux
4. ReudxThunk
5. MaterialUI
6. DraftJS
7. Ramda

**NOTE**: I've used `create-react-app` boilerplate to initiate this project.

## Getting started

First start off by installing the depandencies using npm or yarn

	yarn (install) || npm install
	
Before running the app, you must start the server. You can find the instructions on the [server directory](../api/).

The next step would be to put the server's base url inside the project. In order to do that, go to [src/actions/index.tsx](./src/actions/index.tsx) and change the following line:

	const SERVER_BASE_URL = SERVER_URL;
	
Then you can start the app by using the following command:
	
	yarn start || npm run start
	
## Testing

Just simply invoke the `jest` cli.

	yarn test
		

## Some insights about the technical challenges

### API wrapper

Currently, everything is handled inside `actions`folder. I believe writing a wrapper class to work with the API using `axios` will give us more flexiblity to handle delays in responses or prevent sending one request multiple times.

Furthermore, this wrapper would be handy when it comes to change the logic of working with API.

### Test coverage

The automated test suites in this module just cover some aspects of the codes and are prone to dismiss false negative or false positive or other corner cases I might not considered. As an example, `actions` of redux are not test in the project. 

Nevertheless, the project conveniently works.