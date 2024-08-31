export function engine(val) {
  if(val!=undefined && val.length>0){
    return { msg: val[0].json, status: val[0].status};
  }else{
    return { msg: "We cant't mock what you are looking for", status: 404 };
  }
}
