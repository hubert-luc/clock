import { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app-state/hooks";
import { convertTimestampToTime } from "../../utils/formatTime";
import { updateCurrentTime } from "./clockSlice";
import { ClockView } from "./ClockView";

const Clock: FC = () => {
  const dispatch = useAppDispatch();
  const currentTimestamp = useAppSelector((state) => state.clock.timestamp);

  const currentTime = convertTimestampToTime(currentTimestamp);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCurrentTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return <ClockView time={currentTime} />;
};

export default Clock;
