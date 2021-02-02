import { shallowMount } from "@vue/test-utils";
import ForgotPassword from "@/views/ForgotPassword.vue";
import * as firebase from "firebase";

const onAuthStateChanged = jest.fn();
const sendPasswordResetEmail = jest.fn(() => Promise.resolve());

window.alert = jest.fn();
jest.spyOn(firebase, "auth").mockImplementation(() => {
  return {
    onAuthStateChanged,
    sendPasswordResetEmail,
  };
});

describe("ForgotPassword", () => {
  it("should render the componenet ForgotPassword", () => {
    const wrapper = shallowMount(ForgotPassword);
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
    const wrapper = shallowMount(ForgotPassword);
    const inputEmail = wrapper.find("#inp-forgetPassword-email");

    await inputEmail.setValue("teste@gmail.com");
    expect(inputEmail.element.value).toEqual("teste@gmail.com");
  });

  it("should verify submit form", async () => {
    const wrapper = shallowMount(ForgotPassword);
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
