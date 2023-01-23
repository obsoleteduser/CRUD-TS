export default interface IBase<T>{
    getData: (endpointURL: string, payload:T)=> Promise<T[]>,
    setData: (endpointURL: string, payload:T)=> Promise<any>,
    updateData: (endpointURL: string, id:number, payload: T)=> Promise<any>
    removeData: (endpointURL: string, id:any)=> Promise<any>
}