# SkyConnect

SkyConnect is a full-stack authentication and user management system built with Node.js, Express, Prisma, and PostgreSQL. The application handles everything from user signup and login to profile updates, token refresh handling, and secure account deletion. The backend is structured with separate routing and controller logic, and the frontend is composed of plain HTML pages served through Express.

This project is ideal for learning how to build a production-level authentication system with secure practices and a clean, modular codebase. It demonstrates knowledge of JWT-based authentication, cookie handling, RESTful API design, and database schema modeling with Prisma.

## Features

- User registration and login
- JWT authentication and HTTP-only cookie storage
- Refresh token system
- Secure password hashing with bcrypt
- Profile management (update user data)
- Account deletion
- Organized MVC-style architecture
- Static HTML frontend integration
- PostgreSQL schema with Prisma ORM

## Technologies Used


<p align="left">
  <!-- Node.js -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="Node.js" />

  <!-- Prisma -->
  <img src="https://raw.githubusercontent.com/prisma/prisma/master/docs/static/images/logo.svg" height="40" alt="Prisma" />

  <!-- pgAdmin4 (custom icon because no official) -->
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pgadmin_logo.png" height="40" alt="pgAdmin4" />

  <!-- .env (environment variables icon - custom generic file icon) -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" height="40" alt=".env" />

  <!-- HTML -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="HTML" />

  <!-- CSS -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="CSS" />

  <!-- JavaScript -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="JavaScript" />
</p>

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT (JSON Web Tokens)
- Bcrypt
- Cookie-Parser
- Body-Parser
- dotenv

## How to Run Locally


## HTML Pages

All frontend views are served from static HTML files. These include:

- login.html
- signup.html
- home.html
- profile.html
- moreinfo.html
- postpage.html
- refresh.html
- setting.html
- deleteaccount.html
- chnageinfo.html

These pages are linked with corresponding routes on the server and communicate with backend APIs for full authentication flow and data manipulation.

## Author

Created by Nermine Kirouane  
 > GitHub: https://github.com/hoophopp

