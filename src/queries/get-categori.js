import { gql } from "@apollo/client";

/**
 * GraphQL categories query.
 */
const GET_CATEGORI_QUERY = gql`query {

	productCategory(id: "dGVybTo1NA==") {
		children {
		  nodes {
			name
			id
			slug
		  }
		}
	  }
	  heroCarousel: productCategories(where: {slug: "offers"}) {
		nodes {
		  id
		  children {
			nodes {
			  id
			  name
			  slug
			  databaseId
			  description
			  image {
				id
				sourceUrl
				srcSet
			  }
			}
		  }
		}
	  }
}`;

export default GET_CATEGORI_QUERY;
