export function ToSimpleObject(object:any):any {
  if (object == undefined) return null;
  if (typeof object !== 'object'
      || object == null
      || (isArray(object) && object.length == 0))
  {
    return object;
  }



  if (isArray(object)){
    return object.map((item:any) => ToSimpleObject(item));
  } else {
    let NewObject:any = []
    Object.keys(object).forEach(key => {
      NewObject[key] = ToSimpleObject(object[key]);
    });
    return Object.assign( {}, NewObject);
  }






}


function isArray(object:any):boolean {
  return (Array.isArray(object));
}
