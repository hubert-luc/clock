import { FC } from "react";

interface ClockViewProps {
  time: string;
}

export const ClockView: FC<ClockViewProps> = ({ time }) => {
  return (
    <p className="clock-view">
      Current time:&nbsp;
      <time dateTime={time}>{time}</time>
    </p>
  );
};
