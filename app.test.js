const request = require('supertest');
const app = require('./app'); // Import your Express app

describe('Todo API', () => {
    it('should create a new todo', async () => {
      const response = await request(app)
          .post('/tasks')
          .send({ title: 'Test Todo' });

      expect(response.statusCode).toBe(201);
      console.log(response.body)
      expect(response.body.title).toBe('Test Todo');
    });

    it('should fetch all todos', async () => {
    });
});
