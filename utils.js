export function findById(id, items){

    for (let item of items){
        if (item.id === id){
            return item;
        }
    }

}

// export function calcOrderTotal(cart, products){
//     let total = 0;
//     for (it)
// }