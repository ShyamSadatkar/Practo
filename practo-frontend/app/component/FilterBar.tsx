"use client";

import Dropdown, { DropdownOption } from "./DropDown";

export default function FilterBar() {
  const handleSelect = (option: DropdownOption) => {
    console.log("Selected:", option);
  };

  return (
    <div className="flex gap-4 flex-wrap bg-[#28328c] p-4 rounded mt-5">
      <Dropdown
        label="Gender"
        options={[
          { value: "male", label: "Male Doctor" },
          { value: "female", label: "Female Doctor" }
        ]}
        onSelect={handleSelect}
      />

      <Dropdown
        label="Patient Stories"
        options={[
          { value: "10", label: "10+ Patient Stories" },
          { value: "60", label: "60+ Patient Stories" },
          { value: "210", label: "210+ Patient Stories" }
        ]}
        onSelect={handleSelect}
      />

      <Dropdown
        label="Experience"
        options={[
          { value: "5", label: "5+ Years of experience" },
          { value: "10", label: "10+ Years of experience" },
          { value: "15", label: "15+ Years of experience" },
          { value: "20", label: "20+ Years of experience" }
        ]}
        onSelect={handleSelect}
      />

      <button className="border px-3 py-2 rounded bg-white shadow">
        All Filters
      </button>

      <Dropdown
        label="Sort By"
        options={[
          { value: "stories", label: "Number of patient stories - High to Low" },
          { value: "experience", label: "Experience - High to Low" },
          { value: "fee_desc", label: "Consultation Fee - High to Low" },
          { value: "fee_asc", label: "Consultation Fee - Low to High" }
        ]}
        onSelect={handleSelect}
      />
    </div>
  );
}
