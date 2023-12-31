const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');


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

// CREATE a new person
router.post('/', personController.createPerson);

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

// READ a person by ID
router.get('/:id', personController.getPersonById);



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


// UPDATE a person by ID
router.put('/:id', personController.updatePersonById);



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
// DELETE a person by ID
router.delete('/:id', personController.deletePersonById);

module.exports = router;
