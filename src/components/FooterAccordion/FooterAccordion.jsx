import styles from "./footer-accordion.module.scss";
import { accordionLeftList, accordionMiddleList } from "../../data/accordion";
import RightList from "../FooterList/RightList";
import AccordionItem from "../common/AccordionItem";
import { useState } from "react";

export default function FooterAccordion() {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  const arrayForAccordion = [...accordionLeftList, ...accordionMiddleList];

  function mappingArray(arrayForMap) {
    return arrayForMap.map((listItem, index) => (
      <AccordionItem
        key={index}
        listItem={listItem}
        onToggle={() => handleToggle(index)}
        active={clicked === index}
      />
    ));
  }

  return (
    <>
      <ul className={styles.accordion}>{mappingArray(arrayForAccordion)}</ul>

      <RightList />
    </>
  );
}
