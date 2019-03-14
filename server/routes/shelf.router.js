const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    queryText = (`SELECT "description", "image_url", "user"."username" FROM "item" JOIN "user" ON "item"."user_id" = "user"."id";`)
    pool.query(queryText).then((result)=>{
        res.send(result.rows)
    }).catch ((error)=>{
        console.log('There was an error with your GET. Definitely syntax');
        res.sendStatus(500);
    })
    // res.sendStatus(200); // For testing only, can be removed
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    
        const newItem = req.body;
        const queryText = `INSERT INTO "item" ("description", "image_url", "user_id")
                    VALUES ($1, $2, $3)`;
        const queryValues = [
            newItem.description,
            newItem.image_url,
            newItem.user_id,
          ];
        pool.query(queryText, queryValues)
            .then(() => { res.sendStatus(201); })
            .catch((error) => {
                console.log('Error completing POST query', error);
                res.sendStatus(500);
            });
    });





/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;