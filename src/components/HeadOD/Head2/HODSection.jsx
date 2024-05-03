import  {useContext } from "react";
import { SectionContext } from "../../context/SectionContextProvider.jsx";
import DynamicSection2 from "../../shared/DynamicSection2.jsx";
const HODSection = () => {
  const { getSections,removeSection } = useContext(SectionContext);

  return (    
    <>
    <DynamicSection2 getSections={getSections} removeSection={removeSection} />
    </>
  )
}

export default HODSection
