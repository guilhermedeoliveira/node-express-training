const passport = require('passport');

const auth = require('./controllers/auth');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ auth: true, hi: 'There' });
  });
  app.post('/signup', auth.signUp);
}
