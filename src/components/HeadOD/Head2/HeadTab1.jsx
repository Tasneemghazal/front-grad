import React, {useContext } from "react";
import { SectionContext } from "../../context/SectionContextProvider.jsx";
import DynamicSection from "../../shared/DynamicSection.jsx";

export default function HeadTab1() {
  const { getSections } = useContext(SectionContext);

  return (
    <>
    <DynamicSection getSections={getSections}/>
    </>
  );
}
