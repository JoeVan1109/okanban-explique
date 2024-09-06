function c(){
  throw new Error('Boom');
}
function b(){
  c();
}
function a(){
  try{
    b();
  }catch(error){
    console.log(error.message);
  }
}
a();