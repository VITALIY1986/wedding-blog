import Layout from "../src/components/Layout";
import Login from "../src/components/login";
import RegisterForm from "../src/components/login/register-form";
import { AuthContextProvider } from '../src/components/login-function/auth-context';


function App() {

	return (
		<AuthContextProvider>
				<Layout>
				<div className="app">
					<div className="site-wrapper">
					
						<div className="site-content">
						<Login/>
	
						</div>
					</div>
					
				</div>
				</Layout>
		</AuthContextProvider>
	);
}




export default App;

