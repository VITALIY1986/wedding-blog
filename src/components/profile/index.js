/**
 * Internal dependencies
 */
 import { useAuth } from '../login-function/hooks';

 
 export const Profile = () => {
	 const { viewer, loadingViewer, logout } = useAuth();
 
	
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