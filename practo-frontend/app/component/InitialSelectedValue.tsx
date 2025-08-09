'use client'
import { useState, useEffect } from 'react'

interface PlaceholderBarProps {
  initialLocation: string
  initialSpecialty: string
}

const InitialSelectedValue = ({ initialLocation, initialSpecialty }: PlaceholderBarProps) => {
  const [location, setLocation] = useState(initialLocation || '')
  const [specialty, setSpecialty] = useState(initialSpecialty || '')
  
  return (
    <div className="bg-white p-3 shadow rounded-lg flex flex-col md:flex-row gap-3 items-center mt-3">
      {/* Location Input */}
      <div className="flex items-center border border-gray-300 rounded px-2 py-1 w-full md:w-1/2">
      <span className="mr-2 text-gray-600">📍</span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search location"
          className="flex-1 outline-none text-sm"
        />
      </div>

      {/* Specialty Input */}
      <div className="flex items-center border border-gray-300 rounded px-2 py-1 w-full md:w-1/2">
      <span className="mr-2 text-gray-600">🔍</span>
        <input
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          placeholder="Search doctors, clinics, hospitals, etc."
          className="flex-1 outline-none text-sm"
        />
      </div>
    </div>
  )
}

export default InitialSelectedValue



