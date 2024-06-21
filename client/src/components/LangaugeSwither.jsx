import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="language-selection text-black ">
      <select
        onChange={changeLanguage}
        value={i18n.language}
        className="rounded-lg"
      >
        <option value="en" className=" text-black">
          English
        </option>
        <option value="hi" className=" text-black">
          Hindi
        </option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
