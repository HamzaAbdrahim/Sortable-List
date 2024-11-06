import React, { useContext } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { SkillsContext } from '../context/ContextProvider';

type SkillBoxProps = {
  skillName: string;
  skillId: number;  // Unique identifier for each skill
}

const SkillBox: React.FC<SkillBoxProps> = ({ skillName , skillId }) => {
  const { deleteSkill } = useContext(SkillsContext);

  return (
    <div className='skill__box'>
      <h3 className='skill__name'>{skillName}</h3>
      <VscChromeClose onClick={() =>deleteSkill(skillId)}  color="white" fontSize={"1rem"} cursor={"pointer"} />
    </div>
  );
};

export default SkillBox;
