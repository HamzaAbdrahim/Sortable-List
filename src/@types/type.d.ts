export type Skill = {
    id: number;
    name: string;
  }
  export type SkillContextType = {
    skills: Skill[];
    addSkill: (skill: Skill) => void;
    deleteSkill: (id: number) => void;
  };