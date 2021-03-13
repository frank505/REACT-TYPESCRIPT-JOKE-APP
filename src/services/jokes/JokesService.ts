import { getData } from "../HttpService";

export const getCategoriesService =  ():any =>
{
 const addedUrl:string = "categories";
 return getData(addedUrl).then((data)=>{
    return data;
  }).catch((error)=>
  {
      console.log(error);
      return error;
  });

}







