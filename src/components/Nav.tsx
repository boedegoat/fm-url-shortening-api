import useClickOutside from 'hooks/useClickOutside'
import capitalize from 'utils/capitalize'
import cn from 'utils/classNames'
import PrimaryButton from './PrimaryButton'
import Wrapper from './Wrapper'
import Logo from 'images/logo.svg'

const navLinks = ['features', 'pricing', 'resources']

const Nav = () => {
  return (
    <nav className='relative'>
      <Wrapper className='flex items-center justify-between py-8 pb-5'>
        {/* logo */}
        <div className='flex'>
          <a href='#'>
            <img src={Logo} alt='Shortly logo' />
          </a>
          <div className='hidden lg:flex items-center ml-10 space-x-6'>
            {navLinks.map((link) => (
              <a
                key={link}
                href='#'
                className='text-violet-grayish hover:text-violet-so-dark text-sm'
              >
                {capitalize(link)}
              </a>
            ))}
          </div>
        </div>
        <div className='hidden lg:flex items-center space-x-6 text-sm'>
          <button className='text-violet-grayish hover:text-violet-so-dark'>Login</button>
          <PrimaryButton className='mt-0 px-6'>Sign Up</PrimaryButton>
        </div>
        <MobileNav />
      </Wrapper>
    </nav>
  )
}

export default Nav

const MobileNav = () => {
  const [navRef, open, toggleOpen] = useClickOutside<HTMLDivElement>()

  return (
    <div className='block lg:hidden'>
      {/* hamburger menu */}
      <button className='w-7 h-6 space-y-1.5' onClick={toggleOpen}>
        <div className='h-[3px] bg-violet-grayish rounded-full'></div>
        <div className='h-[3px] bg-violet-grayish rounded-full'></div>
        <div className='h-[3px] bg-violet-grayish rounded-full'></div>
      </button>
      {/* NavLinks (mobile) */}
      <div className='absolute w-full left-0 top-full'>
        <Wrapper>
          <div
            ref={navRef}
            className={cn(
              open
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-4 pointer-events-none',
              'transition-all select-none ease-out rounded-xl space-y-7 text-center p-8 bg-violet-dark text-white font-bold divide-y divide-violet-grayish shadow-lg'
            )}
          >
            <div className='flex flex-col space-y-6'>
              {navLinks.map((link) => (
                <a key={link} href='#'>
                  {capitalize(link)}
                </a>
              ))}
            </div>
            <div className='flex flex-col py-3'>
              <button className='py-3'>Login</button>
              <PrimaryButton>Sign Up</PrimaryButton>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  )
}
