import { gql } from "@apollo/client";

/**
 * GraphQL categories query.
 */
const GET_CATEGORI_QUERY = gql`query {
	productCategoryArkanaHome:  productCategory(id: "dGVybTo4MTg=") {
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
  productChantarelleHome:  productCategory(id: "dGVybTo3MzQ=") {
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
  productNorelHome:  productCategory(id: "dGVybTo5NDA=") {
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
  productMCCM:  productCategory(id: "dGVybTo5MTQ=") {
    children {
      nodes {
        id
        name
        slug
        children {
          nodes {
            name
            id
            slug
          }
        }
      }
    }
  }
  productDermaoxy:  productCategory(id: "dGVybTo4MTI=") {
    children {
      nodes {
        id
        name
        slug
        children {
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
