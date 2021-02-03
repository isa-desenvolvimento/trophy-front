import { shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card", () => {
  it("should render the componenet Card", () => {
    const wrapper = shallowMount(Card);
    const cardWrap = wrapper.find("#card-wrap");
    const card = wrapper.find("#card");
    const cardBg = wrapper.find("#card-bg");
    const cardInfo = wrapper.find("#card-info");

    expect(cardWrap.exists()).toBeTruthy();
    expect(card.exists()).toBeTruthy();
    expect(cardBg.exists()).toBeTruthy();
    expect(cardInfo.exists()).toBeTruthy();
  });
});
