import React,{ useState, useEffect } from 'react';

const ImageFetcher = () => {
  const[images,setImages]=useState([]);
  const[loading,setLoading]=useState(true);
  const[page,setPage]=useState(1);
  const limit =5;


     useEffect(()=>{
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then(response => response.json())
        .then(images=> {
            setImages(images);
            setLoading(false);
        });
    }, [page]);
    const nextImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const prevImages = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };
  return (

  <div className="app">
      <h1>Image Gallery</h1>
      {loading?(<p className='loading'>Loading....</p>):(
        <div className='gallery'>
         {images.map((img)=>(
          <div className='card' key={img.id}>
            <img src={img.download_url} alt="images"/>
            <p>{img.author}</p>
          </div>
        ))} 
        </div>
      )}
       <div className='buttons'>
        <button onClick={prevImages} disabled={page===1}>
          Previous
        </button> 
        <button onClick={nextImages}>Next</button>
       </div>

    

    </div>
  )
}

export default ImageFetcher