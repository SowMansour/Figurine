const dataMapper = require('../data/dataMapper');

const mainController = {

  // méthode pour la page d'accueil
  async homePage(req, res){

  try {
    const figurines =  await dataMapper.getAllFigurines();

     res.render('home', {figurines});
  } catch (error) {
    console.trace(error);
    res.status(500).send(error.message);
  }   
 
  },

  // méthode pour la page article
  async articlePage(req, res) {
    const paramId = Number(req.params.id);
    try {
      const oneFigurine = await dataMapper.getOneFigurine(paramId);
      //console.log(article);
      res.render('article', { oneFigurine });
    } catch (error) {
      console.trace(error);
      res.status(500).send(error.message);
    }

  }
};


module.exports = mainController;
