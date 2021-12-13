/**
 * Internal dependencies
 */
 import { useQuery, gql, ApolloError } from "@apollo/client";
 
 import { useAuth } from '../login-function/hooks';

 import Product from "../../components/Product";
 	 export const GET_USER = gql`
	 query getUser {
	    products(first: 5, where: {visibility: VISIBLE, sku: "CD1622"}) {
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

	 const products = data?.products.nodes;
	 

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
						 .
					 </p>
				 </div>
			 </hgroup>
			
		 </div>
	 );
 };
 
 export default Profile;
