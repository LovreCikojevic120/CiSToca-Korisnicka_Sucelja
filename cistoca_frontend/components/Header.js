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
						<Image className='header-image' src={logo}/>
          </div>
          <div className='menu-items'>
						<li>
							<Link href={'/ocistimoGradPage'} className='header-link'>OčiSTimo Grad</Link>
						</li>
						<li>
							<Link href={'/educationPage'} className='header-link'>Edukacija</Link>
						</li>
						<li>
							<Link href={'/servicePage'} className='header-link'>Usluge</Link>
						</li>
						<li>
							<Link href={'/infoPage'} className='header-link-hamburger'>Informacije</Link>
						</li>
					</div>
        </div>
      </div> 
		<Link href={'/'} className='flex align-middle'>
		<div className='header-image-container'>
			<Image className='header-image' src={logo}/>
		</div>
		</Link>
		<div className='header-links'>
			<Link href={'/ocistimoGradPage'} className='header-link'>OčiSTimo Grad</Link>
			<Link href={'/servicePage'} className='header-link'>Usluge</Link>
			<Link href={'/educationPage'} className='header-link'>Edukacija</Link>
			<Link href={'/infoPage'} className='header-link'>Informacije</Link>
			<LoginModal isNewPostBtn={newPostBtn}/>
		</div>
	</div>
  )
}

export default Header;