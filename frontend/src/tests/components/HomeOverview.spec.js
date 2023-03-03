import { fireEvent, render } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import HomeOverview from "../../components/templates/HomeOverview.vue";

describe("HomeOverview.vue", () => {
  it("renders component", async () => {
    const { getByText } = render(HomeOverview);
    getByText("Home");
  });

  it("creates pin on button click", async () => {
    const { getByTestId, emitted } = render(HomeOverview);

    await fireEvent.click(getByTestId("create"));
    expect(emitted()).toHaveProperty("click");
  });

  it("dismisses notification", async () => {
    const { getByTestId, emitted } = render(HomeOverview);

    await fireEvent.click(getByTestId("dismissed"));
    expect(emitted()).toHaveProperty("click");
  });

  it("displays first 14 pins", async () => {
    const { getAllByText } = render(HomeOverview);
    const card = getAllByText("Quick save and organize later");
    expect(card.length).toBe(14);
  });

  it("renders Search component", async () => {
    const { getByTestId } = render(HomeOverview);
    getByTestId("search");
  });
});
