import { useCallback, useEffect, useState } from "react";

interface Props {
  listOfText: string[];
  speedFactor: number;
  /**
   * Indicates the duration in milliseconds of the changing period.
   */
  durationPeriod: number;
}
export default function DynamicText({
  listOfText,
  speedFactor,
  durationPeriod,
}: Props) {
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * listOfText.length);
    setnewName(listOfText[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(
      shuffle,
      Math.floor(speedFactor * durationPeriod)
    );
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return <>{newName}</>;
}
