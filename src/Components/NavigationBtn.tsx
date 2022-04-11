import { EventHandler } from "react";
import { useMediaQuery } from "usehooks-ts";

type Props = {
  disabled: boolean;
  navigate: string;
  onClick: () => void;
  className?: string;
};

const NavigationBtn = ({
  className = "",
  onClick,
  disabled,
  navigate,
}: Props) => {
  const matchesMedia = useMediaQuery("(min-width: 768px)");
  const btnValue = navigate === "next" ? "n" : "p";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}>
      {matchesMedia ? navigate : btnValue}
    </button>
  );
};

export default NavigationBtn;
