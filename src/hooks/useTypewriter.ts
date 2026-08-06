import { useEffect, useState } from 'react'

interface TypewriterOptions {
  typeSpeed?: number
  deleteSpeed?: number
  holdDelay?: number
}

/** Cycles through `words`, typing and deleting each one character by character. */
export function useTypewriter(
  words: string[],
  { typeSpeed = 80, deleteSpeed = 40, holdDelay = 1800 }: TypewriterOptions = {},
) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]

    let delay: number
    if (!deleting && text === word) {
      delay = holdDelay
    } else {
      delay = deleting ? deleteSpeed : typeSpeed
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === word) {
          setDeleting(true)
        } else {
          setText(word.slice(0, text.length + 1))
        }
      } else if (text === '') {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        setText(word.slice(0, text.length - 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, holdDelay])

  return text
}
