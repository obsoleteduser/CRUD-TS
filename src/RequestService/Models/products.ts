export default interface IProducts{


    id: number,
    supplierId: number,
    categoryId: number,
    quantityPerUnit: string,
    unitPrice: number
    unitsInStock: number
    unitsOnOrder: number
    reorderLevel: number
    discontinued: boolean
    name: string


}