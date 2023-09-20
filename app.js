// app.js
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig'); // Path to your Swagger configuration file
const taskController = require('./controllers/taskControllers')
require('./db');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/tasks', taskController.createTask);
app.get('/tasks', taskController.getAllTasks);
app.put('/tasks/:id', taskController.updateTask);
app.delete('/tasks/:id', taskController.deleteTask);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app