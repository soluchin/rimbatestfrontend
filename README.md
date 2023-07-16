# rimbatestfrontend
frontend for rimba technical test

## Vue
port: 8080
>src/frontend/ run `vue serve`

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Java
port: 8081
>connect to mysql, change the application.properties

### Api:  
  **Product**
  - GET: `/api/products`
  - POST: `api/products/upsert  `
  
  **Transacation**
  - GET: `/api/transaction`
  - GET: `/api/transaction/{id}`
  - POST: `/api/createtransaction`
