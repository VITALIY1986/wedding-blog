/**
 * External dependencies
 */
 import { useState,useEffect } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
 import PasswordStrengthBar from 'react-password-strength-bar';

 import Link from 'next/link';
 /**
  * Internal dependencies
  */
 import Field from '../login-function/field';
 import { useRegistration } from '../login-function/use-registration';
 import { useAuth } from '../login-function/hooks';
 export const RegisterForm = () => {
     const [ username, setUsername ] = useState( '' );
     const [ email, setEmail ] = useState( '' );
     const [ password, setPassword ] = useState( '' );
     const { register, error, status } = useRegistration();
     const [ passwordError, setPasswordError ] = useState( '' );
     const { isLoggedIn } = useAuth();
     useEffect(() => {
     setUsername(email);
    });
     const onRegister = ( e ) => {
       
         e.preventDefault();
         setPasswordError( '' );
         
         if ( email.length === 0 ) {
             setPasswordError( 'Будь ласка, введіть свою електронну адресу.' );
             return;
         }
        
         register( username, email, password );
     };
     
     return (

         <form
             onSubmit={ onRegister }
             className="register-form  w-full  lg:w-1/5 bg-white p-6  "
             autoComplete="off"
         >
              { ( error || passwordError ) && (
                 <div className={`${  error === "/registration/resetsenks" ? 'hidden' : 'error-notice bg-white rounded p-3 text-red-900'}`}>
                  {/*  <FontAwesomeIco
                         icon={ faSkullCrossbones }
                         aria-hidden={ true }
                  />*/}
                     <p>{ passwordError || error }</p>
                 </div>
             ) }
              {/*  autoComplete="username"*/}
              <div>   <h2 className='text-xl mb-6'>Реєстрація!</h2></div>
           
             {/* autoComplete="email"*/}
             <Field
                 label="Введіть адресу вашої електронної пошти"
                 value={ email }
                
                 onChange={ ( value ) => setEmail( value ) }
                
                 disabled={ status === 'resolving' }
             />
            
             <p>
                 <button
                     className="button button--inline button--large p-3 bg-blue mt-4 text-white w-full rounded"
                     onClick={ onRegister }
                     disabled={ status === 'resolving' }
                 >
                     Зареєструватися
                 </button>
             </p>
             <div className="flex-none mt-6"><Link href="../../../registration/register">Увійти</Link></div>
            
         </form>
       
     );
 };
 
 export default RegisterForm;