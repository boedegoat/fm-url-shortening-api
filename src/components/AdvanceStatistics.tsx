import cn from 'utils/classNames'

const data = [
  {
    title: 'Brand Recognition',
    description:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    icon: 'icon-brand-recognition.svg',
  },
  {
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    icon: 'icon-detailed-records.svg',
  },
  {
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    icon: 'icon-fully-customizable.svg',
  },
]

const AdvanceStatistics = () => {
  return (
    <section className='text-center lg:mt-5'>
      <h2 className='font-bold text-3xl lg:text-5xl'>Advance Statistics</h2>
      <p className='text-violet-grayish mt-5 lg:max-w-lg mx-auto lg:text-lg'>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
      <div className='relative mt-28'>
        <div className='block lg:hidden h-full w-2 bg-cyan absolute left-1/2 -translate-x-1/2'></div>
        <div className='hidden lg:block w-full h-2 bg-cyan absolute top-1/2 -translate-y-1/2'></div>
        <div className='space-y-28 relative lg:flex lg:space-y-0 lg:space-x-10 lg:h-[300px]'>
          {data.map((item, idx) => (
            <div
              key={item.title}
              className={cn(
                'relative bg-white p-6 pt-0 rounded-md z-10 lg:text-left',
                idx == 0 ? 'lg:self-start' : idx == 1 ? 'lg:self-center' : 'lg:self-end'
              )}
            >
              <div className='bg-violet-dark p-5 rounded-full w-max mx-auto -translate-y-8 lg:mx-0'>
                <img
                  className='w-8 h-8'
                  src={'/src/images/' + item.icon}
                  alt={`${item.title} icon`}
                />
              </div>
              <h3 className='font-bold text-2xl'>{item.title}</h3>
              <p className='text-sm text-violet-grayish mt-3 lg:text-base'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdvanceStatistics
