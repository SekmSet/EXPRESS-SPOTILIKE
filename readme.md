# 🎧 API SPOTILIKE

Master 1 - IL

- Sharon
- Priscilla

___
Create a custom API like Spotify
___

NodeJS x Express x Angular

## 💚 Spotify API

[Spotify for developer](https://developer.spotify.com/)

- Create an account or login to your account
- Access to your Dashboard and create a project
- Go to your setting project and get your client secret and client id  a project, you will need into your `.env`

![Spotify API access to dashboard](github/image/dashboard_access.png)
![Spotify API create project](github/image/create_project.png)
![Spotify API create project](github/image/create_app.png)
![Spotify API access to the setting project](github/image/access_settings.png)
![Spotify API get your client ID and SERVER ](github/image/access_info.png)

## 🧰 Configuration

### Server

Copy / Paste `.env.example` and rename it into `.env`

Set your variables 

### Database 

Create your database and run the script to generate your database in SQL console
`server/data/db/dump.sql`

## 🚀 Launch Spotilike Server

_In a new terminal_

```bash
cd server
``` 

```bash
npm i # Install packages
``` 

```bash
npm run start # Running on port 3000
```

## 🚀 Launch Spotilike Client

_In a new terminal_

```bash
cd frontend/spotilike-app
``` 

```bash
npm i # Install packages
``` 

```bash
ng serve # Running on port 4200
```

## 💾 SQL diagram

![DB diagram](github/image/db_diagram.png)

## Available API routes

### GET

- Search _(album, artist, track)_
- Album
  - /:id
  - /:id/tracks
- Artist
  - /:id
  - /:id/tracks
- Genre
- Tracks
  - /:id

### POST

- Create account
- Login
- Spotify
  - Generate token

### PUT

- Update account

### DELETE

- Delete Account
