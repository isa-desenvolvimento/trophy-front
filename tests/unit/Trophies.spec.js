import { shallowMount, createLocalVue } from "@vue/test-utils";
import Trophies from "@/components/Trophies.vue";
import {
  BRONZE,
  SILVER,
  DIAMOND,
  BRONZE_COLOR,
  SILVER_COLOR,
  DIAMOND_COLOR,
} from "@/util/constants";

jest.mock("@fortawesome/fontawesome-svg-core", () => "");
jest.mock("@fortawesome/free-solid-svg-icons", () => "<div></div>");

describe("Trophies", () => {
  it("should render the componenet Trophies", () => {
    const wrapper = shallowMount(Trophies, {
      propsData: {
        categories: "['Moedas', 'Matou', 'Morreu']",
        levels: [BRONZE, SILVER, DIAMOND],
        colors: [BRONZE_COLOR, SILVER_COLOR, DIAMOND_COLOR],
      },
    });
    console.log(wrapper.props().categories);

    // expect(wrapper.props().categories).toBe("['Moedas', 'Matou', 'Morreu']");
    // expect(wrapper.props().levels).toBe("['Bronze', 'Silver', 'Diamond']");
    // expect(wrapper.props().colors).toBe("['#9c5221', '#b5b5bd', '#cfe4ee']");

    expect(wrapper.find("Moedas").exists()).toBeTruthy();
    expect(wrapper.find("Matou").exists()).toBeTruthy();
    expect(wrapper.find("Morreu").exists()).toBeTruthy();
    expect(wrapper.find("Bronze").exists()).toBeTruthy();
    expect(wrapper.find("Silver").exists()).toBeTruthy();
    expect(wrapper.find("Diamond").exists()).toBeTruthy();
  });
});
