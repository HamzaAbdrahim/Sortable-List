// context/todoContext.tsx
import * as React from 'react';
import { Skill, SkillContextType } from '../@types/type';

// Default values for context
const defaultContextValue: SkillContextType = {
  skills: [],
  addSkill: () => {},
  deleteSkill: () => {}
};

// Create the context with default values to avoid null
export const SkillsContext = React.createContext<SkillContextType>(defaultContextValue);

const SkillsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [skills, setSkills] = React.useState<Skill[]>([]); // State for managing skills

  // Add a new skill
  const addSkill = (skill: Skill) => {
  // Only add the skill if it does not already exist in the skills array
  if (!skills.some((ele) => ele.name.toLowerCase() === skill.name.toLowerCase())) {
    setSkills((prevSkills) => [...prevSkills, skill]);
  }
  };

  // Delete a skill
  const deleteSkill = (id: number) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
  };

  return (
    <SkillsContext.Provider value={{ skills, addSkill, deleteSkill }}>
      {children}
    </SkillsContext.Provider>
  );
};

export default SkillsProvider;
