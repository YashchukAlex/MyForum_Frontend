import { generatePath } from 'react-router-dom';
import { TOKEN_NAME } from '../constants/auth';

// Used to handle any API errors that occur while making a request
export default handleApiErrors = (response) => {
  // If they have an invalid token, this will fire
  if (response.status === 403) {
    localStorage.removeItem(TOKEN_NAME);
    generatePath(`/`);
  }
  return response;
};