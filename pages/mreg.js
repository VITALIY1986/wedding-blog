import Layout from "../src/components/Layout";
import LoginForm from "../src/components/login-form";
import RegisterForm from "../src/components/register-form";
const Checkout = ({data}) => (
	<Layout>
		<div className="checkout container mx-auto my-32 px-4 xl:px-0">
			<h1 className="mb-5 text-2xl uppercase">Checkout Page</h1>
			<LoginForm />
			<RegisterForm />
		</div>
	</Layout>
);
export default Checkout;

RegisterForm