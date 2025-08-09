import Image from "next/image";
import React from "react";

interface ClinicCardProps {
    name: string;
    specialty: string;
    location: string;
    experience: number;
    consultationFee: number;
    rating: number;
  }

const ClinicCard = (props: ClinicCardProps) => {

  return (
    <div className="border-b border-gray-200">
      <div className="border-t border-gray-200 flex flex-col sm:flex-row justify-between p-4 bg-white shadow-sm">
        
        {/* Left Section */}
        <div className="flex">
          {/* Clinic Image */}
          <div className="flex flex-col items-center">
            <div className="rounded-full overflow-hidden border border-gray-300">
              <Image
                src="/doctor.jpg"
                alt={props.name}
                width={140}
                height={140}
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="ml-4">
            <h2 className="text-xl font-bold text-blue-700">{props.name}</h2>
            <div className="text-gray-600 text-sm">
              <div className="underline cursor-pointer">{props.specialty}</div>
              <div className="mt-1">{props.experience}</div>
            </div>

            <div className="mt-3">
              <div className="font-bold">{props.location}</div>
              <div className="mt-1">
                <span className="font-bold">{props.consultationFee}</span>
                <span className="ml-2">Consultation Fees</span>
              </div>
              <div className="mt-3 flex items-center">
                <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded flex items-center mr-3">
                  ❤️ {props.rating}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex items-center mt-4 sm:mt-0">
          <button className="capitalize font-bold rounded-lg bg-blue-400 text-white px-4 py-2 hover:bg-blue-900">
            Book Clinic Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicCard;
