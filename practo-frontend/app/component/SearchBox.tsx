'use client'
import { useEffect, useState } from 'react'

interface Props {
    lookupkey: string, 
  value: string
  onSelect: (value: string) => void
}

const SearchBox = ({lookupkey, value, onSelect }: Props) => {
const [suggestions, setSuggestions] = useState<string[]>([])

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (value.length < 2) {
        setSuggestions([])
        return
      }

      try {
        const res = await fetch('http://localhost:8080/v0/lookup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key: lookupkey, value: value}),
        })
        const data = await res.json()
        setSuggestions(data || [])
      } catch (error) {
        console.error('Error fetching dropdown:', error)
        setSuggestions([])
      }
    }

    fetchSuggestions()
  }, [value])

  if (suggestions.length === 0) return null

  return (
    <ul className="absolute top-full left-0 w-full bg-white text-black border shadow z-50 rounded mt-1">
    {suggestions.map((item, index) => (
      <li
        key={index}
        onClick={() => onSelect(item)}
        className="px-4 py-2 text-gray-800 hover:bg-black-300 cursor-pointer"
      >
        {item}
      </li>
    ))}
  </ul>
  )
}

export default SearchBox
