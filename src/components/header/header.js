import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from "../../image/icon.png";
import './header.css';
import { NavLink } from 'react-router-dom';


const Header =()=> {
    return(
        
        <Navbar style={{marginBottom: 10+"px"}}>
        <Container style={{backgroundColor: '#17213C'}}>
        <Nav.Link href="/"><img src={icon} alt="Logo"/></Nav.Link>
        <Navbar.Brand href="/" style={{color: 'white'}}>H.Appy Weather</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/" style={{color: 'white'}}>Home</Nav.Link>
            <Nav.Link href="/info" style={{color: 'white'}}>About Us</Nav.Link>
            <NavDropdown title={<span style={{color: 'white'}} >API</span>} id="basic-nav-dropdown" >
              <NavDropdown.Item href="https://openweathermap.org/">OpenWeather API</NavDropdown.Item>
              <NavDropdown.Item href="https://rapidapi.com/wirefreethought/api/geodb-cities/">GeoDB Cities API</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Header;