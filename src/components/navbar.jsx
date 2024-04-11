import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3 className="logo">
                <img src="./images/llp.png" alt="" />
            </h3>
			<nav ref={navRef}>
				<Link to={'/'}>
				<a href="/#" onClick={showNavbar}>Home</a>
				</Link>
				<Link to={'/battery-replacement'}>
				<a href="/#" onClick={showNavbar}>Battery services</a>
				</Link>
				<Link to={'/about'}>
				<a href="/#" onClick={showNavbar}>About Us</a>
				</Link>
				<Link to={'/jumpstart'}>
				<a href="/#" onClick={showNavbar}>Jump start</a>
				</Link>
				<Link to={'/Battery-Change-in-UAE'}>
				<a href="/#" onClick={showNavbar}>Battery Change in UAE</a>
				</Link>
				
				<Link to={'/contact'}>
				<a href="/#" onClick={showNavbar}>Contact Us</a>
				</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>

			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}


export default Navbar;