import Layout from "../../src/components/Layout";
import Particles from "react-tsparticles";
import Login from "../../src/components/login";

function App() {
	const particlesInit = (main) => {
		console.log(main);
	
		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	  };
	
	  const particlesLoaded = (container) => {
		console.log(container);
	  };
	return (
	<Layout>	
	{/*	<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
		fpsLimit: 60,
		fullScreen: { enable: true },
		particles: {
		  number: {
			value: 50
		  },
		  shape: {
			type: "circle"
		  },
		  opacity: {
			value: 0.5
		  },
		  
		  size: {
			value: 400,
			random: {
			  enable: true,
			  minimumValue: 200
			}
		  },
		  move: {
			enable: true,
			speed: 3,
			direction: "top",
			outModes: {
			  default: "out",
			  top: "destroy",
			  bottom: "none"
			}
		  }
		},
		interactivity: {
		  detectsOn: "canvas",
		  events: {
			resize: true
		  }
		},
		style: {
		  filter: "blur(50px)"
		},
		detectRetina: true,
		themes: [
		  {
			name: "light",
			default: {
			  value: true,
			  mode: "light"
			},
			options: {
			  background: {
				color: "#f7f8ef"
			  },
			  particles: {
				color: {
				  value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
				}
			  }
			}
		  },
		  {
			name: "dark",
			default: {
			  value: true,
			  mode: "dark"
			},
			options: {
			  background: {
				color: "#080710"
			  },
			  particles: {
				color: {
				  value: ["#004f74", "#5f5800", "#245100", "#7d0000", "#810c00"]
				}
			  }
			}
		  }
		],
		emitters: {
		  direction: "top",
		  position: {
			x: 50,
			y: 150
		  },
		  rate: {
			delay: 0.2,
			quantity: 2
		  },
		  size: {
			width: 100,
			height: 0
		  }
		}
	  
	 
	
		  
      }}
    />		*/}		
	
	
	<div class="relative h-screen overflow-x-hidden bg-gray-100 px-3 ">
	
		<div class="h-screen flex justify-center items-center">
		
	<Login></Login>
	
	</div>
		{/*<div class="absolute -bottom-40 lg:-bottom-0 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 z-0"></div>
		<div class="absolute -bottom-40 lg:-bottom-0 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8 z-0"></div>
		<div class="absolute -top-40 lg:-top-0  -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	<div class="absolute -top-40 lg:-top-0 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>*/}
	</div>
	
			
	</Layout>
	);
}




export default App;


{/*<div className="absolute top-0 z-50 p-3 text-4xl  "><a href="/"><h1 className="font-bold text-white text-center hover:text-purple-400 cursor-pointer">Назад в магазме</h1></a></div> 
	
	
	
	
		 <form class="bg-white">
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Добро пожаловать!</h1>
			<p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" />
      </div>
				<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
					<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Username" />
      </div>
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
      </div>
							<button type="submit" class="block w-full bg-blue mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
							<span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
		</form>
	
	
	
	
	
	
	
	
	
	
	
	
	
	*/}
	