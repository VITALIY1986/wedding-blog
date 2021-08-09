import {Facebook, Instagram, Twitter, Youtube} from "./icons";

const Footer = () => (
	<div className="footer bg-gray-800 p-6 text-white">
		<div className="container mx-auto">
			<div className="footer-text flex-none md:flex items-center justify-between">
				<p>© 4Prof by next.js</p>
				<p className="text-gray">Профессиональная косметика</p>
				<span className="text-gray">КОНТАКТЫ</span>
			</div>
			<ul className="social-links mt-8 flex align-center">
				<li><a href="https://www.facebook.com/4ProfUkraine" className="fa fa-facebook" target="_blank"><Facebook/></a></li>
				<li className="ml-2 mt-1"><a href="#" target="_blank"><Twitter/></a></li>
				<li className="ml-2 mt-1"><a href="https://www.youtube.com/channel/UC3BBKd1UUUtXMjY4uL_NZ4g" className="fa fa-youtube" target="_blank"><Youtube/></a></li>
				<li className="ml-2"><a href="https://www.instagram.com/4profukraine/" className="fa fa-instagram" target="_blank"><Instagram/></a></li>
			</ul>
		</div>
	</div>
);

export default Footer;
