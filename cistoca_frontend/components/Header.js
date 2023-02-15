import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import logo from '../public/cistoca_logo.svg';
import LoginModal from './LoginModal';

const Header = ({newPostBtn}) => {

	const [showMenu, setShowMenu] = useState(true);

	const disableScroll = () => {
		setShowMenu(!showMenu);

		if(showMenu) document.body.style.overflow = 'hidden';
		else if(!showMenu) document.body.style.overflow = 'visible';
	}

  return(
	<div className='header-main-div'>
		<div class="hamburger">
        <div class="nav-container">
					<input class="checkbox" type="checkbox" name="" id="hamburger-box" onChange={disableScroll}/>
					<div class="hamburger-lines">
						<span class="line line1"></span>
						<span class="line line2"></span>
						<span class="line line3"></span>
					</div>
          <div className='menu-items'>
						<Link href={'/'} className='header-link'>Naslovnica</Link>
						<Link href={'/ocistimoGrad'} className='header-link'>OčiSTimo Grad</Link>
						<Link href={'/service'} className='header-link'>Usluge</Link>
						<Link href={'/education'} className='header-link'>Edukacija</Link>
						<Link href={'/info'} className='header-link'>Informacije</Link>
					</div>
        </div>
				<div className='header-image-hamburger'>
					<Link href={'/'} className='flex align-middle'>
					<Image className='header-image' src={logo}/>
					</Link>
				</div>
				<div className='flex'>
					<LoginModal isNewPostBtn={newPostBtn}/>
				</div>
    </div>
		<div className='header-image-container'>
			<Link href={'/'} className='flex align-middle'>
			<Image className='header-image' src={logo}/>
			</Link>
		</div>
		<div className='header-links'>
			<Link href={'/'} className='header-link'>Naslovnica</Link>
			<Link href={'/ocistimoGrad'} className='header-link'>OčiSTimo Grad</Link>
			<Link href={'/service'} className='header-link'>Usluge</Link>
			<Link href={'/education'} className='header-link'>Edukacija</Link>
			<Link href={'/info'} className='header-link'>Informacije</Link>
			<LoginModal isNewPostBtn={newPostBtn}/>
		</div>
	</div>
  )
}

export default Header;