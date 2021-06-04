import axios from 'axios'

export class HttpClient {
  constructor() { }
  instance = axios.create({
    baseURL: 'https://opentdb.com/',
    responseEncoding: 'url'
  });
  request(config) {
    return this.instance.request({
      ...config
    })
  }
}