import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import * as firebase from "firebase";

const onAuthStateChanged = jest.fn();
const signOut = jest.fn(() => Promise.resolve());

jest.spyOn(firebase, "auth").mockImplementation(() => {
  return {
    onAuthStateChanged,
    signOut,
  };
});

describe("Home", () => {
  it("should render the componenet Home", () => {
    const wrapper = shallowMount(Home);
    const button = wrapper.find("button");

    expect(wrapper.exists()).toBeTruthy();
    expect(button.exists()).toBeTruthy();
    expect(wrapper.find("Welcome")).toBeTruthy();
  });

  it("should verify the action", async () => {
    const wrapper = shallowMount(Home);
    const button = wrapper.find("button");
    await button.trigger("click");

    expect(button.trigger("click")).toBeTruthy();
  });
});
