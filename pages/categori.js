import Layout from "../src/components/Layout";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import GET_CATEGORI_QUERY from "../src/queries/get-categori";
import HeroCarousel from "../src/components/home/hero-carousel";
export default function Categories ( props ) {

	const { productCategor,  heroCarousel } = props;

	return (
		<Layout>
            	<HeroCarousel heroCarousel={heroCarousel}/>
			{/*Categories*/}
			<div className="categories product-categories-container container mx-auto my-32 px-4 xl:px-0">
				<h2 className="text-2xl mb-5 uppercase">ARKANA</h2>
				<ParentCategoriesBlock productCategor={ productCategor }/>
       
			</div>
		</Layout>
	)
};

export async function getStaticProps() {

	const {data} = await client.query({
		query: GET_CATEGORI_QUERY,
	});

	return {
		props: {
			productCategor: data?.productCategory?.children?.nodes || [],
            heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
           
		},
		revalidate: 1
	}

};