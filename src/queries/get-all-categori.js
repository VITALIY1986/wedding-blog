import { gql } from "@apollo/client";

/**
 * GraphQL categories query.
 */
const GET_CATEGORI_QUERY = gql`query {
	productCategoryArkanaHome:  productCategory(id: "dGVybTo1NA==") {
    children {
      nodes {
        id
        name
        slug
        children{
          nodes {
            name
            id
            slug
          }
        }
      }
    }
  }
  productChantarelleHome:  productCategory(id: "dGVybToyNzQ=") {
    children {
      nodes {
        id
        name
        slug
        children{
          nodes {
            name
            id
            slug
          }
        }
      }
    }
  }
  productNorelHome:  productCategory(id: "dGVybTozMzg=") {
    children {
      nodes {
        id
        name
        slug
        children{
          nodes {
            name
            id
            slug
          }
        }
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
