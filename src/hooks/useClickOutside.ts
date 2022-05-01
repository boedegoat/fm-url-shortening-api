import { useEffect, useRef, useState } from 'react'

const useClickOutside = <T = HTMLElement>() => {
  const [open, setOpen] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const { current: el } = ref
    const handleClick = (e: MouseEvent) => {
      // @ts-ignore
      if (open && el && !el.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [open])

  const toggler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setOpen(!open)
    e.stopPropagation()
  }

  return [ref, open, toggler] as [
    React.RefObject<T>,
    boolean,
    React.MouseEventHandler<HTMLButtonElement>
  ]
}

export default useClickOutside
