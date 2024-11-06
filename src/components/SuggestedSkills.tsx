import { useContext } from "react";
import { LuPlus } from "react-icons/lu";
import { SkillsContext } from "../context/ContextProvider";
import { Skill } from "../@types/type";

const SuggestedSkills = () => {
  const skillsArray = ["HTML", "CSS", "Bootstrap", "TypeScript", "VueJs", "Angular", "NodeJs"];
  const { addSkill, skills } = useContext(SkillsContext);

  const handleAddChange = (skillName: string) => {
    const newSkill: Skill = {
      id: Math.random(), // Unique ID for simplicity
      name: skillName,
    };
    addSkill(newSkill);
  };

  // Check if the skill already exists in the context
  const isSkillAdded = (skillName: string) => {
    return skills.some((ele) => ele.name.toLowerCase() === skillName.toLowerCase());
  };

  return (
    <div className="suggested__skills">
      <h2 className="title text-darkBlue">Suggested Skills</h2>
      <ul className="skills__list">
        {skillsArray.map((skill, index) => (
          // Only render if the skill is not already added
          !isSkillAdded(skill) && (
            <li className="skill__item" key={index}>
              <LuPlus onClick={() => handleAddChange(skill)} color="#5A6793" fontSize={"1rem"} cursor={"pointer"} />
              {skill}
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default SuggestedSkills;
