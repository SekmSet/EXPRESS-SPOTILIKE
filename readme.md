# API SPOTILIKE

Master 1 - IL

- Sharon

## Spotify API

[Spotify for developper](https://developer.spotify.com/)

- Follow documentation [Request an access token](https://developer.spotify.com/documentation/web-api/tutorials/getting-started#request-an-access-token)
- Create an account or login to your account
- Create a project

![Spotify API acces to dashboard](github/image/dashboard_access.png)
![Spotify API create project](github/image/create_project.png)

## Configuration

### Server
Copy / Paste `.env.example` and rename it into `.env`

Set your variables 

Create your database and use the dump script to generate your database in SQL, `server/data/db/dump.sql`

### Client

> **Back-end running on port 3000**

> Front-end running on port 


## Spotilike Server

```bash
cd server
``` 

### Launch server

```bash
npm i # Install packages
``` 

```bash
npm run start # Running on port 3000
```

## Spotilike Client

```bash
cd frontend/spotilike-app
``` 

### Launch application

```bash
npm i # Install packages
``` 

```bash
npm run start # Running on port 3000
```

## SQL diagram

## API routes

- Search _(album, artist)_
- Create account
- Spotify 
  - Generate token
- Login
- Delete Account
- Update account
- album
  - /:id
  - /:id/tracks
- artist
  - /:id
  - /:id/tracks