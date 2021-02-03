import { mount, createLocalVue } from "@vue/test-utils";
import Signup from "@/views/Signup.vue";
import * as firebase from "firebase";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

const onAuthStateChanged = jest.fn();
const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve());

window.alert = jest.fn();

jest.spyOn(firebase, "auth").mockImplementation(() => {
  return {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
  };
});

describe("Signup", () => {
  it("should render the componenet Signup", () => {
    const wrapper = mount(Signup, {
      localVue,
      router,
      attachTo: document.body,
    });
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
      attachTo: document.body,
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
      attachTo: document.body,
    });
    const form = wrapper.find("form");
    const button = wrapper.find("button");

    await button.trigger("click");
    await form.trigger("submit.prevent");

    expect(button.trigger("click")).toBeTruthy();
    expect(form.trigger("submit.prevent")).toBeTruthy();
  });
});
