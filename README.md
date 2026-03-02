
# Shop-Ease

A full-stack shopping platform featuring user authentication, product browsing and a shopping cart system.


## Features

- User registration and secure login
- View detailed product information
- Add products to cart
- Remove products from cart
- Add new products
- Responsive design (mobile & desktop)


## Tech Stack

**Client:** React, Bootstarp, CSS

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
    npm start
```

3. go to backend folder and install dependincies

```bash
    cd backend
    npm install
    npm start
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`TOKEN_SECTRET_KEY`

## API Reference

| Method | Endpoint     | Description                |
| :-------- | :------- | :------------------------- |
| POST | `/api/users` | Register a new user|
| POST | `/api/auth` | Login and receive JWT|
| POST | `/api/products` | Create new product|
| GET | `/api/products` | Get all items|
| GET | `/api/products/:id` | Get item by id|
| GET | `/api/cart` | Get all items in cart|
| PUT | `/api/cart/add` | Add item to cart|
| DELETE | `/api/cart/:id` | Remove item from cart|
