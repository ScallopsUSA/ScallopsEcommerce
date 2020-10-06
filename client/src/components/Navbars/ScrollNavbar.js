import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
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

class ScrollNavbar extends React.Component {
	componentDidMount() {
		let headroom = new Headroom(document.getElementById("navbar-scroll"));
		// initialise
		headroom.init();
	}
	scrollPage = (e, id) => {
		e.preventDefault();
		if (document.getElementById(id) !== null) {
			document.getElementById(id).scrollIntoView();
		}
	};
	render() {
		return (
			<>
				<Navbar className='fixed-top bg-info' expand='lg' id='navbar-scroll'>
					<Container>
						<div className='navbar-translate'>
							<NavbarBrand to='/index' tag={Link} id='tooltip1995010466'>
								<span>BLK•</span> Design System PRO React
							</NavbarBrand>
							<UncontrolledTooltip delay={0} target='tooltip1995010466'>
								Designed and Coded by Creative Tim
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
										<a href='#pablo' onClick={(e) => e.preventDefault()}>
											Scallops• <span>Ecommerce React</span>
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
										<i aria-hidden={true} className='tim-icons icon-paper' />
										<p>Sections</p>
									</DropdownToggle>
									<DropdownMenu aria-labelledby='navbarDropdownMenuLink' right>
										<DropdownItem
											href='#pablo'
											onClick={(e) => this.scrollPage(e, "headers")}>
											<i className='tim-icons icon-app' />
											Headers
										</DropdownItem>
										<DropdownItem
											href='#pablo'
											onClick={(e) => this.scrollPage(e, "features")}>
											<i className='tim-icons icon-settings' />
											Features
										</DropdownItem>
										<DropdownItem
											href='#pablo'
											onClick={(e) => this.scrollPage(e, "blogs")}>
											<i className='tim-icons icon-align-left-2' />
											Blogs
										</DropdownItem>
										<DropdownItem
											href='#pablo'
											onClick={(e) => this.scrollPage(e, "teams")}>
											<i className='tim-icons icon-user-run' />
											Teams
										</DropdownItem>
										<DropdownItem
											href='#pablo'
											onClick={(e) => this.scrollPage(e, "projects")}>
											<i className='tim-icons icon-paper' />
											Projects
										</DropdownItem>
										<DropdownItem
											href='#pablo'
											onClick={(e) => this.scrollPage(e, "pricing")}>
											<i className='tim-icons icon-money-coins' />
											Pricing
										</DropdownItem>
										<DropdownItem
											href='#pablo'
											onClick={(e) => this.scrollPage(e, "testimonials")}>
											<i className='tim-icons icon-chat-33' />
											Testimonials
										</DropdownItem>
										<DropdownItem
											href='#pablo'
											onClick={(e) => this.scrollPage(e, "contactus")}>
											<i className='tim-icons icon-mobile' />
											Contact Us
										</DropdownItem>
										<DropdownItem
											href='#pablo'
											onClick={(e) => this.scrollPage(e, "tables")}>
											<i className='tim-icons icon-chart-bar-32' />
											Tables
										</DropdownItem>
										<DropdownItem
											href='#pablo'
											onClick={(e) => this.scrollPage(e, "accordion")}>
											<i className='tim-icons icon-paper' />
											Accordion
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
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
										<UncontrolledDropdown>
											<DropdownToggle
												caret
												color='default'
												className='dropdown-item'
												tag='a'
												href='#pablo'
												onClick={(e) => e.preventDefault()}>
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

export default ScrollNavbar;
