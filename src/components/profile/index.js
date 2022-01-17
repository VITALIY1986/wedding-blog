/**
 * Internal dependencies
 */
 import { useQuery, gql, ApolloError } from "@apollo/client";
 import {useState} from  'react'
 import { useAuth } from '../login-function/hooks';
 import Link from 'next/link';
 import Product from "./profile-form";
 
 export const Profile = ({ children }) => {
	
	 const { viewer, loadingViewer, logout } = useAuth();


	

	
	 return (
		 <div className="profile">
		
			 <hgroup>
			
				 <div>
				<p className="text-white"> Ви успішно ввійшли в свій акаунт{ ' ' }</p>
					 <div className="text-white flex">
						
						 <a href="/">
						 <button  className="button button--inline button--large p-3 bg-gray-600 mt-4 text-white w-full rounded">
						  магазин
						 </button>
						 </a>
						 <button onClick={ logout } className="button button--inline button--large p-3 bg-gray-400 mt-4 text-white w-full rounded">
						 вийти тут
						 </button>
					
					 </div>
				
				 </div>
				
			 </hgroup>
			
		 </div>
	 );
 };
 
 export default Profile;
