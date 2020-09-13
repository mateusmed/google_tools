
const tableName = "products"

async function getAllProducts() {
    return getAll(tableName);
}

async function getProductById(id) {
    return getById(tableName, id)
}

function saveOrUpdateProduct(item){

    if(item[0] === undefined || item[0] === ""){
        return createItem(tableName, item);
    }

    return updateItem(tableName, item);
}

