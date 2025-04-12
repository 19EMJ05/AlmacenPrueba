export const roladmin =()=>{
  if(localStorage.getItem("rolUser")=="1"){
    return true;
  }else{
    return false;
  }
}
export const rolalmacen =()=>{
  if(localStorage.getItem("rolUser")=="2"){
    return true;
  }else{
    return false;
  }
}

