import { shallowMount, createLocalVue } from "@vue/test-utils";
const localVue = createLocalVue();
localVue.component("font-awesome-icon", FontAwesomeIcon);
import Trophies from "@/components/Trophies.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  BRONZE,
  SILVER,
  DIAMOND,
  BRONZE_COLOR,
  SILVER_COLOR,
  DIAMOND_COLOR,
} from "@/util/constants";

describe("Trophies", () => {
  it("should render the componenet Trophies", () => {
    const wrapper = shallowMount(Trophies, {
      propsData: {
        categories: ["Moedas", "Matou", "Morreu"],
        levels: [BRONZE, SILVER, DIAMOND],
        colors: [BRONZE_COLOR, SILVER_COLOR, DIAMOND_COLOR],
      },
      localVue,
    });

    expect(wrapper.props().categories).toEqual(["Moedas", "Matou", "Morreu"]);
    expect(wrapper.props().levels).toEqual([BRONZE, SILVER, DIAMOND]);
    expect(wrapper.props().colors).toEqual([
      BRONZE_COLOR,
      SILVER_COLOR,
      DIAMOND_COLOR,
    ]);
  });
});
