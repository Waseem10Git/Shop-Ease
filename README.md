
# Shop-Ease

A full-stack shopping platform featuring user authentication, product browsing, a shopping cart system, and online payments.


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


## Installation

Install my-project with npm

1.clone my project

```bash
    https://github.com/Waseem10Git/Shop-Ease
```

2. go to frontend folder and install dependincies

```bash
    cd frontend
    npm install
    npm run dev
```

3. go to frontend folder and install dependincies

```bash
    cd ..
    cd backend
    npm install
    npm start
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


## Usage

- Register a new user
- Log in to your account
- Browse available products
- Add items to your cart
- Checkout and view your orders


## API Reference

#### Auth Routes

| Method | Endpoint     | Description                |
| :-------- | :------- | :------------------------- |
| POST | `/api/auth/register` | Register a new user|
| POST | `/api/auth/login` | Login and receive JWT|

#### Product Routes

| Method | Endpoint     | Description                     |
| :-------- | :------- | :-------------------------------- |
| POST | `/api/cart` | Add item to cart|
| GET | `/api/cart` | Get user cart|


## Project Structure

Shop-Ease/
│── client/          # React frontend
│── server/          # Node.js + Express backend
│── db/              # SQL scripts or migrations
│── .env.example     # Example env variables
│── package.json
│── README.md

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

