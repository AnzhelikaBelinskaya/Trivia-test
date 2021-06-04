export class ApiResources {
  constructor(
    httpClient
  ) {
    this.getToken = new GetToken(httpClient)
    this.getQuestions = new GetQuestions(httpClient)
    this.postAnswer = new PostAnswer(httpClient)
  }
}

export class GetToken {
  httpClient;
  endpoint = "/api_token.php";
  method = "get";
  constructor(httpClient) {
    this.httpClient = httpClient
  }

  perform() {
    return this.httpClient.request({
      method: this.method,
      url: this.endpoint,
      params: { command: 'request' }
    })
  }
}

export class GetQuestions {
  httpClient;
  endpoint = "/api.php";
  method = "get";
  constructor(httpClient) {
    this.httpClient = httpClient
  }

  perform(params) {
    return this.httpClient.request({
      method: this.method,
      url: this.endpoint,
      params,
    })
  }
}
export class PostAnswer {
  httpClient;
  endpoint = "/api.php";
  method = "post";
  constructor(httpClient) {
    this.httpClient = httpClient
  }

  perform(params) {
    return this.httpClient.request({
      method: this.method,
      url: this.endpoint,
      params,
    })
  }
}
