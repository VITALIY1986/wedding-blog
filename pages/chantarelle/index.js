import Layout from "../../src/components/Layout";
import Post from "../../src/components/Post_article";
import client from '../../src/components/ApolloClient';
import PRODUCTS_AND_CATEGORIES_QUERY from "../../src/queries/product-and-categories";
import { AuthContextProvider } from '../../src/components/login-function/auth-context';
export default function Home (props) {


	const { posts} = props || {};



	
	

	

	return (
		<AuthContextProvider>
			<Layout>
			
				
   

			
			
			
                { posts.length ? (
							posts.map( post => <Post key={ post.id } post={ post } />)
						) : '' }				
			
		
			</Layout>
			</AuthContextProvider>
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
	
			
			posts: data?.category?.posts?.nodes ? data.category.posts.nodes : [],
		
		},
		revalidate: 1
	}

};
