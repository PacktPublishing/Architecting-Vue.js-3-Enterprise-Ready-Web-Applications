<template>
  <form @submit.prevent="register">
    <TextField
      v-model="name"
      required
      type="text"
      class="mb-6"
      name="name"
      label="Name"
      placeholder="Enter your name"
    />
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
      placeholder="Enter your password"
      label="Password"
    ></TextField>

    <div class="flex justify-center my-9 w-full">
      <Button>Register</Button>
    </div>
  </form>
</template>

<script>
import { REGISTER } from "../../graphql";

export default {
  setup(props) {
    const email = ref("");
    const password = ref("");
    const name = ref("");

    const { mutate: registerUser } = useMutation(REGISTER, () => ({
      variables: {
        email: email,
        password: password,
        name,
      },
    }));

    const register = () => {
      const user = registerUser();
      if (user) {
        // Save State and Redirect to Login
      }
    };

    return {
      register,
      email,
      password,
      name,
    };
  },
};
</script>
