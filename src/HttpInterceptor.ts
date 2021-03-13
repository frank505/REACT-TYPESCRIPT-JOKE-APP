import fetchIntercept from 'fetch-intercept';






export const HttpInterceptor = () =>
  fetchIntercept.register({
    request: function (url, config) {
      // Modify the url or config here
      // config.headers.Authorization = "Bearer "+localStorage.getItem("crud_app");
      return [url, config];
    },

    requestError: function (error) {
      console.log(error);
      return Promise.reject(error);
    },

    response: function (response) {
      // Modify the reponse object
      // console.log(response.data);
      if (response.status == 401) {
        // console.log('ready to redirect j');

    
      }
      return response;
    },

    responseError: function (error) {
      console.log(error);
      // Handle an fetch error
      return Promise.reject(error);
    },
  });
