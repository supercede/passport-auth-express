# NodeJS (Express) Authentication with Passport
A repo for my article on setting up Passport with Express

### Prerequisites

Ensure you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/download-center/community) or [Mongo Atlas](https://www.mongodb.com/download-center/cloud)

## Technologies Used

- [NodeJS](https://nodejs.org/en/download/)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/download-center/community)
- [PassportJS](http://www.passportjs.org/)

### Installing/Running locally

- Clone or fork repo

  ```bash
    - git clone <repo>
    - cd passport-auth-express
    - npm install
    - git checkout [your-desired-branch]
  ```

- Create/configure `.env` environment with your credentials. A sample `.env.example` file has been provided to get you started. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials (ensure to provide the correct details).

- Run `npm run dev` to start the server and watch for changes