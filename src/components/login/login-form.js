/**
 * External dependencies
 */
 import { useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
 
 /**
  * Internal dependencies
  */
 import Field from '../login-function/field';
 import { useAuth } from '../login-function/hooks';
 
 export const LoginForm = () => {
     const [ username, setUsername ] = useState( '' );
     const [ password, setPassword ] = useState( '' );
     const { login, error, status } = useAuth();
 
     const onLogin = ( e ) => {
         e.preventDefault();
         login( username, password );
     };
 
     return (
       
         <form onSubmit={ onLogin } className="login-form px-3 text-white" autoComplete="on">
             { error && (
                 <div className="error-notice">
                     <FontAwesomeIcon
                         icon={ faSkullCrossbones }
                         aria-hidden={ true }
                     />
                     <p>{ error }</p>
                 </div>
             ) }
             <Field
                 label="Ім'я користувача або адреса електронної пошти"
                 value={ username }
                 autoComplete="ім'я користувача"
                 onChange={ ( value ) => setUsername( value ) }
                 disabled={ status === 'resolving' }
              
             />
             <Field
           
                 label="Password"
                 type="password"
                 autoComplete="current-password"
                 value={ password }
                 onChange={ ( value ) => setPassword( value ) }
                 disabled={ status === 'resolving' }
             />
             <p>
                 <button
                     className="button button--inline button--large p-3 bg-gray-400 mt-4 text-white w-full rounded"
                     onClick={ onLogin }
                     disabled={ status === 'resolving' }
                 >
                     Увійти
                 </button>
             </p>
         </form>
         
     );
 };
 
 export default LoginForm;