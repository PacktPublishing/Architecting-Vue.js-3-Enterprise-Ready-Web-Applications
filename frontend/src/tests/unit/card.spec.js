import { render, fireEvent } from "@testing-library/vue";
import { expect, test } from "vitest";
import Card from "../../components/molecules/Card.vue";

test("displays a card with success status", async () => {
  const { getByTestId } = render(Card, {
    props: {
      status: "success",
    },
  });
  const card = getByTestId("pin");
  expect(card).toBeDefined();
});

test("displays a card with error status", async () => {
  const { getByText } = render(Card, {
    props: {
      status: "error",
    },
  });
  const card = getByText("An error occurred");
  expect(card.textContent).toEqual("An error occurred");
});

test("displays a card with loading status", async () => {
  const { getByText } = render(Card, {
    props: {
      status: "loading",
    },
  });
  const card = getByText("Loading photo...");
  expect(card.textContent).toEqual("Loading photo...");
});

test("clicks a create pin button", async () => {
  const { getByTestId, emitted } = render(Card);

  await fireEvent.click(getByTestId("create_pin"));
  expect(emitted()).toHaveProperty("click");
});
