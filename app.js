const express = require('express');
const userController = require('./controller/userController');
const transferController = require('./controller/transferController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(express.json());

// Swagger endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// User routes
app.post('/register', userController.register);
app.post('/login', userController.login);
app.get('/users', userController.getAll);

// Transfer route
app.post('/transfer', transferController.transfer);

module.exports = app;
