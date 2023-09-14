const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0', // Update to OpenAPI version 3
    info: {
      title: 'Hngx-Stage2 CRUD API',
      description: 'Documentation for My Hngx-Stage2 CRUD API',
      version: '1.0.0',
    },
    basePath: '/',
  },
  apis: ['./routes/api.js'], // Specify the paths to your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;


/**
 * @swagger
 * /api:
 *   post:
 *     summary: Create a person.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Person created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorStatus:
 *                   type: boolean
 *                   example: false
 *                 code:
 *                   type: string
 *                   example: --person/success
 *                 message:
 *                   type: string
 *                   example: Person created successfully
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorStatus:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: string
 *                   example: --person/user-notfound
 *                 message:
 *                   type: string
 *                   example: User doesn't exist
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 */


/**
 * @swagger
 * /api/{userId}:
 *   get:
 *     summary: Get a person's info by ID.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: The ID of the person to fetch
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorStatus:
 *                   type: boolean
 *                   example: false
 *                 code:
 *                   type: string
 *                   example: --person/success
 *                 message:
 *                   type: string
 *                   example: Success
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorStatus:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: string
 *                   example: --person/user-notfound
 *                 message:
 *                   type: string
 *                   example: User doesn't exist
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 */



/**
 * @swagger
 * /api/{userId}:
 *   put:
 *     summary: Update a person by ID.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: The ID of the person to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Person updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorStatus:
 *                   type: boolean
 *                   example: false
 *                 code:
 *                   type: string
 *                   example: --person/success
 *                 message:
 *                   type: string
 *                   example: Person updated successfully
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorStatus:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: string
 *                   example: --person/user-notfound
 *                 message:
 *                   type: string
 *                   example: User doesn't exist
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 */


/**
 * @swagger
 * /api/{userId}:
 *   delete:
 *     summary: Delete a person by ID.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: The ID of the person to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Person deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorStatus:
 *                   type: boolean
 *                   example: false
 *                 code:
 *                   type: string
 *                   example: --person/success
 *                 message:
 *                   type: string
 *                   example: Person deleted successfully
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errorStatus:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: string
 *                   example: --person/user-notfound
 *                 message:
 *                   type: string
 *                   example: User doesn't exist
 *                 statusCode:
 *                   type: integer
 *                   example: 404
 */
