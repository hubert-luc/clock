export const convertTimestampToTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  const timeText = date.toTimeString().split(" ")[0];

  return timeText;
};
