import React from "react";

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrentUser } from '../../redux/user/user.actions';

import { Link } from "react-router-dom";
// reactstrap components
import {
	UncontrolledCollapse,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	NavbarBrand,
	Navbar,
	Nav,
	Container,
	Row,
	Col,
	UncontrolledTooltip,
} from "reactstrap";

class ColorNavbar extends React.Component {
	state = {
		navbarColor: "navbar-transparent",
	};
	componentDidMount() {
		window.addEventListener("scroll", this.changeNavbarColor);
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", this.changeNavbarColor);
	}
	changeNavbarColor = () => {
		if (
			document.documentElement.scrollTop > 299 ||
			document.body.scrollTop > 299
		) {
			this.setState({
				navbarColor: "bg-info",
			});
		} else if (
			document.documentElement.scrollTop < 300 ||
			document.body.scrollTop < 300
		) {
			this.setState({
				navbarColor: "navbar-transparent",
			});
		}
    };
    
    logProps = e => {
        e.preventDefault();
        console.log( this.props );
    }

	render() {
		return (
			<>
				<Navbar className={"fixed-top " + this.state.navbarColor} expand='lg'>
					<Container>
						<div className='navbar-translate'>
							<NavbarBrand to='/index' tag={Link} id='tooltip6619950104'>
								<span>Scallops•</span> E-commerce React 
                                    < br/>
                                { this.props.currentUser.firstName 
                                    ? `Welcome, ${this.props.currentUser.firstName}!` 
                                    : "" }
							</NavbarBrand>
							<UncontrolledTooltip delay={0} target='tooltip6619950104'>
								Designed and Coded by Scallops•
							</UncontrolledTooltip>
							<button className='navbar-toggler' id='navigation'>
								<span className='navbar-toggler-bar bar1' />
								<span className='navbar-toggler-bar bar2' />
								<span className='navbar-toggler-bar bar3' />
							</button>
						</div>
						<UncontrolledCollapse navbar toggler='#navigation'>
							<div className='navbar-collapse-header'>
								<Row>
									<Col className='collapse-brand' xs='6'>
										<a href={`/google-login`} onClick={this.logProps}>
											Scallops• <span>Ecommerce</span>
										</a>
									</Col>
                                    
									<Col className='collapse-close text-right' xs='6'>
										<button className='navbar-toggler' id='navigation'>
											<i className='tim-icons icon-simple-remove' />
										</button>
									</Col>
								</Row>
							</div>
							<Nav className='ml-auto' navbar>
								<UncontrolledDropdown nav>
									<DropdownToggle caret color='default' nav>
										<i
											aria-hidden={true}
											className='tim-icons icon-book-bookmark'
										/>
										<p>Examples</p>
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem to='/about-us' tag={Link}>
											<i className='tim-icons icon-bulb-63' />
											About-us
										</DropdownItem>

										<DropdownItem to='/contact-us' tag={Link}>
											<i className='tim-icons icon-square-pin' />
											Contact Us
										</DropdownItem>
										<DropdownItem to='/ecommerce' tag={Link}>
											<i className='tim-icons icon-basket-simple' />
											Ecommerce Page
										</DropdownItem>
										<DropdownItem to='/product-page' tag={Link}>
											<i className='tim-icons icon-bag-16' />
											Product Page
										</DropdownItem>
                                        <DropdownItem to='/login-page' tag={Link}>
											<i className='tim-icons icon-bulb-63' />
											Login Test
										</DropdownItem>
										<UncontrolledDropdown>
											<DropdownToggle
												caret
												color='default'
												className='dropdown-item'
												tag='a'
												href='#pablo'
												onClick={(e) => e.preventDefault()}
                                            >
                                                <i 
                                                    aria-hidden={true}
												    className='tim-icons icon-book-bookmark'
												/>
												App Pages
											</DropdownToggle>
											<DropdownMenu>
												<DropdownItem to='/account-settings' tag={Link}>
													<i className='tim-icons icon-lock-circle' />
													Account Settings
												</DropdownItem>
												<DropdownItem to='/login-page' tag={Link}>
													<i className='tim-icons icon-tablet-2' />
													Login Page
												</DropdownItem>
												<DropdownItem to='/register-page' tag={Link}>
													<i className='tim-icons icon-laptop' />
													Register Page
												</DropdownItem>

												<DropdownItem to='/checkout-page' tag={Link}>
													<i className='tim-icons icon-basket-simple' />
													Checkout Page
												</DropdownItem>
											</DropdownMenu>
										</UncontrolledDropdown>
									</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
						</UncontrolledCollapse>
					</Container>
				</Navbar>
			</>
		);
	}
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch( setCurrentUser(user) )
});


export default connect( mapStateToProps, mapDispatchToProps )(ColorNavbar);
