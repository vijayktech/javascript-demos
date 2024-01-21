// ES 5 Parameters refering

function getLaptop(model, make, year){

    // Es 5 map the parameters
    return {
        model : model,
        make : make,
        year : year
    }
}
let obj1 = getLaptop('New mdel', 'Dell', '2024')
console.log(obj1)

// ES 6 - no need map parameters to function variables.
function getEmployee(id, name, sal){
    return {id, name, sal}
}

let obj2 = getEmployee(105, 'Vijay', 1000);
console.log(obj2);