"use client";
import React, { useEffect, useState } from 'react'
import InitialSelectedValue from '../component/InitialSelectedValue'
import FilterBar from '../component/FilterBar';
import ClinicCard from '../component/ClinicCard';

interface Practitioner {
  id: number;
  name: string;
  specialty: string;
  location: string;
  experience: number;
  consultationFee: number;
  rating: number;
}

const Doctor = () => {
  const [location, setLocation] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [doctors, setDoctors] = useState<Practitioner[]>([])

  // Capture initial values from URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const loc = params.get('location') || ''
      const spec = params.get('specialty') || ''
      setLocation(loc)
      setSpecialty(spec)
    }
  }, [])

  // Fetch doctors when location/specialty change
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!location && !specialty) {
        setDoctors([])
        return
      }

      try {
        const res = await fetch('http://localhost:8080/v0/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ location, specialty }),
        })
        const data = await res.json()
        setDoctors(data || [])
      } catch (error) {
        console.error('Error fetching doctors:', error)
        setDoctors([])
      }
    }

    fetchSuggestions()
  }, [location, specialty])

  if (doctors.length === 0) return null

  return (
    <div>
      <InitialSelectedValue initialLocation={location} initialSpecialty={specialty} />
      <FilterBar />
      {doctors.map((doctor) => (
        <ClinicCard
          key={doctor.id}
          name={doctor.name}
          specialty={doctor.specialty}
          location={doctor.location}
          experience={doctor.experience}
          consultationFee={doctor.consultationFee}
          rating={doctor.rating}
        />
      ))}
    </div>
  )
}

export default Doctor
