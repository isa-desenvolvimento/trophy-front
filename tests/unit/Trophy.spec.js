import { shallowMount, createLocalVue } from "@vue/test-utils";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Trophy from "@/views/Trophy.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

const router = new VueRouter();
router.push({
  path: "/trophy",
  name: "trophy",
  params: { name: "teste", id: 1 }
});

localVue.component("font-awesome-icon", FontAwesomeIcon);

describe("Trophy", () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        loggedIn: false
      },
      mutations: {
        isLoged: jest.fn()
      }
    });
  });
  it("should render the componenet Trophy", () => {
    const wrapper = shallowMount(Trophy, {
      localVue,
      router,
      store,
      attachTo: document.body,
      mocks: {
        $t: msg => msg
      }
    });

    const trophies = wrapper.find("#trophies");
    const avatar = wrapper.find("#avatar");
    const points = wrapper.find("#points");
    const nameUser = wrapper.find("#title-username");

    expect(nameUser.exists()).toBeTruthy();
    expect(nameUser.text()).toEqual("teste");
    expect(trophies.exists()).toBeTruthy();
    expect(points.exists()).toBeTruthy();
    expect(avatar.exists()).toBeTruthy();
  });
});
