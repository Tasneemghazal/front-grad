import React, {useContext } from "react";
import { SectionContext } from "../../context/SectionContextProvider.jsx";
import DynamicSection from "../../shared/DynamicSection.jsx";

export default function SupervisorTab1() {
  const { getSuperSections } = useContext(SectionContext);


  

  return (
    <>
    <DynamicSection getSections={getSuperSections}/>
    </>
  );
}
