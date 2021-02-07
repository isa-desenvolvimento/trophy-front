import { shallowMount, createLocalVue } from "@vue/test-utils";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Trophy from "@/views/Trophy.vue";

import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
router.push({
  path: "/trophy",
  name: "trophy",
  params: { name: "teste", id: 1 }
});

localVue.component("font-awesome-icon", FontAwesomeIcon);

describe("Trophy", () => {
  it("should render the componenet Trophy", () => {
    const wrapper = shallowMount(Trophy, {
      localVue,
      router
    });

    wrapper.setData({ username: "" });

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
