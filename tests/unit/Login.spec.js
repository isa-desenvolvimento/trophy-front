import { mount, createLocalVue } from "@vue/test-utils";
import Login from "@/views/Login.vue";
import * as firebase from "firebase";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

const onAuthStateChanged = jest.fn();
const signInWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve("result of signInWithEmailAndPassword");
});

window.alert = jest.fn();
jest.spyOn(firebase, "auth").mockImplementation(() => {
  return {
    onAuthStateChanged,
    signInWithEmailAndPassword
  };
});

describe("Login", () => {
  it("should render the componenet Login", () => {
    const wrapper = mount(Login, {
      localVue,
      router,
      attachTo: document.body
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
      attachTo: document.body
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
      attachTo: document.body
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
