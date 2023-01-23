import axios from "axios";

const instance = axios.create({
    baseURL: 'https://northwind.vercel.app/api/',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
  });


  export default instance