import { convertTimestampToTime } from "./formatTime";

test("returns correct time for positive timestamp", () => {
  // Wed Nov 30 2022 21:59:18 GMT+0000
  const timestamp = 1669845558132;

  const formattedTime = convertTimestampToTime(timestamp);

  expect(formattedTime).toBe("21:59:18");
});

test("returns correct time for negative timestamp", () => {
  // Thu Feb 01 1917 02:00:41 GMT+0000
  const timestamp = -1669845558132;

  const formattedTime = convertTimestampToTime(timestamp);

  expect(formattedTime).toBe("02:00:41");
});

test("returns correct time for timestamp 0", () => {
  // Thu Jan 01 1970 00:00:00 GMT+0000
  const timestamp = 0;

  const formattedTime = convertTimestampToTime(timestamp);

  expect(formattedTime).toBe("00:00:00");
});
