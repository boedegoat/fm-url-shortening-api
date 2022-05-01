import cn from 'utils/classNames'

type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const PrimaryButton = ({
  children,
  className,
  as: asEl,
  ...props
}: (ButtonProps | LinkProps) & {
  as?: string
}) => {
  const styles = cn(
    'block font-bold py-3 mt-3 bg-cyan hover:bg-cyan-hover rounded-full text-white',
    className ?? ''
  )

  if (asEl === 'a') {
    return (
      <a {...(props as LinkProps)} className={styles}>
        {children}
      </a>
    )
  }
  return (
    <button {...(props as ButtonProps)} className={styles}>
      {children}
    </button>
  )
}

export default PrimaryButton
