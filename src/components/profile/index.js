/**
 * Internal dependencies
 */
 import { useQuery, gql, ApolloError } from "@apollo/client";
 import {useState} from  'react'
 import { useAuth } from '../login-function/hooks';
 
 import Product from "../../components/ProductHomePage";
 	 export const GET_USER = gql`
	 query getUser {
	    products( where: {sku: "CD1622"}) {
			nodes {
			  id
			  productId: databaseId
			  averageRating
			  slug
			  description
			  sku
			  image {
				id
				altText
				sourceUrl
			  }
			  name
			  ... on SimpleProduct {
				price
				regularPrice
				id
			  }
			  ... on VariableProduct {
				price
				id
				regularPrice
			  }
			  ... on ExternalProduct {
				price
				id
				externalUrl
				regularPrice
			  }
			  ... on GroupProduct {
				id
				products {
				  nodes {
					... on SimpleProduct {
					  id
					  price
					  regularPrice
					}
				  }
				}
			  }
			}
		  }
	 }
   `;
 export const Profile = ({ children }) => {
	const { data, loading, error } = useQuery(GET_USER);
	 const { viewer, loadingViewer, logout } = useAuth();
	 const { isLoggedIn } = useAuth();
	 const products = data?.products.nodes;
	 const[count,setCount]=useState( '');
	let handler=()=>{
		let count =products;
	const al =count.map( product => <Product key={ product.id } product={ product }/>)
		setCount(al)
	}
	
	 return (
		 <div className="profile">
			 <hgroup>
				 <h2>Account</h2>
				 <div>
			
					 <p>
						 Edit your account details below, or{ ' ' }
						 <button onClick={ logout } className="link-button">
							 sign out here
						 </button>
					<button onClick={handler}>sfffs</button>
					 </p>
				{count}
				 </div>
				
			 </hgroup>
			
		 </div>
	 );
 };
 
 export default Profile;
