/**
 * Internal dependencies
 */
 import ResetForm from './reset-form';
 import ResetPasswordForm from './reset-password-form';
 
 export const ResetPasswordEmail = () => {
     return (
         <div className="section login text-white">
           
                 <h2 className='text-xl'>Створити пароль</h2>
                 <div>
                     <p>
                     Введіть своє ім’я користувача або адресу електронної пошти, щоб скинути налаштування
                     </p>
                 </div>
          
             <ResetForm />
         </div>
     );
 };
 export default ResetPasswordEmail
 