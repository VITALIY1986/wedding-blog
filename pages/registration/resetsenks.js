import Layout from "../../src/components/Layout";
import Reset from "../../src/components/login/reset";

function App() {

	return (
		<Layout>	
			<div class="relative h-screen overflow-x-hidden bg-gray-100 px-6 ">
				<div class="h-screen flex justify-center items-center">
				<div>   <h2 className='text-xl mb-6'>Дякуэмо за реєстрацію</h2><p>Ваш запис буде активовано після отримання нами копії диплому косметолога на електронну пошту info@4prof.com.ua</p><br/><p>Відповідь прийде на вашу електронну пошту</p></div>
				</div>
			</div>
		</Layout>
	);
}
export default App;