//q45 information of a car in a object

function cars(manufacturers, model, ...make){
 let cars2 ={ manufacturers, model, ...make}

return cars2
}
let toyotacarolla = cars("toyota", "carolla", color = "black", year = "2017");
let hondacivic = cars("Honda", "civic", color = "red", year = "2019")
let toyotaAqua = cars("Toyota", "Aqua", color = "pink", year = "2021")

console.log(toyotacarolla);
console.log(hondacivic);
console.log(toyotaAqua);
