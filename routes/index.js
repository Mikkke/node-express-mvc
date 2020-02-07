const express = require("express");

const apprenantsRouter = require("./apprenants");

const router = express.Router();

router.get('/', (request, response) => {
  response.redirect('/apprenants');
});

router.use('/apprenants', apprenantsRouter);

router.use('*', (request, response) => {
  response
    .status(404)
    .render('error404.ejs');
});

module.exports = router;
