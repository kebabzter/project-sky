
# Project SKY

Project SKY is a project created with educational purposes, using Angular as a Front-end, and a Node.js REST API server as a Back-end. The database of choice is MongoDB

## Information about the project

* The app is designed with the idea of sharing your Github projects on a platform where people can see them.
* Guests can only visit the Home, Explore(Catalog), Login and Register pages.
* Logged in users are able to Create and Post their projects as well as Edit and Delete them.
* Explore page displays all projects that have been created.
* Each project's details can be accessed at its details page. In the Details page only Creators are provided with Edit and Delete functionality.
* Profile page is a page where each user can view and access their projects. 





## Showcase

<img src="https://cdn.discordapp.com/attachments/960121710953254912/1052987371257335918/image.png" width="49%"></img> 
<img src="https://cdn.discordapp.com/attachments/960121710953254912/1052996048630587443/image.png" width="49%"></img> 
<img src="https://cdn.discordapp.com/attachments/960121710953254912/1052996108915327027/image.png" width="49%"></img>
<img src="https://cdn.discordapp.com/attachments/960121710953254912/1052996145359618118/image.png" width="49%"></img> 

Trailer/Showcase of the application: https://www.youtube.com/watch?v=UQFKCHP4qCo

## Technologies

* Client
    * Angular CLI : 14.2.10
    * TypeScript : 4.7.2
* Server 
    * bcrypt: 5.1.0
    * cors": 2.8.5,
    * express: 4.18.2,
    * express-validator: 6.14.2,
    * jsonwebtoken: 8.5.1,
    * mongoose: 6.7.3


## Setup
You can access the front end of the app by visiting: https://project-sky-15e73.web.app or can install it locally: 
```bash
  $ cd client
  $ npm install
  $ ng serve
```
However, it will not operate until you start the REST API server. In order to do so in the project directory you should do the following steps:
```bash
  $ cd server
  $ npm install
  $ npm start
```
And the server will start listening on port 3030.

In case of any issues make sure you are using the Google Chrome browser as others for example Brave may cause issues
