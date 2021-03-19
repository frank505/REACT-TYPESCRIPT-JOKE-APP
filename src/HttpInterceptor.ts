import fetchIntercept from 'fetch-intercept';
import {alertNotification} from './Utilities/HelperFunc'






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
      
      if (response.status == 404) 
      {
        alertNotification("404 Error","Data Not found","error");
        // console.log('ready to redirect j');
      }else if(response.status == 403)
      {
        alertNotification('403 Error','this data access is forbidden for you',"error");
      }else if(response.status==400)
      {
        alertNotification('400 Bad Request',"Request sent was not formatted properly","error");
      }else if(response.status == 413)
      {
        alertNotification("413 Error","Payload is too large","error");
      }else if(response.status== 414)
      {
        alertNotification("414 Error","URI is too long","error");
      }else if(response.status==429)
      {
        alertNotification("429 Error","You have exceeded Request limit per minute","error");
      }else if(response.status==500)
      {
        alertNotification("500 Error","Internal Server Error","error");
      }

      return response;
    },

    responseError: function (error) {
      console.log(error);
      // Handle an fetch error
      return Promise.reject(error);
    },
  });
