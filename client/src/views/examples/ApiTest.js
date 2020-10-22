import React, { useState } from "react";
// import "./ApiTest.scss";

export default function ApiTest() {
	const [apiData, setApiData] = useState([]);
	const getApi = () => {
		fetch(
			"https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=3&store=US",
			{
				method: "GET",
				headers: {
					"x-rapidapi-host": "asos2.p.rapidapi.com",
					"x-rapidapi-key":
					"0ee3bb54a2mshcf322e0dcffed20p1e5919jsn00e456447551",
				},
			}
		)
			.then((res) => res.json())
			.then((response) => {
				setApiData(response.products);
				console.log("result: ", response.products);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<button onClick={getApi}>Get Api!</button>
			<ul>
				{apiData.map((el) => (
					<li key={el.id}>{el.name}
						<img src={`https://${el.imageUrl}`} style={{width:200, height:200}}/>
					</li>
				))}
			</ul>
		</div>
	);
}
