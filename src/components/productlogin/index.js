
import { useAuth } from '../login-function/hooks';
import Product from "./PerentProducts";
import { useQuery, gql, ApolloError } from "@apollo/client";
import {useState,useEffect} from  'react'
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
 const Account = () => {
    const { data, loading, error } = useQuery(GET_USER);
     const { isLoggedIn } = useAuth();
     const ViewComponent = isLoggedIn ? Product : "Login";
     const products = data?.products.nodes;
	 const[count,setCount]=useState( '');

	let handler=()=>{
		let count =products;
	const al =<ViewComponent products={ count }/>
		setCount(al)
	}
     return (
        <>
        	<button onClick={handler}>tcnm</button>
        { count }
            
     </>
     );
 };
 
 export default Account;

