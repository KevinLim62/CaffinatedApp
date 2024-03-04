import axios from 'axios';

const baseUrl = process.env.NEXT_API_URL;

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export default axios.create({
  baseURL: baseUrl,
  headers: headers,
});
