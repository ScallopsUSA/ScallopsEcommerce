import React from "react";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)
import Basic from "./IndexSections/Basic.js";
import Navbars from "./IndexSections/Navbars.js";
import Tabs from "./IndexSections/Tabs.js";
import Pills from "./IndexSections/Pills.js";
import Pagination from "./IndexSections/Pagination.js";
import Notifications from "./IndexSections/Notifications.js";
import PreFooter from "./IndexSections/PreFooter.js";
import Footers from "./IndexSections/Footers.js";
import Typography from "./IndexSections/Typography.js";
import ContentAreas from "./IndexSections/ContentAreas.js";
import Cards from "./IndexSections/Cards.js";
import PlainCards from "./IndexSections/PlainCards.js";
import JavaScript from "./IndexSections/JavaScript.js";
import NucleoIcons from "./IndexSections/NucleoIcons.js";

class Index extends React.Component {
	componentDidMount() {
		document.body.classList.add("index-page");
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		this.refs.wrapper.scrollTop = 0;
	}
	componentWillUnmount() {
		document.body.classList.remove("index-page");
	}
	render() {
		return (
			<>
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<IndexHeader />
					<div className='main'>
						<Basic />
						<Navbars />
						<Tabs />
						<Pills />
						<Pagination />
						<Notifications />
						<PreFooter />
						<Footers />
						<Typography />
						<ContentAreas />
						<Cards />
						<PlainCards />
						<JavaScript />
						<NucleoIcons />
					</div>
					<DemoFooter />
				</div>
			</>
		);
	}
}

export default Index;
