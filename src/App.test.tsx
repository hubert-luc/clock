import { render, screen } from "./tests/test-utils";
import App from "./App";

jest.mock("./utils/getCurrentTimestamp.ts", () => ({
  // Wed Nov 30 2022 21:09:13 GMT+0000
  getCurrentTimestamp: () => 1669842553132,
}));

test("renders application clock with correct time", () => {
  render(<App />);

  const clockEl = screen.getByText(/Current time/i);
  expect(clockEl).toHaveTextContent("21:09:13");
});

test("renders application header", () => {
  render(<App />);

  const titleElement = screen.getByRole("heading", {
    name: "The best FREE clock",
  });
  expect(titleElement).toBeInTheDocument();
});
