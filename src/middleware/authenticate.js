import debug from 'debug';
import passportJWT from '../services/passport/config';
import { ApplicationError } from '../helpers/errors';

const DEBUG = debug('dev');
export default {
  authenticate: (req, res, next) => {
    passportJWT.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        throw new ApplicationError(
          401,
          'invalid token, please log in or sign up',
        );
      }
      req.user = user;
      return next();
    })(req, res, next);
  },
};
