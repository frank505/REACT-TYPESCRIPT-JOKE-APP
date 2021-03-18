import swal from 'sweetalert';




export const alertNotification = (title:string,text:string,icon:string) =>
{
  return swal({
    title:title,
    text:text,
    icon:icon
  }) 
}

