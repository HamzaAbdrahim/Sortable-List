import React, { useContext } from "react";
import Select, { SingleValue } from "react-select";
import { SkillsContext } from "../context/ContextProvider";
import { Skill } from "../@types/type";

const CustomSelect: React.FC = () => {
  const { addSkill } = useContext(SkillsContext);
  
  const options = [
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'bootstrap', label: 'Bootstrap' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'vuejs', label: 'VueJs' },
    { value: 'angular', label: 'Angular' },
    { value: 'nodejs', label: 'NodeJs' }
  ];

  // Custom styles for the react-select component
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: '100%',
      padding: '5px',
      borderRadius: '8px',
      border: 'none',
      boxShadow: 'none',
      backgroundColor: "#E5E7EB",
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: '8px',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#4a90e2' : state.isFocused ? '#f0f8ff' : null,
      color: state.isSelected ? '#fff' : '#0D2167',
      cursor: 'pointer',
      padding: '10px 15px',
      borderRadius: '5px',
      '&:hover': {
        backgroundColor: '#e6f4ff',
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#9CA3AF",
    }),
  };

  // Handle skill selection
  const handleSelectChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    if (selectedOption) {
      const newSkill: Skill = {
        id: Math.random(), // Unique ID for simplicity
        name: selectedOption.label,
      };
      addSkill(newSkill);       
    }
  };

  return (
    <div>
      <Select
        options={options}
        styles={customStyles}
        onChange={handleSelectChange} // Call handler on selection
        placeholder="Select a skill"
      />
    </div>
  );
};

export default CustomSelect;
