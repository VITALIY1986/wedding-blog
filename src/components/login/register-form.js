/**
 * External dependencies
 */
 import { useState } from 'react';
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
   
     const onRegister = ( e ) => {
         e.preventDefault();
         setPasswordError( '' );
         if ( username.length === 0 ) {
             setPasswordError( "Будь ласка, введіть ім'я користувача." );
             return;
         }
         if ( email.length === 0 ) {
             setPasswordError( 'Будь ласка, введіть свою електронну адресу.' );
             return;
         }
         if ( password.length === 0 ) {
             setPasswordError( 'Будь ласка, введіть пароль.' );
             return;
         }
         register( username, email, password );
     };
 
     return (
         <form
             onSubmit={ onRegister }
             className="register-form text-white w-1/5"
             autoComplete="on"
         >
             { ( error || passwordError ) && (
                 <div className="error-notice bg-white rounded p-3 text-red-900">
                  {/*  <FontAwesomeIco
                         icon={ faSkullCrossbones }
                         aria-hidden={ true }
                  />*/}
                     <p>{ passwordError || error }</p>
                 </div>
             ) }
             <Field
                 label="Ім'я користувача"
                 value={ username }
                 autoComplete="username"
                 onChange={ ( value ) => setUsername( value ) }
                 placeholder="Введіть ім'я користувача"
                 disabled={ status === 'resolving' }
              
             />
             <Field
                 label="Електронна пошта"
                 value={ email }
                 autoComplete="email"
                 onChange={ ( value ) => setEmail( value ) }
                 placeholder="Введіть адресу вашої електронної пошти"
                 disabled={ status === 'resolving' }
             />
             <Field
                 label="Пароль"
                 type="password"
                 autoComplete="new-password"
                 value={ password }
                 placeholder="Виберіть пароль"
                 onChange={ ( value ) => setPassword( value ) }
                 disabled={ status === 'resolving' }
             />
             <PasswordStrengthBar
      
                 password={ password }
                 scoreWords={ [
                     'critical fail',
                     'okay',
                     'good',
                     'strong',
                     'critical roll!',
                 ] }
                 shortScoreWord={ 'critical fail' }
             />
             <p>
                 <button
                     className="button button--inline button--large p-3 bg-gray-400 mt-4 text-white w-full rounded"
                     onClick={ onRegister }
                     disabled={ status === 'resolving' }
                 >
                     Create Account
                 </button>
             </p>
             <div className="flex-none mt-6"><Link href="../../../registration/register">Увійти</Link></div>
         </form>
     );
 };
 
 export default RegisterForm;