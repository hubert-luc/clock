import { render, RenderOptions } from "@testing-library/react";
import { FC, ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../app-state/store";

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
