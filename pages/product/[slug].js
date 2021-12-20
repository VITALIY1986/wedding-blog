import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import client from '../../src/components/ApolloClient';
import AddToCartButton from '../../src/components/cart/AddToCartButton';
import {PRODUCT_BY_SLUG_QUERY, PRODUCT_SLUGS} from '../../src/queries/product-by-slug';
import { isEmpty } from 'lodash';
import GalleryCarousel from "../../src/components/single-product/gallery-carousel";
import Price from "../../src/components/single-product/price";
import { useAuth } from '../../src/components/login-function/hooks';
export default function Product(props) {
	const { product } = props;
    const { isLoggedIn } = useAuth();
  const red =  isLoggedIn ? true : false;


// If the page is not yet generated, this will be displayed
  const regular = product?.regularPrice;
 
  const re = product?.regularPrice ;
  const regula = +re + +regular;
  const login = Number(product?.regularPrice);
  const paste = Number(login/2);
  const rar = isLoggedIn ? login :  regula  ;  
const par = Number(rar);

const price = login+paste ;

const amount = par - product?.price;
const interest = par/100;
const result = amount/interest;
 // initially until getStaticProps() finishes running

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

	return (
		<Layout>
			{ product ? (
				<div className="single-product container mx-auto my-32  xl:px-0">
					<div className="grid md:grid-cols-2 gap-4">
						<div className="product-images relative">
                        { product.featured  ? <div className="bg-blue rounded absolute right-2 top-2 z-10 text-white p-2">NEW</div>: ''}
{ product?.salePrice  ? <div className={`${ isLoggedIn ? 'hidden' : 'block bg-red-200 rounded absolute left-2 top-2 z-10 text-white p-2' }`}>{ result.toFixed(0)}%OFF</div> : ''}
							{ !isEmpty( product?.galleryImages?.nodes ) ? (
                                <GalleryCarousel gallery={product?.galleryImages?.nodes}/>
							) : !isEmpty( product.image ) ? (
                                <img
                                    src={ product?.image?.sourceUrl }
                                    alt="Product Image"
                                    width="100%"
                                    height="auto"
                                    srcSet={ product?.image?.srcSet }
                                />
							) : null }
						</div>
						<div className="product-info px-4 mt-10 lg:mt-0">
							<h4 className="products-main-title text-2xl uppercase">{ product.name }</h4>
							<div
className="singl_product_description mb-5 mt-3 "
								dangerouslySetInnerHTML={ {
									__html: product.description,
								} }
							
							/>
                        {}
                            <div className='mt-10'>
                            <span className='text-white  bg-black opacity-30 p-3'>{product.sku}</span>
                              {product?.salePrice   ?  <div className={`${ isLoggedIn ? 'hidden' : 'block mt-4 ' }`}>  <strike className="mr-1 text-red-200 text-xl">₴{price.toFixed(2)}</strike>₴{product?.price}</div> :   <div className="mt-4 text-xl">{isLoggedIn ? login : price.toFixed(2)}</div>}
					{product?.salePrice  ?  <div className={`${ isLoggedIn ? 'block text-xl mt-4' : 'hidden ' }`}> ₴{par.toFixed(2)}</div> :   ''}
                    </div>
                           {/* <Price salesPrice={product?.price } regularPrice={product?.regularPrice}/>*/}
                           <div className="mt-3">
							<AddToCartButton className="mt-3"    product={ product }/>
                            </div>
						</div>
					</div>

				</div>
			) : (
				''
			) }
		</Layout>
	);
};


export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query({
        query: PRODUCT_BY_SLUG_QUERY,
        variables: { slug }
    })

    return {
        props: {
            product: data?.product || {},
        },
        revalidate: 1
    };
}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: PRODUCT_SLUGS
    })

    const pathsData = []

    data?.products?.nodes && data?.products?.nodes.map((product) => {
        if (!isEmpty(product?.slug)) {
            pathsData.push({ params: { slug: product?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}
