import { ClockView } from "./ClockView";
import { render, screen } from "@testing-library/react";

test("renders time correctly", () => {
  const time = "21:22:22";
  render(<ClockView time={time} />);

  const clockEl = screen.getByText(/Current time/i);
  expect(clockEl).toHaveTextContent(time);
});
