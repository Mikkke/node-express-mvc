const uuid = require("uuid/v4");

const Apprenant = require("../models/apprenant");

module.exports = {
  ajouterUnApprenant: async (prenom, nom) => {
    Apprenant.create({
      id: uuid(),
      firstName: prenom,
      lastName: nom
    });
  },

  recupererLesApprenants: async () => {
    return await Apprenant.findAll({ raw: true });
  },

  supprimerUnApprenant: async (id) => {
    const apprenantASupprimer = await Apprenant.findByPk(id);
    apprenantASupprimer.destroy();
  }
};
