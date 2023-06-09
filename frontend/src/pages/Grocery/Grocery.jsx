import React from 'react'
import { useParams } from 'react-router-dom';
import UserHeader from '../../Components/NavBar';


const Grocery = () => {
  const { id } = useParams();
    console.log("new",id);
  return (
    <div>
      <UserHeader/>
      <h1>Grocery</h1>
    </div>
  )
}

export default Grocery
