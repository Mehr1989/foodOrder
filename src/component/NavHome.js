import React from 'react'
import { Container,Button,Navbar,Nav,NavDropdown,Row,Col } from 'react-bootstrap';
import styles from '@/styles/Home.module.scss'

function NavHome() {
  return (
    <>
        <section  >

<Navbar bg="light" expand="lg">
<Container>


<h3>Yummy</h3>
 <img
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScn4253JfeuI1N4HvlIYcXldDi7af2C1A8uA&usqp=CAU"
       width="90"
       height="90"
     
       alt="React Bootstrap logo"
     />






<Navbar.Toggle aria-controls="basic-navbar-nav"/>
  
 <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:'20%'}}>
   <Nav className="me-auto">
     <Nav.Link href="/">Home</Nav.Link>
     
     <Nav.Link href="/comments">Comments</Nav.Link>
     <Nav.Link href="/signup">Sign Up</Nav.Link>
     <Nav.Link href="#link">Events</Nav.Link>
     <Nav.Link href="#link">Chefs</Nav.Link>
     <Nav.Link href="#link">Gallery</Nav.Link>
     <Nav.Link href="#link">Contact</Nav.Link>
     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.2">
         Another action
       </NavDropdown.Item>
       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action/3.4">
         Separated link
       </NavDropdown.Item>
     </NavDropdown>
   </Nav>
 </Navbar.Collapse>



   <Button rounded className={styles.bookBtn} variant='danger'>Book A Table</Button>





</Container>

</Navbar>

</section>


      
    </>
  )
}

export default NavHome
