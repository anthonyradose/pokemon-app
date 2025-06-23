import { useState } from "react";

const useVersionToggle = (initialVersion = true) => {
  const [showBlue, setShowBlue] = useState(initialVersion);

  const toggleToBlue = () => setShowBlue(true);
  const toggleToRed = () => setShowBlue(false);
  const toggle = () => setShowBlue(!showBlue);

  return {
    showBlue,
    toggleToBlue,
    toggleToRed,
    toggle,
  };
};

export default useVersionToggle; 