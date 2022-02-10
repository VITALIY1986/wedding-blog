import { useRouter } from 'next/router'
import Login from "../../src/components/login/reset-password-form";
import Layout from "../../src/components/Layout";
function App(props) {
    const router = useRouter()
    const { slug  } = router.query
	return (
		<Layout>
	    	<div class="relative h-screen overflow-x-hidden bg-gray-100 px-1 ">
				<div class="h-screen flex justify-center items-center">
					<div className='lg:w-2/4'>
						
						<Login reset={slug}/>
					</div>
				</div>
			</div>
		</Layout>		

	);
}
export default App;


