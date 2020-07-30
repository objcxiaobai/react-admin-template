import HTTP from '../utils/http';

export function reqLogin() {
  return HTTP({
    url: '/usr.json',
    method: 'GET',
  });
}
