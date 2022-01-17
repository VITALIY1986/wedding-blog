/**
 * Internal dependencies
 */
 import ResetForm from './reset-form';
 import ResetPasswordForm from './reset-password-form';
 
 export const ResetPasswordEmail = () => {
     return (
         <div className="section login">
             <hgroup>
                 <h2>Reset Password</h2>
                 <div>
                     <p>
                         Enter your username or email address to reset your
                         password.
                     </p>
                 </div>
             </hgroup>
             <ResetForm />
         </div>
     );
 };
 export default ResetPasswordEmail
 