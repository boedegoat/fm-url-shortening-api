import PrimaryButton from './PrimaryButton'

const BoostYourLink = () => {
  return (
    <div className='bg-boost-mobile lg:bg-boost-desktop bg-violet-dark text-white text-center p-5 py-20'>
      <h2 className='font-bold text-2xl lg:text-4xl'>Boost your links today</h2>
      <PrimaryButton as='a' href='#' className='max-w-max mx-auto px-8 mt-6'>
        Get Started
      </PrimaryButton>
    </div>
  )
}

export default BoostYourLink
