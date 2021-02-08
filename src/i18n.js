import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

const pt = {
  SIGNIN_TITLE: "Sign in",
  SIGNIN: "Sing in",
  SIGNUP: "Sign up",
  LOGOUT: "Sair",
  MSG_ERROR: "👾 OPS! Falha no engano. Tente novamente 😬",
  MSG_SUCCESS: "BOA!!!! 🥳",
  GOLD: "Ouro",
  PLATINUM: "Platina",
  DIAMOND: "Diamante",
  BRONZE: "Bronze",
  SILVER: "Prata",
  NOOB: "Noob",
  COINS: "Moedas",
  DIED: "Morreu",
  KILLED: "Matou",
  NAME: "Nome",
  EMAIL: "E-mail",
  PASSWORD: "Senha",
  ALREADY_REGISTERED: "Já registrado?",
  FORGOT_PASSWORD: "Recuperar senha ",
  RESET_PASSWORD: "Alterar senha"
};

const messages = {
  pt
};

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: "pt", // set locale
  messages // set locale messages
});
