import React from 'react'
import { useParams } from 'react-router-dom';

function SingleProduct() {
    const { id } = useParams();
    console.log("new",id);
  return (
    <div>
        <h1>asdfsad</h1>
        <img src="" alt="product image" />
    </div>
  )
}

export default SingleProduct