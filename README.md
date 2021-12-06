# README - PILOT LOG

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Link to see the deployed application:

[DEPLOYED APPLICATION](https://pilots-logbook.herokuapp.com/)  

## Description  

An easy-to-use web-based application to record pilot’s flight times.  
Record departure and arrival airports and time and automatically calculate flight time.  
Record each flight against a specific aircraft type and registration id.  
Secure login and once you have been logged in, stay logged in until your session expires or you logout  
  
![Dashboard](https://user-images.githubusercontent.com/86697483/144779574-662290da-0424-4459-ad55-37695a7f3ce4.png)
  
Packages/libraries used for this application:  
[Bcrypt](https://www.npmjs.com/package/bcrypt)  
[Connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)  
[date-fns](https://date-fns.org/)  
[dotenv](https://www.npmjs.com/package/dotenv)  
[Express](https://www.npmjs.com/package/express)  
[Express-handlebars](https://www.npmjs.com/search?q=express%20handlebars)  
[Express-session](https://www.npmjs.com/package/express-session)  
[MySQL2](https://www.npmjs.com/package/mysql2)  
[Nodemailer](https://nodemailer.com/about/)  
[Sequilize](https://sequelize.org/)  
[tailwindcss](https://tailwindcss.com/)

## Table of contents:

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Collaborators & Questions](#Collaborators/Questions)

## Installation

1. Fork repository
2. Clone repository to local environment.
3. Node.js must be installed.
4. To install all the dependencies (bcrypt, connect-session-sequelize, date-fns, dotenv, express, express-handlebars, express-session, mysql2, sequilize, tailwindcss) use the following command:

```bash
npm install
```

## Usage  
When you first visit the app, you will be presented with a typical login screen.  
We have included options to signup, login or forgotten password.  
You will be automatically signed out after 5 minutes of idle time.  
![login](https://user-images.githubusercontent.com/86697483/144779356-5658ae68-fbe8-4f05-a3e7-9e062a89a1ab.png)  
  
![signup](https://user-images.githubusercontent.com/86697483/144779379-650df9e4-fcd8-4cf4-aa75-fe2f211349d3.png)  
  
![forgotpw](https://user-images.githubusercontent.com/86697483/144779408-b5a4dca0-d33c-4a16-aeb0-aeb54803118a.png)  
  
Once you login you will be redirected to the Dashboard:
![Dashboard](https://user-images.githubusercontent.com/86697483/144779655-08cad6ad-2953-42f8-b176-e770c6c62fee.png)  
Use the horizontal and vertical scroll bars to view the table of log book entries.
  
To add a logbook entry, click on the Add New button  
![Add-New](https://user-images.githubusercontent.com/86697483/144780146-3bf3f3e2-203c-42b6-9783-f5eb7a5638a4.png)  

To Edit, click on the edit Icon in the table next to the row you want to edit:
![edit-del](https://user-images.githubusercontent.com/86697483/144780338-4c1b953d-228c-4f6e-9725-bc1d4d9bdaed.png)  
![Edit](https://user-images.githubusercontent.com/86697483/144780353-900f8389-9b9b-469c-a79a-ae3f363478b1.png)  

## Links  
Github link: https://github.com/PFZM/Pilot-Log  
  
## License  

This project is covered under the MIT license.

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
Please note we have a code of conduct, please follow it in all your interactions with the project.
Contributions follow the [Contributor Convenant](http://contributor-covenant.org/version/1/4/).

## Collaborators/Questions

Ahrar Bashar  
[GitHub profile](https://github.com/bashar147258)  
[Contact Me - Email](mailto:) - missing email

Pablo Zambrano  
[GitHub profile](http://github.com/PFZM)  
[Contact Me - Email](mailto:pfzm@hotmail.com)

Stuart Simmons  
[GitHub profile](https://github.com/Pilot67)  
[Contact Me - Email](mailto:developer@simmons1.net)
