import {EMAIL} from '../step_definitions/e2e.step';
import {API_URL, OAUTH_API_URL, OAUTH_TOKEN_URL} from './constant';

export const resetAppData = () => {
  // do resetting of an app
  cy.request('DELETE', `${API_URL}e2e/clear_data`);
};

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomEmail = () => {
  const randomNumber = getRandomNumber(10, 100000);
  return `user${randomNumber}@mail.com`;
};

export const getCurrentDate = () => {
  const date = new Date();
};

// get token using client credentials
export const getToken = () => {
  let option = getCypressOptions('POST', 'client_credentials');
  return cy.request(option).then((res) => {
    try {
      return res.body.access_token;
    } catch (err) {
      console.log(err);
      return null;
    }
  });
};

export const deleteAuth0TestingUser = () => {
  getToken().then((access_token) => {
    const headers = {Authorization: `Bearer ${access_token}`};
    const option = {
      method: 'GET',
      url: `${OAUTH_API_URL}users-by-email?email=${EMAIL}`,
      headers,
    };

    return cy.request(option).then((res) => {
      try {
        const userId = res.body.length && res.body[0].user_id;
        if (userId) {
          cy.request({
            method: 'DELETE',
            url: `${OAUTH_API_URL}users/${userId}`,
            headers,
          });
        }
      } catch (err) {
        console.log(err);
        return null;
      }
    });
  });
};

export const getCypressOptions = (
  method: string,
  grant_type: string,
  user: {username: string; password: string} = {username: '', password: ''}
) => ({
  method,
  url: OAUTH_TOKEN_URL,
  headers: {'content-type': 'application/json'},
  body: {
    client_id: Cypress.env('fast800_auth0_client_id'),
    client_secret: Cypress.env('fast800_auth0_client_secret'),
    audience: OAUTH_API_URL,
    grant_type,
    ...(grant_type === 'password' && {...user}),
  },
});
