# Sleep time tracking

### Project Description

This application, SleepTracker, is designed to help users monitor and track their sleep patterns over time. It provides a simple interface for users to input their sleep duration along with other relevant information such as name, gender, and date. The app then stores this data in a database for future reference.

## Product assumptions

- Users can
  - because there is no authentication, there is no validation on the user and we are only fetching on full name match(bare in mind when testing) o use just first names
  - enter multiple sleeping data without any limitation
  - only add a past sleeping records until the current day
  - we allow user to enter multiple records for the same day, because it seems a valid use case
- I did use client side rendering, and the only reason because I wanted to test the new next App route with redux, because it force redux to change the previous implementation. and it is a more interesting use case

## Project directory structure

    ├── helper/ # exercise helper docs
    |    ├── docs.pdf # task requirement
    |    └── postman_collection.json # postman api collection
    |
    ├── apps/
    │    ├── api/ # Server-side code
    │    |    ├── src/ # api application logic
    |    |    ├── test/ # test files and suites
    |    |    ├── Dockerfile # Dockerfile for building the application
    │    |    ├── package.json # dependencies list and scripts
    |    |    ├── tsconfig.json # typescript configurations
    |    |    ├── jest.config.ts # jest/test configurations
    |    |    ├── .env # environment variables needed to run the
    |    |    └── ... # Other backend-related files
    |    |
    |    └── web/ # front-end side code
    │         ├── public/ # Public assets
    │         ├── src/ # React components and application logic
    |         ├── tests/ # Test files and suites
    |         ├── Dockerfile # Dockerfile for building the application
    |         ├── tsconfig.json # typescript configurations
    |         ├── next.config.json # nextjs configurations
    │         ├── package.json # Frontend dependencies and scripts
    |         ├── .env. # prodution environment variables
    |         ├── .env.local.example # local environment variables file sample
    │         └── ... # Other frontend-related files
    |
    ├── docker # docker related files
    │   └── docker-compose.yml # compose to spin up our app containers
    │   └── client/ # Frontend code

    │
    ├── docker-compose.yml # Docker Compose file for running one or both application
    ├── Technical_Challenge.pdf # technical challenge doc
    └── README.md # Project documentation

## Languages Frameworks and Tools

<p>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
  </a> <a href="https://nextjs.org" target="_blank" rel="noreferrer">
    <img src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Next.js-900x0.png" alt="nextjs" width="60" height="40"/>
  </a>
  <a href="https://nestjs.com/" target="_blank" rel="noreferrer">
    <img src="https://nestjs.com/img/logo_text.svg" alt="nestjs" width="80" height="40"/>
  </a>
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  </a>
  <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/>
  </a>
  <a href="https://jestjs.io" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/>
  </a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/>
  </a>
   <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.AoFmhuVcQWFwCx4G2ZnuJQHaIq%26pid%3DApi&f=1&ipt=0ab77d652f849b6e4d8640ad64b9db5764a24a1a4515957f5b9344ceac24eae5&ipo=images" alt="tailwind" width="40" height="40"/>
  </a>
</p>

## Requirements

Follow the instructions provided in the official documentation for your OS

- Nodejs and npm -> https://nodejs.org/en/download/ (Node.js version >= v18.17.0 is required for Next.js version 14)
- docker -> https://www.docker.com/get-started/
- docker-compose -> https://docs.docker.com/compose/install/

## How to run the application

You have multiple ways to run the application: using Docker Compose (recommended), manually, or using Docker containers.

#### Run it using Docker Compose (Recommended)

To run the application using Docker Compose, you need Docker and Docker Compose installed. Follow these steps:

1. To build both server(api) and client(web), run the app using Docker Compose
   ```bash
   docker-compose up -d
   ```
   Note: to stop the applications just run:
   ```bash
   docker-compose down
   ```

#### Run it Manually

To run the application manually, you need Node and npm installed. Follow these steps:

1. Start the backend api:

   1. from the root folder (`project-folder`), navigate to api/ folder:
      ```bash
      cd apps/api
      ```
   2. install dependencies
      ```bash
      npm install
      ```
   3. run the server
      ```bash
      npm run start:dev
      ```

2. Start the frontend web:

   1. create the `.env.local` file based on the `.env.local.example`

   2. From the root folder (`project-folder`), navigate to the web/ folder:

      ```bash
      cd apps/web
      ```

   3. install dependencies
      ```bash
      npm install
      ```
   4. run the web
      ```bash
      npm run dev
      ```

**Note:**

On the **helper** folder you will find a postman collection which allows you to directly test the api endpoints

#### Run it using Docker

To run the application using Docker, you need Docker installed. Follow these steps:

1. Build the Docker image for the backend server:
   ```bash
   docker build -t sleep-time-tracker-api ./apps/api
   ```
2. Run server as Docker container:

   ```bash
   docker run --name sleep-time-tracker-api -d -p 5000:5000 sleep-time-tracker-api

   ```

3. Build the Docker image for the web:

   ```bash
   docker build -t sleep-time-tracker-web ./apps/web

   ```

4. Run web as Docker container:
   ```bash
   docker run --name sleep-time-tracker-web -d -p 3000:3000 sleep-time-tracker-web
   ```

### Access the web Application

Once the application is running, you can access the web by opening [http://localhost:3000](http://localhost:3000) in your browser

### Port Conflict

If you encounter port conflicts, it might be due to other applications using the same ports. Before running the application, ensure that ports `5000` and `3000` are available. If not, you can modify the port bindings in the Dockerfiles (UI and server) and also in the docker-compose.yml file.

## Run Unit tests (Jest)

## Improvements

### api

1. Pagination:
   - implemente pagination if supported by external API
2. Create more .env files. For example, for production, we could have a .env.prod
3. Tests:
   - Maybe increate the unit test coverage
   - Add integraction test to ensure the different components/adapters are well integrated and working
   - add E2E tests making sure the full flow is working as intended, using tools like Cypress

#### web

1. State Management:
   - Consider removing redux and use react context and we can take advantage of server side render. because the new version of next makes the use of redux more complex specially for simple use case like this
2. Mobile first
   - Ensure that we prioritize creating a user experience focused on mobile users before adapting it to other device types.
   - Make sure the components are responsive enough for all types of devices.
3. Performance Improvements:
   - Review all React components and apply appropriate memoization techniques such as useMemo, useCallback, and memo to improve performance by preventing unnecessary re-renders.
   - Reduce the number of API calls by implementing throatling, specially when clicking on the rows multiple times in a short period of time. making sure we don't load the server with multiple calls

#### Global

1. Naming in convension:
   - Review all function and variable names to ensure they are clear, meaningful, and descriptive enough, and they only perform what they are supposed to.
2. Typescript types:
   - Review the names of TypeScript types.
   - Extract common types to increase reusability across the codebase.
3. Code formating
   - Ensure consistent code formatting throughout the project.
4. Client and server commons:
   - There are some common functionalities and data types shared between the client and server. Create a common library for all shared code to reduce duplication and inconsistency.

## Author

### `Adilson Mendes`
