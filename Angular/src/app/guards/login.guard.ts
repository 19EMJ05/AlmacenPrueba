export const login =()=>{
  if(sessionStorage.getItem("sesion")){
    return true;
  }else{
    return false;
  }
}

