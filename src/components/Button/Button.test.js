import Button from ".";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("check button renders", () => {
  const { getByTestId } = render(
    <Button label="Dummy button" mode="primary" size="large" />
  );
  const button = getByTestId("button");

  expect(button.textContent).toBe("Dummy button");
  expect(button.className).toBe("button--primary button--large");
});
