import Layout from "../src/components/Layout";
import Login from "../src/components/login";
import RegisterForm from "../src/components/login/register-form";
import { AuthContextProvider } from '../src/components/login-function/auth-context';
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
function App() {

	return (
		<AuthContextProvider>
			<ApolloProvider client={ client }>
				<div className="app">
					<div className="site-wrapper">
					
						<div className="site-content">
						<Login/>
	
						</div>
					</div>
					
				</div>
			</ApolloProvider>
		</AuthContextProvider>
	);
}




export default App;

