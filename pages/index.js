import Layout from "../src/components/Layout";
import ProductHome from "../src/components/ProductHomePage";
import Post from "../src/components/Post";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import ParentProductBlock from "../src/components/products/PerentProducts";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
import Accordion from "../src/components/Accordion";
import { AuthContextProvider } from '../src/components/login-function/auth-context';
import { ApolloProvider } from "@apollo/client";
import Login from "../src/components/login";
import SignUp from '../src/components/signup/SignUp'
import { useState } from 'react';
import { useAuth } from '../src/components/login-function/hooks';
import Head from "next/head"
import AliceCarousel from 'react-alice-carousel';
import Navigation from "../src/components/navigation-chantarelle";
import profilePic from "../public/pattern_chant.png"
import 'react-alice-carousel/lib/alice-carousel.css';



export default function Home (props) {

	const { isLoggedIn } = useAuth();

	  
	const questionsAnswers = [
	
        {
          id: 2,
            title: "CHANTARELLE",
            description: "Професійна і домашня косметика, косметологічні апарати (Франція, Польща)",
            linkarticle:"/chantarelle"
      
        },
        {
          id: 3,
            title: "ARKANA",
            description: "Професійна і домашня косметика (Польща)",
            linkarticle:"/arkana"
        },
        {
          id: 4,
            title: "NOREL Dr. Wilsz",
            description: "Професійна і домашня косметика (Польща)",
            linkarticle:"/norel"
           
        },
		{
			id: 2,
			  title: "MCCM",
			  description: "Одна з провідних компаній в індустрії краси",
			  linkarticle:"/mccm"
		
		  },
		  {
			id: 3,
			  title: "DERMAOXY",
			  description: "апарат кисневої Безін'єкційної мезотерапії (Данія)",
			  linkarticle:"/dermaoxy"
		  },
		  {
			id: 4,
			  title: "SITTARA",
			  description: "Професійні косметологічні апарати",
			  linkarticle:"/posts/chantarelle"
			 
		  }
	]
	
	const { products,  heroCarousel, posts, postsCategory,featuredproducts,news ,ret} = props || {};

	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items:4 },
	};

	
	const items = [
	
		
	];
	news.map(( post,index )=>items.push(<Post key={ post.id } index={index} post={ post } />) );

	
	console.log(products.length)
	 

	return (
	

			<Layout>
	{/*   <img src="https://www.bellebridalmagazine.com/wp-content/uploads/2021/12/Screenshot-2023-02-07-at-08.03.09.png"></img>
					<h1>wedding show</h1>
					<button className="bg-black p-3 ">book ticckets now</button> fff  */}
		
		           <h1>wedding show</h1>
				   <button className="bg-black p-3">book ticckets now</button>
		
			
			
			
			
			</Layout>
		
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
		questionsAnswers:data?.category?.posts?.nodes ? data.category.posts.nodes : [],
			postsCategory: data?.category ? data.category : [],
			news: data?.news?.posts?.nodes ? data.news.posts.nodes : [],
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			featuredproducts: data?.featuredproducts?.nodes ? data.featuredproducts.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};

