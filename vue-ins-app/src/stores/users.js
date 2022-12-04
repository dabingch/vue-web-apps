import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("users", () => {
  const user = ref(null);
  const errorMessage = ref("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () => {};

  const handleSignup = async (credentials) => {
    const { email, password, username } = credentials;

    if (username.length < 4) {
      return (errorMessage.value = "Username must be at least 4 characters");
    }

    if (!validateEmail(email)) {
      return (errorMessage.value = "Email is invalid");
    }

    if (password.length < 6) {
      return (errorMessage.value = "Password must be at least 6 characters");
    }

    errorMessage.value = "";

    // Check if user already exists
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return (errorMessage.value = error.message);
    }

    // Insert user in supabase postgreSQL
    const res = await supabase.from("users").insert({
      username,
      email,
    });

    console.log(res);
  };

  const handleLogout = () => {};

  const getUser = () => {};

  return {
    user,
    errorMessage,
    handleLogin,
    handleSignup,
    handleLogout,
    getUser,
  };
});
