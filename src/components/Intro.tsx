import PrimaryButton from './PrimaryButton'
import Wrapper from './Wrapper'
import IllustrationWorking from 'images/illustration-working.svg'

const Intro = () => {
  return (
    <div className='lg:mt-12'>
      <Wrapper className='text-center flex flex-col lg:flex-row-reverse lg:text-left'>
        <div className='-mr-52 pl-5 flex-shrink-0'>
          <img src={IllustrationWorking} alt='illustration working' />
        </div>
        <div className='mt-10 lg:pr-32'>
          <h1 className='font-bold text-4xl lg:text-7xl text-violet-so-dark'>
            More than just shorter links
          </h1>
          <p className='mt-3 text-violet-grayish lg:text-xl lg:mt-5'>
            Build your brand’s recognition and get detailed insights on how your links are
            performing.
          </p>
          <PrimaryButton
            as='a'
            href='#'
            className='mt-7 lg:mt-10 max-w-[200px] mx-auto lg:mx-0 text-center'
          >
            Get Started
          </PrimaryButton>
        </div>
      </Wrapper>
    </div>
  )
}

export default Intro
