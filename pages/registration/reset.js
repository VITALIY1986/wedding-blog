import Layout from "../../src/components/Layout";
import Reset from "../../src/components/login/reset";

function App() {

	return (
		<Layout>	
			<div class="relative h-screen overflow-x-hidden bg-gray-100 px-6 ">
				<div class="h-screen flex justify-center items-center">
					<Reset/>
				</div>
			</div>
		</Layout>
	);
}
export default App;