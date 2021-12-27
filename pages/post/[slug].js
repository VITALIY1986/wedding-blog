import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import client from '../../src/components/ApolloClient';
import AddToCartButton from '../../src/components/cart/AddToCartButton';
import {POST_BY_SLUG_QUERY,POSTS_SLUGS} from '../../src/queries/product-by-slug';
import { isEmpty } from 'lodash';
import GalleryCarousel from "../../src/components/single-product/gallery-carousel";
import Price from "../../src/components/single-product/price";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Post(props) {
	const { post } = props;

    const router = useRouter()

    // If the page is not yet generated, this will be displayed

  //  const [convertedText, setConvertedText] = useState('');
    
 //   useEffect(() => {
 //   const response = axios
  //      .post(
 //         'https://translation.googleapis.com/language/translate/v2',
   //       {},
   //       {
  //          params: {
   //           q: post.content , //или div.innerText
   //           target: "ru",
  //            key: 'AIzaSyAXYTi9B39Zc7ObHf0hHhnAuM9JTu2ua3s'
    //        }
   //       }
  //      )
    //    .then((response) => {
  //        setConvertedText(response.data.data.translations[0].translatedText);
  //      })
   //     .catch((err) => {
  //        console.log('rest api error', err);
  //      });
 //   }, );



    
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

	return (
		
			<Layout>
                <div className="flex flex-col lg:flex-row mx-3 md:mx-10 lg:mx-20 lg:flex    my-20">
                    	
                    <div className="lg:w-2/4 mt-6 lg:mt-0 lg:order-first ">		
                        <h4 className="products-main-title text-2xl lg:text-4xl lg:w-11/12 uppercase">{ post?.title }</h4>
                        <p className="lg:w-4/5  mt-3 lg:text-lg text-gray-500 ">
               
                           <div  dangerouslySetInnerHTML={ {
						   			__html: post.content
						   } }></div>
                        </p>
                    </div>
                    <div className="lg:w-2/4 order-first ">
                        <img
			            className="object-cover w-full"
				        src={post?.featuredImage?.node.sourceUrl }
			            />
		            </div>
                </div>
            </Layout>	
                           
	
	);
};


export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query({
        query: POST_BY_SLUG_QUERY,
        variables: { slug }
    })

    return {
        props: {
            post: data?.post ,
        },
        revalidate: 1
    };
}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: POSTS_SLUGS
    })

    const pathsData = []

    data?.posts?.nodes && data?.posts?.nodes.map((post) => {
        if (!isEmpty(post?.id)) {
            pathsData.push({ params: { slug: post?.id } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}






