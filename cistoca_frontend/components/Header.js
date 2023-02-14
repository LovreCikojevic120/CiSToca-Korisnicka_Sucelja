import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/cistoca_logo.svg';
import LoginModal from './LoginModal';

const Header = ({newPostBtn}) => {

  return(
	<div className='header-main-div'>
		<div class="hamburger">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
						<Link href={'/'} className='flex align-middle'>
						<Image className='w-auto' src={logo}/>
						</Link>
          </div>
          <div className='menu-items'>
						<Link href={'/ocistimoGrad'} className=''>OčiSTimo Grad</Link>
						<Link href={'/service'} className=''>Usluge</Link>
						<Link href={'/education'} className=''>Edukacija</Link>
						<Link href={'/info'} className=''>Informacije</Link>
					</div>
        </div>
      </div> 
		<div className='header-image-container'>
			<Link href={'/'} className='flex align-middle'>
			<Image className='header-image' src={logo}/>
			</Link>
		</div>
		<div className='header-links'>
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