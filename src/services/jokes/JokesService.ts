import { getData } from "../HttpService";

export const getCategoriesService =  ():any =>
{
 const addedUrl:string = "categories";
 return getData(addedUrl).then((data:any)=>{
    return data;
  }).catch((error)=>
  {
      console.log(error);
      return error;
  });
}

export const getFlagsService = ():any =>
{
  const addedUrl:string = "flags";
  return getData(addedUrl).then((data:any)=>
  {
    return data;
  }).catch((error) =>{
     console.log(error);
     return error;
  });
}







