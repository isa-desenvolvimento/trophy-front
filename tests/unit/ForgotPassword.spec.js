import { shallowMount, createLocalVue } from "@vue/test-utils";
import ForgotPassword from "@/views/ForgotPassword.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isError: false
  },
  mutations: {
    isError: jest.fn()
  }
});

describe("ForgotPassword", () => {
  it("should render the componenet ForgotPassword", () => {
    const wrapper = shallowMount(ForgotPassword, {
      attachTo: document.body,
      localVue,
      store,
      mocks: {
        $t: msg => msg
      }
    });
    const button = wrapper.find("button");
    const inputEmail = wrapper.find("#inp-forgetPassword-email");
    const title = wrapper.find("h3");

    expect(wrapper.exists()).toBeTruthy();
    expect(button.exists()).toBeTruthy();
    expect(inputEmail.exists()).toBeTruthy();
    expect(title.exists()).toBeTruthy();
    expect(wrapper.find("Forgot Password")).toBeTruthy();
  });

  it("should verify content input of form", async () => {
    const wrapper = shallowMount(ForgotPassword, {
      localVue,
      store,
      attachTo: document.body,
      mocks: {
        $t: msg => msg
      }
    });
    const inputEmail = wrapper.find("#inp-forgetPassword-email");

    await inputEmail.setValue("teste@gmail.com");
    expect(inputEmail.element.value).toEqual("teste@gmail.com");
  });

  it("should verify submit form", async () => {
    const wrapper = shallowMount(ForgotPassword, {
      localVue,
      store,
      attachTo: document.body,
      mocks: {
        $t: msg => msg
      }
    });
    const form = wrapper.find("form");
    const button = wrapper.find("button");
    const inputEmail = wrapper.find("#inp-forgetPassword-email");

    await inputEmail.setValue("teste@gmail.com");
    await button.trigger("click");
    await form.trigger("submit.prevent");

    expect(button.trigger("click")).toBeTruthy();
    expect(form.trigger("submit.prevent")).toBeTruthy();
  });
});
