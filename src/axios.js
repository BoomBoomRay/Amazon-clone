import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-cc39f.cloudfunctions.net/api',
  // LOCAL HOST:  http://localhost:5001/clone-cc39f/us-central1/api
});
export default instance;
