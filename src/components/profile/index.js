/**
 * Internal dependencies
 */
 import { useAuth } from '../login-function/hooks';
 import Loading from './loading';
 
 
 export const Profile = () => {
    
     const { viewer, loadingViewer, logout } = useAuth();

    
    
     return (
         <div className="profile">
          
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
            
                
         </div>
     );
 };
 
 export default Profile;