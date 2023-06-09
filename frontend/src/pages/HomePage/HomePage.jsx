import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  let navigate = useNavigate()
  return (
    <div>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><h3>ShopKart</h3></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                 Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item  onClick={() => navigate('/grocery')}>Grocery</Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate('/mobiles')}>Mobiles</Dropdown.Item>
                  <Dropdown.Item  onClick={() => navigate('/fashion')}>Fashion</Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate('/electronics')}>Electronics</Dropdown.Item>
                  <Dropdown.Item  onClick={() => navigate('/homeDecor')}>HomeDecor</Dropdown.Item>
                  <Dropdown.Item  onClick={() => navigate('/homeapplainces')}>HomeApplainces</Dropdown.Item>
                  
                  
                </Dropdown.Menu>
              </Dropdown>
            

            
            <Nav.Link onClick={() => navigate('/oldisgold')}>OldIsGold</Nav.Link>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
              
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                 Login
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item  onClick={() => navigate('/login')}>User</Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate('/adminlogin')}>Admin</Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              {/* <Nav.Link onClick={() => navigate('/wishlist')}>Wishlist</Nav.Link> */}


              
            </form>


          </Nav>
          
        </Container>
      </Navbar>

    </div>
  )
}

export default Header;