import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  test("renders app name", () => {
    render(<App />);

    expect(screen.getByRole("heading").textContent).toEqual(
      "react-app-template",
    );
  });
});
