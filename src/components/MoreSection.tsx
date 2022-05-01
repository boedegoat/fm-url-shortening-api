import AdvanceStatistics from './AdvanceStatistics'
import LinkShorter from './LinkShorter'
import Wrapper from './Wrapper'

const MoreSection = () => {
  return (
    <div className='bg-violet-light mt-36 pb-20'>
      <Wrapper>
        <LinkShorter />
        <AdvanceStatistics />
      </Wrapper>
    </div>
  )
}

export default MoreSection
