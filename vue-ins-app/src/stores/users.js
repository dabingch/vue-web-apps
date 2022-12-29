import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("users", () => {
  const user = ref(null);
  const errorMessage = ref("");
  const loading = ref(false);
  const loadingUser = ref(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async (credentials) => {
    // Extract user input
    const { email, password } = credentials;
    if (!validateEmail(email)) {
      return (errorMessage.value = "Email is invalid");
    }

    if (!password.length) {
      return (errorMessage.value = "Password cannot be empty");
    }

    loading.value = true;

    // Sign in to the supabase
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      loading.value = false;
      return (errorMessage.value = error.message);
    }

    // Check if user exists in supabase postgreSQL
    const { data: existingUser } = await supabase
      .from("users")
      .select()
      .eq("email", email)
      .single();

    console.log(existingUser);

    // Update state
    user.value = {
      id: existingUser.id,
      email: existingUser.email,
      username: existingUser.username,
    };

    // Reset
    loading.value = false;
    errorMessage.value = "";
  };

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

    loading.value = true;
    // Check if user already exists
    const { data } = await supabase
      .from("users")
      .select()
      .eq("username", username)
      .single();

    if (data) {
      loading.value = false;
      return (errorMessage.value = "Username already exists");
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      loading.value = false;
      return (errorMessage.value = error.message);
    }

    errorMessage.value = "";

    // Insert user in supabase postgreSQL
    await supabase.from("users").insert({
      username,
      email,
    });

    // Get the new user from supabase postgreSQL
    const { data: newUser } = await supabase
      .from("users")
      .select()
      .eq("email", email)
      .single();

    user.value = {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username,
    };

    loading.value = false;
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    user.value = null;
  };

  const getUser = async () => {
    // Get current user from supabase
    loadingUser.value = true;
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      loadingUser.value = false;
      return (user.value = null);
    }

    const { data: existingUser } = await supabase
      .from("users")
      .select()
      .eq("email", data.user.email)
      .single();

    user.value = {
      id: existingUser.id,
      username: existingUser.username,
      email: existingUser.email,
    };

    console.log(user.value);

    loadingUser.value = false;
  };

  const clearErrorMessage = () => {
    errorMessage.value = "";
  };

  return {
    user,
    errorMessage,
    loading,
    loadingUser,
    handleLogin,
    handleSignup,
    handleLogout,
    getUser,
    clearErrorMessage,
  };
});
