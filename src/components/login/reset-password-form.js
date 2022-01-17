/**
 * External dependencies
 */
 import React, { useState, useEffect } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
 import Link from 'next/link';
 import PasswordStrengthBar from 'react-password-strength-bar';
 import Success from './success';
 /**
  * Internal dependencies
  */
 import Field from '../login-function/field';
 import { useResetPassword } from '../login-function/use-reset-password';

 
 export const ResetPasswordForm = ( props ) => {
    const { reset } = props;
   
  const [ resetKey, setKey ] = useState( '' );
    const [ resetLogin, setLogin ] = useState( '' );
 
          useEffect(() => {
            // Обновляем название докуммента, используя API браузера
            document.title = resetKey;
            document.titl =resetLogin;
          });
     const [ password, setPassword ] = useState( '' );
     const [ password2, setPassword2 ] = useState( '' );
     const [ passwordError, setPasswordError ] = useState( '' );
     const { resetUserPassword, error, status } = useResetPassword();
 
     const onReset = ( e) => {
         e.preventDefault();
         setPasswordError( '' );
         if ( password.length === 0 ) {
             setPasswordError( 'You must enter a new password.' );
             return;
         }
         if ( password2.length === 0 ) {
             setPasswordError( 'You must re-enter your new password.' );
             return;
         }
         if ( password !== password2 ) {
             setPasswordError( 'Passwords do not match!' );
             return;
         }
         resetUserPassword( resetKey, resetLogin, password );
     };
 
     if ( status === 'resolved' && ! error ) {
         return (
            <Success> 
                 <p>
                     Your password has been reset. You can now{ ' ' }
                     <Link href="/" className="link-button">
                         Login
                     </Link>
                     .
                 </p>
                 </Success> 
         );
     }
 
     return (
         <form onSubmit={ onReset } className="reset-form">
             { ( error || passwordError ) && (
                 <div className="error-notice">
                     <FontAwesomeIcon
                         icon={ faSkullCrossbones }
                         aria-hidden={ true }
                     />
                     <p>{ passwordError || error }</p>
                 </div>
             ) }
             <Field
                 label="New password"
                 type="password"
                 value={ password }
                 onChange={ setPassword }
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
             <Field
                 label="Re-enter your new password"
                 type="password"
                 value={ password2 }
                 onChange={ setPassword2 }
             />
             <button
                 className="button button--inline button--large"
                 onClick={() => {setKey(reset[0]);setLogin(reset[1]);onReset;}}
                 disabled={ status === 'resolving' }
             >
                 Set New Password
             </button>
           
             <div>
       
      </div>
         </form>
     );
 };
 
 export default ResetPasswordForm;