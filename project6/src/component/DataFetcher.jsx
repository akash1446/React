import React, { useEffect, useState } from 'react'
const DataFetcher = () => {
    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        });
    }, []);
  return (
    <div>
        {loading ? (
            <h1>Loading.... <img src="https://i.pinimg.com/736x/38/b6/b2/38b6b2f0849da4d72b503a9049e94c33.jpg" alt="Lodaing data" /></h1>
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