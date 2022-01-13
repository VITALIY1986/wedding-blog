/**
 * External dependencies
 */
 import { useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
 import Link from 'next/link';
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
                 <div className="error-notice mb-6">
                 {/*}    <FontAwesomeIcon
                         icon={ faSkullCrossbones }
                         aria-hidden={ true }
             />*/}
                     <p className='text-pink'>{ error }</p>
                 </div>
             ) }
             <Field
                 label="Ім'я користувача або адреса електронної пошти"
                 value={ username }
                 autoComplete="ім'я користувача"
                 onChange={ ( value ) => setUsername( value ) }
                 disabled={ status === 'resolving' }
                 placeholder="Введить ім'я користувача "
             />
             <Field
           
                 label="Пароль"
                 type="password"
                 autoComplete="current-password"
                 value={ password }
                 onChange={ ( value ) => setPassword( value ) }
                 disabled={ status === 'resolving' }
                 placeholder="Введить пароль "
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
             <div className="flex-none mt-6"><Link href="../../../registration/register-users">Реєстрація</Link></div>
         </form>
         
     );
 };
 
 export default LoginForm;