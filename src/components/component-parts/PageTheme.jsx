import React, { useState } from "react";
import { useBetween } from "use-between";
import { ReactComponent as Moon } from "../../images/cloud-moon-fill.svg";
import { Switch } from "@mui/material";

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

  // Keeps state of theme on page refresh :)
  localStorage.setItem("theme", theme);
  document.body.className = theme;

  return { theme, checkedState, toggleStates };
};
export const useSharedTheme = () => useBetween(useThemeStates);

export function ControlTheme() {
  const { checkedState, toggleStates } = useSharedTheme();

  return (
    <Switch
      name="switch"
      onChange={toggleStates}
      checked={checkedState}
      checkedIcon={
        <Moon
          style={{ height: 30, width: 20, transform: "translateY(-8px)" }}
        />
      }
      height={25}
      width={50}
    />
  );
}
