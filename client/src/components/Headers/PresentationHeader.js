import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class PresentationHeader extends React.Component {
	scrollPage = (e) => {
		e.preventDefault();
		document.getElementById("pricing").scrollIntoView();
	};
	render() {
		return (
			<>
				<div className='page-header'>
					<img
						alt='...'
						className='path'
						src={require("assets/img/blob.png")}
					/>
					<img
						alt='...'
						className='path2'
						src={require("assets/img/path2.png")}
					/>
					<img
						alt='...'
						className='shapes triangle'
						src={require("assets/img/triunghiuri.png")}
					/>
					<img
						alt='...'
						className='shapes wave'
						src={require("assets/img/waves.png")}
					/>
					<img
						alt='...'
						className='shapes squares'
						src={require("assets/img/patrat.png")}
					/>
					<img
						alt='...'
						className='shapes circle'
						src={require("assets/img/cercuri.png")}
					/>
					<Container>
						<div className='content-center brand'>
							<h1 className='h1-seo'>
								Scallops• <small className='text-warning'> E-commerce</small>
							</h1>
							<h3>Scallops•</h3>
						</div>
					</Container>
				</div>
			</>
		);
	}
}

export default PresentationHeader;
