import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-unidriving.herokuapp.com/'
})