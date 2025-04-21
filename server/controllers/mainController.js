/**
 * GET /
 * Homepage 
*/
exports.homepage = async (req, res) => {
    const locals = {
        title: 'CloudNote',
        description: 'Welcome to CloudNote, your personal note-taking app!',
    }
    res.render('index', {
      locals,
      layout: '../views/layouts/front-page'
    });
  }
  
  
  /**
   * GET /
   * About 
  */
  exports.about = async (req, res) => {
    const locals = {
      title: "About - CloudNote",
      description: "your personal note-taking app!",
    }
    res.render('about', locals);
  }