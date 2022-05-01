import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import cn from 'utils/classNames'
import PrimaryButton from './PrimaryButton'

interface Result {
  originalLink: string
  shortLink: string
}

const LinkShorter = () => {
  const [link, setLink] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const linkInputRef = useRef<HTMLInputElement>(null)

  const [results, setResults] = useState<Result[]>([])

  const shortenLink: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setError('')
    if (!link) {
      linkInputRef.current?.focus()
      setError('Please add a link')
      return
    }

    let formToast
    try {
      setLoading(true)
      formToast = toast.loading('loading')
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      const data = await res.json()
      if (!res.ok) {
        throw data
      }
      const { result } = data
      setResults((results) => [
        ...results,
        { originalLink: result.original_link, shortLink: result.full_short_link },
      ])
      console.log(data)
      toast.success('short link generated', { id: formToast })
      setLink('')
    } catch (err: any) {
      const errMessage = err?.error || err || 'Something went wrong'
      toast.error('error', { id: formToast })
      linkInputRef.current?.focus()
      setError(errMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='-translate-y-[75px]'>
      <form
        onSubmit={shortenLink}
        className='bg-shorten-mobile lg:bg-shorten-desktop bg-violet-dark p-5 lg:p-10 rounded-lg flex flex-col lg:items-start lg:flex-row'
      >
        <label className='block flex-[4] lg:mr-6'>
          <input
            ref={linkInputRef}
            value={link}
            disabled={loading}
            onChange={(e) => setLink(e.target.value)}
            placeholder='Shorten a link here...'
            type='text'
            className={cn(
              'w-full bg-white rounded-md px-4 py-3 focus:outline-none focus:ring',
              error
                ? 'focus:ring-red placeholder-red'
                : 'focus:ring-violet-400 focus:ring-opacity-50'
            )}
          />
          {error && <span className='block text-xs text-red italic mt-1'>{error}</span>}
        </label>
        <PrimaryButton type='submit' disabled={loading} className='rounded mt-4 lg:mt-0 flex-[1]'>
          Shorten It!
        </PrimaryButton>
      </form>
      {/* results */}
      <div className='mt-6 space-y-6'>
        {results.map((result, idx) => (
          <ShortLinkItem {...{ result, idx }} />
        ))}
      </div>
    </section>
  )
}

export default LinkShorter

const ShortLinkItem = ({ result, idx }: { result: Result; idx: number }) => {
  const [copied, setCopied] = useState(false)

  const copyLink = (shortLink: string) => {
    navigator.clipboard.writeText(shortLink)
    toast.success('link copied')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3500)
  }

  return (
    <div
      key={idx}
      className='bg-white rounded-lg divide-y divide-gray flex flex-col lg:flex-row lg:divide-y-0 lg:items-center'
    >
      <div className='p-4 lg:p-6 truncate text-violet-so-dark'>{result.originalLink}</div>
      <div className='p-4 lg:p-6 flex flex-col lg:flex-row lg:items-center lg:ml-auto'>
        <div className='text-cyan lg:mr-5'>{result.shortLink}</div>
        <PrimaryButton
          onClick={() => copyLink(result.shortLink)}
          className={cn(
            'w-full lg:mt-0 rounded lg:px-6',
            copied ? 'bg-violet-dark hover:bg-violet-so-dark' : ''
          )}
        >
          {copied ? 'Copied' : 'Copy'}
        </PrimaryButton>
      </div>
    </div>
  )
}
