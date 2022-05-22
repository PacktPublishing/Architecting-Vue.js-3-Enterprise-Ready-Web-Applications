<template>
  <form @submit.prevent="login">
    <TextField
      v-model="email"
      required
      type="email"
      class="mb-6"
      name="email"
      label="Email Address"
      placeholder="Enter your email address"
    />
    <TextField
      v-model="password"
      required
      minlength="6"
      class="mb-6"
      type="password"
      maxlength="50"
      placeholder="Enter your full password"
      label="Password"
    ></TextField>
    <div class="flex justify-between mb-6">
      <CheckField id="remember" v-model="remember">Remember me</CheckField>
    </div>
    <div class="flex justify-center my-9 w-full">
      <Button>Sign In</Button>
    </div>
  </form>
</template>

<script>
import { LOGIN_USER } from "../../graphql";

export default {
  setup(props) {
    const email = ref("");
    const password = ref("");
    const remember = ref(false);

    const { mutate: loginUser } = useMutation(LOGIN_USER, () => ({
      variables: {
        email: email,
        password: password,
        remember,
      },
    }));

    const login = () => {
      const user = loginUser();
      if (user) {
        // Save State and Redirect to Dashboard
      }
    };

    return {
      login,
      email,
      password,
      remember,
    };
  },
};
</script>
