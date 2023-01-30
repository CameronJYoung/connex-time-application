import authConfig from '../config/authConfig';
import MiddlewareFunction from '../types/MiddlewareFunction';

const authenticateRequest: MiddlewareFunction = (req, res, next) => {
  if (req.headers.authorization !== authConfig.token) {
    res.status(403).send('Missing or invalid auth token!');
  } else {
    next();
  }
};

export default authenticateRequest;
