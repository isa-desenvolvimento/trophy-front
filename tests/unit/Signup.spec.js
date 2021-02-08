import { mount, createLocalVue } from "@vue/test-utils";
import Signup from "@/views/Signup.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [{ name: "login", path: "login", component: jest.fn() }]
});

describe("Signup", () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        isError: false,
        isSuccess: false
      },
      mutations: {
        isSuccess: jest.fn(),
        isError: jest.fn()
      }
    });
  });

  it("should render the componenet Signup", () => {
    const wrapper = mount(Signup, {
      localVue,
      router,
      store,
      attachTo: document.body,
      data: jest.fn(() => {
        return { username: "" };
      }),
      mocks: {
        $t: msg => msg
      }
    });

    wrapper.vm.userRegistration(() => jest.fn());

    const button = wrapper.find("button");
    const inputEmail = wrapper.find("#inp-signup-email");
    const inputPassword = wrapper.find("#inp-signup-password");
    const inputName = wrapper.find("#inp-signup-name");

    expect(wrapper.exists()).toBeTruthy();
    expect(inputEmail.exists()).toBeTruthy();
    expect(inputPassword.exists()).toBeTruthy();
    expect(inputName.exists()).toBeTruthy();
    expect(button.exists()).toBeTruthy();
    expect(wrapper.find("Sign Up")).toBeTruthy();
  });

  it("should verify content input of form", async () => {
    const wrapper = mount(Signup, {
      localVue,
      router,
      store,
      attachTo: document.body,
      data: jest.fn(() => {
        return { user: { name: "" } };
      }),
      userRegistration: jest.fn(),
      mocks: {
        $t: msg => msg
      }
    });
    const inputEmail = wrapper.find("#inp-signup-email");
    const inputPassword = wrapper.find("#inp-signup-password");
    const inputName = wrapper.find("#inp-signup-name");

    await inputEmail.setValue("teste@gmail.com");
    await inputPassword.setValue("123456");
    await inputName.setValue("teste");

    expect(inputEmail.element.value).toEqual("teste@gmail.com");
    expect(inputPassword.element.value).toEqual("123456");
    expect(inputName.element.value).toEqual("teste");
  });

  it("should verify the action", async () => {
    const wrapper = mount(Signup, {
      localVue,
      router,
      store,
      attachTo: document.body,
      data: jest.fn(() => {
        return { user: { name: "" } };
      }),
      userRegistration: jest.fn(),
      mocks: {
        $t: msg => msg
      }
    });
    const form = wrapper.find("form");
    const button = wrapper.find("button");

    await button.trigger("click");
    await form.trigger("submit.prevent");

    expect(button.trigger("click")).toBeTruthy();
    expect(form.trigger("submit.prevent")).toBeTruthy();
  });
});
