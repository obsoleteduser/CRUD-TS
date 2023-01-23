export default interface ISuppliers{
    id: number,
    companyName: string,
    contactName: string,
    contactTitle: string,
    address: IAddress
    
}

interface IAddress{
    street: string,
    city: string,
    region: string,
    postalCode: string,
    country: string,
    phone: string
}