import { mount, createLocalVue } from "@vue/test-utils";
import Login from "@/views/Login.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

describe("Login", () => {
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

  it("should render the componenet Login", () => {
    const wrapper = mount(Login, {
      localVue,
      router,
      store,
      attachTo: document.body,
      mounted: jest.fn(),
      data: jest.fn(() => {
        return { user: { email: "", password: "" } };
      })
    });

    const button = wrapper.find("button");
    const inputEmail = wrapper.find("#inp-login-email");
    const inputPassword = wrapper.find("#inp-login-password");

    expect(wrapper.exists()).toBeTruthy();
    expect(button.exists()).toBeTruthy();
    expect(inputEmail.exists()).toBeTruthy();
    expect(inputPassword.exists()).toBeTruthy();
    expect(wrapper.find("Sign In")).toBeTruthy();
  });

  it("should verify the content of inputs of form", async () => {
    const wrapper = mount(Login, {
      localVue,
      router,
      store,
      attachTo: document.body,
      data: jest.fn(() => {
        return { user: { email: "", password: "" } };
      })
    });
    const inputEmail = wrapper.find("#inp-login-email");
    const inputPassword = wrapper.find("#inp-login-password");

    await inputEmail.setValue("teste@gmail.com");
    await inputPassword.setValue("123456");

    expect(inputEmail.element.value).toBe("teste@gmail.com");
    expect(inputPassword.element.value).toBe("123456");
  });

  it("should verify submit form", async () => {
    const wrapper = mount(Login, {
      localVue,
      router,
      store,
      attachTo: document.body,
      data: jest.fn(() => {
        return { user: { email: "", password: "" } };
      })
    });

    const form = wrapper.find("form");
    const inputEmail = wrapper.find("#inp-login-email");
    const inputPassword = wrapper.find("#inp-login-password");

    await inputEmail.setValue("teste@gmail.com");
    await inputPassword.setValue("123456");
    await form.trigger("submit.prevent");

    expect(form.trigger("submit.prevent")).toBeTruthy();
  });
});
