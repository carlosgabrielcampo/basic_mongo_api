const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    swaggerDefinition: {
    openapi: '3.0.0',
    info: {
        title: 'Minha API',
        version: '1.0.0',
        description: 'API documentation for your project',
    },
    "basePath": "/",
    "schemes": ["http"],
    "definitions": {
      "Task": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "completed": {
            "type": "boolean"
          }
        },
        "required": ["title", "completed"]
      }
    },
    "paths": {
      "/tasks": {
        "post": {
          "summary": "Create a new task",
          "tags": ["Tasks"],
          "parameters": [
            {
              "name": "task",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Task"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Task created successfully"
            },
            "400": {
              "description": "Bad request"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        },
        "get": {
          "summary": "Get all tasks",
          "tags": ["Tasks"],
          "parameters": [],
          "responses": {
            "200": {
              "description": "List of tasks",
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/Task"
                }
              }
            },
            "500": {
              "description": "Internal server error"
            }
          }
        }
      },
      "/tasks/{id}": {
        "put": {
          "summary": "Update a task by ID",
          "tags": ["Tasks"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "integer",
              "format": "int32"
            },
            {
              "name": "task",
              "in": "body",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Task"
              }
            }
          ],
          "responses": {
            "204": {
              "description": "Task updated successfully"
            },
            "400": {
              "description": "Bad request"
            },
            "404": {
              "description": "Task not found"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        },
        "delete": {
          "summary": "Delete a task by ID",
          "tags": ["Tasks"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "type": "integer",
              "format": "int32"
            }
          ],
          "responses": {
            "204": {
              "description": "Task deleted successfully"
            },
            "404": {
              "description": "Task not found"
            },
            "500": {
              "description": "Internal server error"
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js'], // Path para as rotas da API
};
const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;