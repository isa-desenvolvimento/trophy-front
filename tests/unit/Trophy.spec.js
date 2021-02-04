import { shallowMount, createLocalVue } from "@vue/test-utils";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const localVue = createLocalVue();
localVue.component("font-awesome-icon", FontAwesomeIcon);
import Trophy from "@/views/Trophy.vue";
import * as firebase from "firebase";

const onAuthStateChanged = jest.fn();
const signOut = jest.fn(() => Promise.resolve());

jest.spyOn(firebase, "auth").mockImplementation(() => {
  return {
    onAuthStateChanged,
    signOut
  };
});

describe("Trophy", () => {
  it("should render the componenet Trophy", () => {
    const wrapper = shallowMount(Trophy, {
      localVue
    });
    const trophies = wrapper.find("#trophies");
    const avatar = wrapper.find("#avatar");
    const points = wrapper.find("#points");
    const nameUser = wrapper.find("#name-user");

    expect(nameUser.exists()).toBeTruthy();
    expect(trophies.exists()).toBeTruthy();
    expect(points.exists()).toBeTruthy();
    expect(avatar.exists()).toBeTruthy();
  });
});
