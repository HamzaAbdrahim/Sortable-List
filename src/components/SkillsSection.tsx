import { useContext } from "react";
import { SkillsContext } from "../context/ContextProvider";
import CustomSelect from "./CustomSelect";
import InputSearch from "./InputSearch";
import SkillBox from "./SkillBox";

const SkillsSection = () => {
  const { skills } = useContext(SkillsContext);

  return (
    <div className="skills__section">
      <div style={{justifyContent:skills.length === 0 ? "center" : ""}} className="scrollable__box">
        {skills.length === 0 ? (
          <h1 className="empty__titel">is empty</h1>
        ) : (
          skills.map((skill) => (
            <SkillBox skillId={skill.id} key={skill.id} skillName={skill.name} />
          ))
        )}
      </div>
      <InputSearch />
      <CustomSelect />
    </div>
  );
};

export default SkillsSection;
