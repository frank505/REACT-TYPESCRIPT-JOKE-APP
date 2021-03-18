export const baseUrl:string = "https://v2.jokeapi.dev/";

const storageType:any = localStorage;

export const getData =  async <T>(addedUrl:string, tokenId :string=''):Promise<T> => 
{
    const token:any = await storageType.getItem(tokenId);
    let requestOptions:any = getRequestOptions(token);
    return fetch(
      baseUrl + '' + addedUrl,
      requestOptions,
    ).then((response) => response.json());
} 

export const getRequestOptions = async <T>(token:string|null):Promise<T> =>
{
    let requestOptions:any = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-type': 'application/json',
      },
    };

    return requestOptions;
  };