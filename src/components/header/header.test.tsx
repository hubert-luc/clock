import { render, screen } from "@testing-library/react";
import Header from "./header";

test("renders header with correct title", () => {
  const headerTitle = "headerTitle";
  render(<Header title={headerTitle} />);

  const headerTitleEl = screen.getByRole("heading");
  expect(headerTitleEl).toHaveTextContent(headerTitle);
});
