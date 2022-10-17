import React, { useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import {useBetween} from "use-between"

import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

const useThemeStates = () => {
  var storedTheme = localStorage.getItem("theme");
  var [theme, setTheme] = useState(storedTheme ?? "light"); //Default to light, may want to try and get the default browser mode here instead?
  var [checkedState, setState] = useState(theme === "dark");

  const toggleStates = () => {
    setState(!checkedState);
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };
  useEffect(() => {
    // Keeps state of theme on page refresh :)
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  });

  return {theme, checkedState, toggleStates}
}
export const useSharedTheme = () => useBetween(useThemeStates);

export function ControlTheme() {

  const {checkedState, toggleStates} = useSharedTheme();

  return (
    <ReactSwitch
      name="switch"
      onChange={toggleStates}
      checked={checkedState}
      uncheckedIcon={
        <FontAwesomeIcon
          icon={faMoon}
          color="white"
          transform={"shrink right-3"}
        />
      }
      checkedIcon={
        <FontAwesomeIcon icon={faCloudMoon} transform={"shrink right-3"} />
      }
      height={25}
      width={50}
    />
  );
}
