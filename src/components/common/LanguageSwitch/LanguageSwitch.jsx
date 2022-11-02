import styles from "./language-switch.module.scss";
import Button from "../Button";
import { useState } from "react";

export default function LanguageSwitch() {
  const [isActive, setIsActive] = useState("");

  const languageList = ["RU", "UA"];

  return (
    <>
      <ul className={styles.language_switch}>
        {languageList.map((language, index) => (
          <Button
            id={index}
            inner={language}
            handleClick={(index) => setIsActive(index)}
            activeBtn={isActive.target}
          />
        ))}
      </ul>
      <select
        className={styles.language_switch_for_mobile}
        name="switch-language"
        id="switch-language"
      >
        {languageList.map((language) => (
          <option value={language}>{language}</option>
        ))}
      </select>
    </>
  );
}
