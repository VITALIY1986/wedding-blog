import Layout from "../src/components/Layout";
import client from '../src/components/ApolloClient';
import PAGE_QUERY from "../src/queries/page";
import HeroCarousel from "../src/components/home/hero-carousel";
import { useAuth } from '../src/components/login-function/hooks'; 
import Navigation from "../src/components/navigation-chantarelle";
import profilePic from "../public/pattern_chant.png"

import Image from 'next/image'
export default function Home (props) {
  const { isLoggedIn } = useAuth();
    const { chantarelle,  heroCarousel} = props || {};

  

      const questionsAnswers = [
	
 
   
        {
          id: 4,
            title: "СТАТТІ",
            description: "Корисна інформація",
            linkarticle:"/posts/sittara"
           
        },
       
       
      
      ];
     
	return (

			<Layout>
        
                <HeroCarousel heroCarousel={heroCarousel}/>
          
                <div className="md:mx-10 lg:mx-20   lg:my-20  my-20">
              	
			
                <Navigation profilePic={profilePic} questionsAnswers={ questionsAnswers}/>
               
                </div>
	        </Layout>
		
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PAGE_QUERY,
	} );

	return {
		props: {
	     
	        heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};

