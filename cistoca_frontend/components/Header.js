import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/cistoca_logo.svg';
import LoginModal from './LoginModal';

const Header = () => {
  return(
	<div className='flex flex-row justify-between'>
		<Link href={'/'} className='flex align-middle'>
			<Image className='ml-10 h-auto' src={logo}/>
		</Link>
		<div className='flex flex-row justify-evenly bg-[#9DEC8F] rounded-bl-full'>
			<NavbarLink path={'/servicePage'} linkName={'Usluge'}></NavbarLink>
			<NavbarLink path={'/educationPage'} linkName={'Edukacija'}></NavbarLink>
			<NavbarLink path={'/infoPage'} linkName={'Informacije'}></NavbarLink>
			<LoginModal/>
		</div>
	</div>
  )
}

const NavbarLink = ({path, linkName}) => {
	return(
	<div className="m-16 relative group">
		<Link href={path}>{linkName}</Link>
		<span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#1D7110] transition-all group-hover:w-full"></span>
	</div>
	)
}

export default Header;