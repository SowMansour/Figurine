const dataMapper = require('../data/dataMapper');

const bookmarksController = {

  bookmarksPage:(req, res) =>{
    res.render('favoris')
  },

  // méthode pour afficher les favoris
  addBookmark: async (req, res) => {
    const paramId = req.params.id;
    const figurine = await dataMapper.getOneFigurine(paramId);
    //req.session.bookMark = [];
    // console.log(req.session); Je vérifie si j'ai une session
    // console.log(req.session.bookmark); Je vérifie si j'ai un favori dans cette session

    if(req.session.bookmark === undefined){
      req.session.bookmark = [];
    }
    if(!req.session.bookmark.includes(figurine)){
    
      req.session.bookmark.push(figurine)
    }

    res.redirect('/bookmarks');
  },

};


module.exports = bookmarksController;
