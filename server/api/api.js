const api = {
  todo: (req, res, next) => {
    try {
      res.setHeader('Content-Type', 'application/json');

      // simple api fetch example, no own DB here so external call is made.

      // https://api.github.com/users/github
     /* fetch('https://api.github.com/users/github')
      .then((response) => {
        return response.json();
      }).then((json) => {
        res.status(200).send(json);
      });
      */
      res.status(200).send({test: 'test'});
    } catch (err) {
      next(err);
    }
  },
  othertodo: () => {

  }
};

module.exports = api;

// THIS WAY OF DOING NOT POSSIBLE WITH HMR right now, I keep it for history
/*export default api;*/
