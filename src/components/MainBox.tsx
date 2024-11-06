import SkillsSection from "./SkillsSection"
import SuggestedSkills from "./SuggestedSkills"

const MainBox = () => {
  return (
    <div className="Main__box">
        <div className="wrapper">
            <SkillsSection />
            <SuggestedSkills />
        </div>
    </div>
  )
}

export default MainBox