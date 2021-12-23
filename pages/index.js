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
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Home (props) {

	const { isLoggedIn } = useAuth();

	
	
	const { products,  heroCarousel, posts, postsCategory,featuredproducts,news} = props || {};

	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items:5 },
	};

	
	const items = [
	
		
	];
	news.map(( post,index )=>items.push(<Post key={ post.id } index={index} post={ post } />) );

	

	return (

			<Layout>
	
				{/*Hero Carousel*/}
				<HeroCarousel heroCarousel={heroCarousel}/>
				
				
   

				{/*Categories
				<div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
					<h2 className="mai-title text-3xl text-center mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
					<ParentCategoriesBlock productCategories={ productCategories }/>
</div>*/ }
			
				{/*<div>	<Login/></div>*/}
			
			<div className="px-4">
				<div className="products container mx-auto mt-32  ">
				<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">НОВИНИ</span></h2>
				
				
			
			
				 <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
		disableButtonsControls={true}
    />
							
			
		
			</div>
					{/*Post
					<div className="products container mx-auto my-32 px-4 ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">{postsCategory?.name}</span></h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
						{ posts.length ? (
							posts.map( post => <Post key={ post.id } post={ post }/> )
						) : '' }
					</div>
				</div>*/ }
					{/*Star*/ }
			
				
					
				{/*Products*/ }
				<div className="products container mx-auto my-10  ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">Новинки</span></h2>
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
					{ featuredproducts.length ? (
							featuredproducts.map( product => <ProductHome key={ product.id } isLoggedIn={isLoggedIn} product={ product }/> )
						) : '' }
					</div>
				</div>
				{/*Prodduts*/ }
				<div className="products container mx-auto my-10  ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">Акції</span></h2>
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
						{ products.length ? (
							products.map( product => <ProductHome key={ product.id } isLoggedIn={isLoggedIn} product={ product }/> )
						) : '' }
					</div>
				</div>
				<div className="products container mx-auto my-10  ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">Наші Марки</span></h2>
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
						{ products.length ? (
							products.map( product => <ProductHome key={ product.id } isLoggedIn={isLoggedIn} product={ product }/> )
						) : '' }
					</div>
				</div>
				</div>
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

