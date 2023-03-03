import { render } from "@testing-library/vue";
import { test } from "vitest";
import Button from "../../components/atoms/Button.vue";

test("mounted a button with custom label", async () => {
  // The render method returns a collection of utilities to query your component.
  const { getByText } = render(Button, {
    props: {
      label: "Test",
    },
  });

  // getByText returns the first matching node for the provided text, and

  // Check if button is render with Label from props
  getByText("Test");
});
