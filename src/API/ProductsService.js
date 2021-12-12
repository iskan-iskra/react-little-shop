import fakeDB from './fakeDb.json'

class ProductsService {
    getAll(limit=10, page=1){
        let sliceStart = limit*(page-1)
        let sliceEnd = limit*(page)
        if(sliceEnd>fakeDB.length){
            sliceEnd = fakeDB.length
        }
        return fakeDB.slice(sliceStart, sliceEnd)
    }
    getOneById(searchId){
        return fakeDB.find(product=>product.id === searchId)
    }
}

export default new ProductsService()