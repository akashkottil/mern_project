import React, { useState } from 'react'
import './ProductPage.css'
import {useNavigate} from "react-router-dom"

//importing product images

import Image1 from '/images/Grocery.jpg'
import Image2 from '/images/mobiles.jpg'
import Image3 from '/images/fashion.jpg'
import Image4 from '/images/electronics.jpg'
import Image5 from '/images/home.jpg'
import Image6 from '/images/appliances.jpg'


// /public/images/mobiles.jpg

const ProductBar = () => {
  let nav = useNavigate()
  // let [id,setId]=useState('')
  const images = [
    { id: 1, asd: Image1, alt: 'Image 1', name: "Grocery" },
    { id: 2, asd: Image2, alt: 'Image 2', name: "Mobiles" },
    { id: 3, asd: Image3, alt: 'Image 3', name: "Fashion" },
    { id: 4, asd: Image4, alt: 'Image 3', name: "Electronics" },
    { id: 5, asd: Image5, alt: 'Image 3', name: "Home Decor" },
    { id: 6, asd: Image6, alt: 'Image 3', name: "Home Applainces" },
  ]
  function pic(id){
    if(id==1){
      nav(`/Grocery`)
    }
    else if(id==2){
      nav(`/Mobiles`)
    }
    else if(id==3){
      nav(`/Fashion`)
    }
    else if(id==4){
      nav(`/electronics`)
    }
    else if(id==5){
      nav(`/HomeDecor`)
    }
    else if(id==6){
      nav(`/HomeApplainces`)
    }
    console.log("image id - ",id);
    // nav(`/Products/${id}`)

  }

  return (
    <div style={{ display: 'flex', flexWrap: "wrap" }}>
      {images.map((image) => (
        <div className='p-2'>
          {/* <h2>Image List</h2> */}



          <div className="card " onClick={()=>pic(image.id)} style={{ width: "12rem", height: "10rem" }}>
            <div>
              <img className="card-img-top" src={image.asd} alt="Card image cap" style={{ objectFit:'cover', height: "10rem", width: "12rem" }} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{image.name}</h5>
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p> */}
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>

        </div>
      ))}
      
    </div>

  )
}

export default ProductBar
