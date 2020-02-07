const express = require("express");
const bodyparser = require("body-parser");

const apprenantsController = require("../controllers/apprenants");

const router = express.Router();

router.use(bodyparser.urlencoded({extended: false}));

router.get('/', async (request, response) => {
  const apprenants = await apprenantsController.recupererLesApprenants();
  response.render('homepage.ejs', { apprenants })
});

router.post('/ajouter', (request, response) => {
  const { prenom, nom } = request.body;
  apprenantsController.ajouterUnApprenant(prenom, nom);
  response.redirect('/');
});

router.get('/supprimer/:id', (request, response) => {
  const id = request.params.id;
  apprenantsController.supprimerUnApprenant(id);
  response.redirect('/');
});

module.exports = router;
