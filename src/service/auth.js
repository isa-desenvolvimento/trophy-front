//import decode from "jwt-decode";
import request from "./request";

export const signIn = async user => {
  const response = await request("post", "/login", user);
  if (response.status === 200) {
    localStorage.setItem("token", response.data.jti);
    return response.data;
  }
};

export const signOut = () => {
  localStorage.removeItem("token");
};

export const isSignedIn = async () => {
  try {
    const token = (await localStorage.getItem("token")) || null;

    if (!token)
      // Se não existe o token no LocalStorage
      return false; // significa que o usuário não está assinado.

    // try {
    //   const { exp: expiration } = decode(token);
    //   const isExpired = !!expiration && Date.now() > expiration * 1000;

    //   if (isExpired)
    //     // Se o token tem uma data de expiração e
    //     return false; // essa data é menor que a atual o usuário
    //   // não está mais assinado.
    return true;
    // } catch (_) {
    //   // O "jwt-decode" lança erros pra tokens inválidos.
    //   return false; // Com um token inválido o usuário não está assinado.
    // }
  } catch (error) {
    console.warn(error);
  }
};
