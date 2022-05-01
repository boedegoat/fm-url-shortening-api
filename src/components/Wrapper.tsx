import cn from 'utils/classNames'

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Wrapper = ({ className, children, ...props }: DivProps) => {
  return (
    <div {...props} className={cn('container mx-auto px-5', className ?? '')}>
      {children}
    </div>
  )
}

export default Wrapper
