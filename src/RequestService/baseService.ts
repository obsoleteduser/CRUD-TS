import instance from "./axios/axiosInstance";
import IBase from "./IBase";

export default class BaseService<T> implements IBase<T>{

    private endpointURL: string =''

    constructor(endpointURL: string = ''){
        this.endpointURL = endpointURL
    }

   async getData(endpointURL: string):Promise<T>{
     const data = await instance.get(endpointURL)
     return data.data as T
   }
   async setData(endpointURL: string, payload: T):Promise<any>{
     await instance.post(endpointURL, payload)
   }
   async updateData(endpointURL: string, id: number, payload: T):Promise<any>{
     await instance.put(endpointURL, payload)

   }

   async removeData(endpointURL: string, id: any): Promise<any>{
    await instance.delete(endpointURL, id)
   }

}