import React,{ useEffect, useState } from "react";
import axois from 'axios';

const DataFetcher = () => {
    
    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true);
    

   const fetchdata = async ()=>{
    try{
      const response =await axois.get('https://jsonplaceholder.typicode.com/posts')
      setData(response.data)
      setLoading(false)
      
    }
    catch(error){
      console.log(error);
    }
  };

    useEffect(()=>{
      fetchdata();
    },[])
  return (
          <div>
        {loading ? (
            <h1>Loading.... </h1>
        ):(
            <ul>
                {
                    data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
            </ul>
        )}
    </div>
  )
}
  


export default DataFetcher