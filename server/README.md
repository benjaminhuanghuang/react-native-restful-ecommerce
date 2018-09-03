## Reference
- InStore a React-Native E-Commerce with a Restful API in NodeJS
  - https://www.youtube.com/watch?v=_MBAqgRUAYo&list=PLzQWIQOqeUSOB0MLhG5JZDym39lZPEp7l
  - https://github.com/EQuimper/InStore-a-React-Native-E-Commerce-with-a-Restful-API-in-NodeJS


## Setup
```
  yarn add axios express mongoose morgan
```
support new javascirp
```
  npm i babel-core babel-preset-env babel-plugin-transform-object-rest-spread -D
```
utilities
```
  npm i cross-env nodemon yup -D
```
yup is used for json request validation.


## Auth
- Log in to provider(Facebook/ Google) to get a token
- Use this token to get user infomation and save it into database, return jwt token
