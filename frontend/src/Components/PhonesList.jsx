import React from 'react'
// import './ProductPage.css'

//importing product images

import Image1 from '/images/Grocery.jpg'
import Image2 from '/images/mobiles.jpg'
import Image3 from '/images/fashion.jpg'
import Image4 from '/images/electronics.jpg'
import Image5 from '/images/home.jpg'
import Image6 from '/images/appliances.jpg'


// /public/images/mobiles.jpg

const ProductBar = () => {
  const images = [
    { id: 1, asd: Image1, alt: 'Image 1', name: "Grocery"},
    { id: 2, asd: Image2, alt: 'Image 2', name:"Mobiles" },
    { id: 3, asd: Image3, alt: 'Image 3', name:"Fashion"},
    { id: 3, asd: Image4, alt: 'Image 3', name:"Electronics" },
    { id: 3, asd: Image5, alt: 'Image 3', name:"Home Decor" },
    { id: 3, asd: Image6, alt: 'Image 3', name:"Home Applainces" },
  ]
  return (
    <div style={{ display: 'flex', flexWrap: "wrap" }}>
      {images.map((image) => (
        <div className='p-4'>
          {/* <h2>Image List</h2> */}



          <div className="card " style={{ width: "10rem", height: "10rem"}}>
            <div>
            <img className="card-img-top" src={image.asd} alt="Card image cap" style={{ maxWidth: "100%", maxHeight: "100%" }}/>
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
