import { useEffect, useState } from 'react'
import './App.css'
import BaseService from './RequestService/baseService'
import ICategories from './RequestService/Models/categories'
import IProducts from './RequestService/Models/products'

function App() {

  const [data, setData] = useState<IProducts[]>([])

  useEffect(()=>{
  
    const fetchData =  async ()=>{

      const categories = await new BaseService<IProducts>().getData('products')
      .then(data => setData(data))
      .then(()=>{console.log(data)})

    }

    fetchData()

  }, [])

  return (

    

    <div className="App">
     
     {
     Boolean(data) && data.map(item=>(
        <div className="item">
          {item.categoryId} 
        </div>
     ))
     }


    </div>
  )
}

export default App
