import http from '../../../libs/axios';
import { path } from '../../../../http.config';

export const Login = (params) => {
  return http.post({
    url: path.SIGN_IN,
    params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
