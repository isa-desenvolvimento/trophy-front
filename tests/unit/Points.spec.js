import { shallowMount } from "@vue/test-utils";
import Points from "@/components/Points.vue";

jest.mock("@fortawesome/fontawesome-svg-core", () => "");
jest.mock("@fortawesome/free-solid-svg-icons", () => "<div></div>");

describe("Points", () => {
  it("should render the componenet Points", () => {
    const wrapper = shallowMount(Points);

    expect(wrapper.find("#points-coins").exists()).toBeTruthy();
    expect(wrapper.find("#points-killed").exists()).toBeTruthy();
    expect(wrapper.find("#points-died").exists()).toBeTruthy();
    expect(wrapper.find("#icn-heart-points").exists()).toBeTruthy();
    expect(wrapper.find("#icn-pastafarianism-points").exists()).toBeTruthy();
    expect(wrapper.find("#icn-circle-points").exists()).toBeTruthy();
  });
});
