import React, { useState, useEffect } from 'react'
function debounce(func, wait = 10, immediate = true) {
  let timeout
  return function() {
    const context = this
    const args = arguments
    const later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(window.scrollY)
  useEffect(
    () => {
      const handleScroll = () => setScrollY(window.scrollY)
      window.addEventListener('scroll', debounce(handleScroll))
      return () => window.removeEventListener('scroll', debounce(handleScroll))
    },
    [debounce] // If you remove this, things go 🍌🍌🍌
  )

  return scrollY
}
