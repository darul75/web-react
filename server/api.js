import fetch from 'node-fetch';

function query(server) {
  server.get('/api/*', (req, res, next) => {
    try {
      res.setHeader('Content-Type', 'application/json');

      // simple api fetch example, no own DB here so external call is made.

      // https://api.github.com/users/github
      fetch('https://api.github.com/users/github')
      .then((response) => {
        return response.json();
      }).then((json) => {
        res.status(200).send(json);
      });
    } catch (err) {
      next(err);
    }
  });
}

export default query;
