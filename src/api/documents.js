import HTTP from '../utils/http';

export function getList() {
  return HTTP({
    url: '/v2/top-headlines',
    params: {
      country: 'us',
    },
  });
}
