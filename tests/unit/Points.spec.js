import { shallowMount, createLocalVue } from "@vue/test-utils";
const localVue = createLocalVue();
localVue.component("font-awesome-icon", FontAwesomeIcon);
import Points from "@/components/Points.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

describe("Points", () => {
  it("should render the componenet Points", () => {
    const wrapper = shallowMount(Points, {
      localVue,
      mocks: {
        $t: msg => msg
      }
    });

    expect(wrapper.find("#points-coins").exists()).toBeTruthy();
    expect(wrapper.find("#points-killed").exists()).toBeTruthy();
    expect(wrapper.find("#points-died").exists()).toBeTruthy();
    expect(wrapper.find("#icn-heart-points").exists()).toBeTruthy();
    expect(wrapper.find("#icn-pastafarianism-points").exists()).toBeTruthy();
    expect(wrapper.find("#icn-circle-points").exists()).toBeTruthy();
  });
});
