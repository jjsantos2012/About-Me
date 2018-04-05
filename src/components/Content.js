import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './css/Navbar.css';
import About from './About.js';
import Blog from './Blog.js';
import Portfolio from './Portfolio.js';


class Content extends React.Component {

constructor(props){
	super(props);

	this.state =	{
		user:null,
		isOpen: false
										};



  this.toggle = this.toggle.bind(this);


}

toggle() { this.setState({isOpen: !this.state.isOpen}); }

  render() {
    return (

<Router>
	<div>
			<Navbar className="header"  light expand="md" >
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
							<NavItem className="NavItem">
								<NavLink><Link to="/">About</Link></NavLink>
							</NavItem>
							<NavItem className="NavItem">
                <NavLink><Link to="/Blog">Blog</Link></NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink><Link to="/Portfolio">Portfolio</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>


		<Route exact path="/" component={About}/>
		<Route exact path="/Portfolio" component={Portfolio}/>
		<Route exact path="/Blog" component={Blog}/>

<br></br>
<br></br>
</div>
</Router>


    );
  }
}

export default Content;
