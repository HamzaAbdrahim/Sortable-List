import MainBox from "../components/MainBox"
import SkillsProvider from "../context/ContextProvider"

const AppLayout = () => {
  return (
    <SkillsProvider>
    <div className="container">
      <section>
      <h1 className="app__titel">
        select your top 5 tech skills
      </h1>
      <MainBox />
      </section>
    </div>
    </SkillsProvider>
   
  )
}

export default AppLayout