import { useContext, useState } from "react";
import { SkillsContext } from "../context/ContextProvider";
import { Skill } from "../@types/type"; // Import Skill type if needed

const InputSearch = () => {
  const { addSkill } = useContext(SkillsContext);
  const [inputValue, setInputValue] = useState<string>("");

  // Handle adding skill on "Enter" key press
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim()) {
      const newSkill: Skill = {
        id: Date.now(), // Generate a unique ID (you can change this to another unique identifier logic if needed)
        name: inputValue,
      };
      addSkill(newSkill); // Add the skill using context function
      setInputValue(""); // Clear input field
    }
  };

  return (
    <div className="d-flex">
      <input
        type="text"
        className="input__search flex-1"
        placeholder="Add Skill"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default InputSearch;
