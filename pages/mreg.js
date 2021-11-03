import Layout from "../src/components/Layout";
import RegisterForm from "../src/components/register";

const Checkout = ({data}) => (
	<Layout>
		<div className="checkout container mx-auto my-32 px-4 xl:px-0">
			<h1 className="mb-5 text-2xl uppercase">Checkout Page</h1>
			<RegisterForm />
		</div>
	</Layout>
);
export default Checkout;