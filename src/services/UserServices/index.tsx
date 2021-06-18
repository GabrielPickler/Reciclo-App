import api from '../../../Axios.config';
import { UserLogin } from '../../components/UserLogin';
import { RegisterForm } from '../../components/RegisterForm';

export function userLogin(body: UserLogin) {
  return api.post('/useraccount/session', body);
}

export function userRegister(body: RegisterForm) {
  return api.post('/useraccount', body);
}
