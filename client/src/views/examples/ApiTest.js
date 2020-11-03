import React, { useState } from "react";
import keys from "../../secretKeys";
import axios from 'axios';
import categories from "../../categoryId";

// import "./ApiTest.scss";

export default function ApiTest() {
	const [apiData, setApiData] = useState([]);
	const [productData, setProductData] = useState([])
	//[ GET DATA FOR A PRODUCT USING PRODUCT ID ]
	const getProduct = (id) => {
		axios({
			"method":"GET",
			"url":"https://asos2.p.rapidapi.com/products/v3/detail",
			"headers":{
			"content-type":"application/octet-stream",
			"x-rapidapi-host":"asos2.p.rapidapi.com",
			"x-rapidapi-key":keys.keys.RapidApiKey,
			"useQueryString":true
			},"params":{
				"store":"US",
				"sizeSchema":"US",
				"lang":"en-US",
				"currency":"USD",
				"id":id
				}
			})
			.then((response)=>{
			  setProductData(response.data);
			  console.log(response.data)
			})
			.catch((error)=>{
			  console.log(error)
			})
	}




	const getProducts = (id) => {
		axios({
			"method":"GET",
			"url":"https://asos2.p.rapidapi.com/products/v2/list",
			"headers":{
			"content-type":"application/octet-stream",
			"x-rapidapi-host":"asos2.p.rapidapi.com",
			"x-rapidapi-key":keys.keys.RapidApiKey,
			"useQueryString":true
			},"params":{
			"country":"US",
			"currency":"USD",
			"sort":"freshness",
			"lang":"en-US",
			"sizeSchema":"US",
			"offset":"0",
			"categoryId":id,
			"limit":"10",
			"store":"US"
			}
			})
			.then((response)=>{
			  console.log(response)
			  setApiData(response.data.products)
			})
			.catch((error)=>{
			  console.log(error)
			})

	}



 	// const getApi = () => {
	// 	fetch(
	// 		"https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=3&store=US",
	// 		{
	// 			method: "GET",
	// 			headers: {
	// 				"x-rapidapi-host": "asos2.p.rapidapi.com",
	// 				"x-rapidapi-key": keys.keys.RapidApiKey
	// 			},
	// 		}
	// 	)
	// 		.then((res) => res.json())
	// 		.then((response) => {
	// 			setApiData(response.products);
	// 			console.log("result: ", response.products);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };
	return (
		<div>
			{/* <button onClick={getApi}>Get Api!</button> */}
			<h3>Categories</h3>
			<ul>
				<p>Clothing</p>
				{Object.entries(categories.categoryId.womens.clothing)
					.map( ([key, value]) => 
						<button onClick={ e => {getProducts(value)}} key={value}>{key}</button>
					)
				}
			</ul>
			<ul>
				<p>Shoes</p>
				{Object.entries(categories.categoryId.womens.shoes)
					.map( ([key, value]) => 
						<button onClick={ e => {getProducts(value)}} key={value}>{key}</button>
					)
				}
			</ul>
			<ul>
				{productData.length !== 0 &&
					<li>{productData.name} {productData.price.current.text}
						<p>Description: {productData.description}</p>
						<p>About Me: {productData.info.aboutMe}</p>
						<p>Care Info: {productData.info.careInfo}</p>
						<p>Size and Fit: {productData.info.sizeAndFit}</p>
						{ productData.media.images.map((el, i)=>(
							<img key={i} src={`https://${el.imageUrl}`} style={{width:200, height:200}}/>
						))
						}
						<br/>
						<button>Add To Cart</button>
					</li>
				}
			</ul>
			<ul>
				{apiData.map((el) => (
					<li key={el.id}>{el.name}{el.price.current.text}
						<img src={`https://${el.imageUrl}`} style={{width:200, height:200}}/>
						<button onClick={ e => {getProduct(el.id)}}>Details</button>
					</li>
				))}
			</ul>
		</div>
	);
}
