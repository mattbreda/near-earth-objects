# Near Earth Objects Monitoring :comet: :artificial_satellite:

## :computer: Code Challenge :computer:

This code challenge consists of an interface that can be used to monitorate Near Earth Objects using Nasa's APIs.

## :hammer_and_wrench: Tech Stack :hammer_and_wrench:

| Technology | Use  |
|---|---|
|[React](https://reactjs.org/)|JavaScript library for building user interfaces|
|[CSS Modules](https://github.com/css-modules/css-modules)|Styling (CSS in Js)|
|[Axios](https://www.npmjs.com/package/axios)|HTTP client|
|[Redux](https://redux.js.org/)|State Container for JS Apps|

## :interrobang: Why (S)CSS Modules? :interrobang:
As you will see from the code in the project, I decided to use CSS Modules rather than normal SCSS. This choice wasn't made for a particular reason, except for personal taste.
I tried to structure the components css using  BEM architecture.

## :clipboard: How to run the project localy :clipboard:	
1. Be sure to have Node.js installed on your device! (To check it, open your terminal and type `node -v`, this will tell you the node version installed on the device, otherwise you can install it using this [link](https://nodejs.org/it/));
2. Now clone the project on your device following these steps:
  1. Open the terminal and change the directory to a folder where to clone the project;
  2. Type: `git clone https://github.com/mattbreda/near-earth-objects`; when the clone will be over, type `cd near-earth-object` to move in the directory;
  3.  Now you will need to install all the dependencies needed to run the project, and you can do that by typing `npm install`;
  4.  Now you are ready to run the project locally, and to do that type `npm run start`; The project will be opened in your default browser at the adress `localhost:8000/` (I changed the default port from _3000_ to _8000_ to avoid any conflict ;) )
 
 ##  :telescope: Content of SRC folder :telescope:
 Inside the src folder you will find:
 * `Components/UI` Here you will find all the _dumb_ components folders, which are those components which don't need a state; Each folder will contain the single component javascript file and its scss file;
 * `Containers` here you will find all the components using a state or the components made of simpler _dumb_ components;
 * `Mocks` Here you can find the mocks of nasa's APIs
 * `Store` Here you will find actions and reducers used by REDUX;
 * `Utils` Here you will find utility files and functions;
 * `App.js` the core off the app;
