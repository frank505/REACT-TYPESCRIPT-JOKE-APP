import { getData } from "../HttpService";

export const getCategoriesService =  ():any =>
{
 const addedUrl:string = "categories";
 return getData(addedUrl).then((data:any)=>{
    return data;
  }).catch((error:any)=>
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
  }).catch((error:any) =>{
     console.log(error);
     return error;
  });
}


export const getLanguagesServices = ():any =>
{
  const addedUrl:string = "languages";
  return getData(addedUrl).then((data:any)=>
  {
   return data;
  }).catch((error:any)=>{
    return error;
  });

}






