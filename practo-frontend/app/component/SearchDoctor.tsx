'use client'
import { useState } from "react";
import SearchBox from './SearchBox'

// Detect router type
let useNextRouter: any;
try {
  // Try App Router
  useNextRouter = require('next/navigation').useRouter;
} catch {
  // Fallback to Pages Router
  useNextRouter = require('next/router').useRouter;
}

const SearchDoctor = () => {
  const [lookupkey, setKey] = useState('')
  const [location, setLocation] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)
  const [showSpecialtyDropdown, setShowSpecialtyDropdown] = useState(false)

  const router = useNextRouter();

  const tryNavigate = (loc: string, spec: string) => {
    if (loc && spec) {
      router.push(`/doctor?location=${encodeURIComponent(loc)}&specialty=${encodeURIComponent(spec)}`);
    }
  };

  return (
    <section className="bg-blue-600 text-white py-16 px-4 text-center bg-[url(/background.svg)] h-[70vh] my-2">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Your home for health</h1>
      <div className="text-xl font-semibold mb-6">Find and Book</div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 justify-center">
        
        {/* Location input */}
        <div className="relative flex items-center bg-white text-black rounded px-3 py-2 flex-1">
          <span className="mr-2 text-gray-600">📍</span>
          <input
            id="location"
            type="text"
            placeholder="Search location"
            className="w-full outline-none"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value)
              setKey('location')
              setShowLocationDropdown(true)
            }}
          />
          {showLocationDropdown && (
            <SearchBox
              lookupkey={lookupkey}
              value={location}
              onSelect={(val) => {
                setLocation(val)
                setShowLocationDropdown(false)
                tryNavigate(val, specialty)
              }}
            />
          )}
        </div>

        {/* Specialty input */}
        <div className=" relative flex items-center bg-white text-black rounded px-3 py-2 flex-1">
          <span className="mr-2 text-gray-600">🔍</span>
          <input
            id="specialty"
            type="text"
            placeholder="Search doctors, clinics, hospitals, etc."
            className="w-full outline-none"
            value={specialty}
            onChange={(e) => {
              setSpecialty(e.target.value)
              setKey('specialty')
              setShowSpecialtyDropdown(true)
            }}
          />
          {showSpecialtyDropdown && (
            <SearchBox
              lookupkey={lookupkey}
              value={specialty}
              onSelect={(val) => {
                setSpecialty(val)
                setShowSpecialtyDropdown(false)
                tryNavigate(location, val)
              }}
            />
          )}
        </div>
      </div>

      {/* Popular searches */}
      <div className="mt-6 text-sm">
        <span className="font-semibold">Popular searches:</span>{' '}
        <a href="/" className="underline mx-1">Dermatologist</a>
        <a href="/" className="underline mx-1">Pediatrician</a>
        <a href="/" className="underline mx-1">Gynecologist</a>
        <span className="ml-1 underline cursor-pointer">Others ▼</span>
      </div>
    </section>
  );
};

export default SearchDoctor;
