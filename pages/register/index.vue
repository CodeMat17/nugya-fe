<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-md mx-auto px-4 py-8">
      <div class="rounded-lg border overflow-hidden bg-white shadow-xl">
        <h1
          class="px-4 py-6 bg-green-500 text-xl font-semibold text-gray-200 tracking-wider"
        >
          REGISTER
        </h1>
        <div class="p-4">
          <form @submit.prevent="registerUser" class="space-y-4">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                v-model="username"
                placeholder="Your Name"
                class="w-full border rounded-md shadow-lg"
              />
            </div>
            <div>
              <label>Family Name</label>
              <input
                type="text"
                name="family"
                id="family"
                required
                v-model="family"
                placeholder="Your Family Name"
                class="w-full border rounded-md shadow-lg"
              />
            </div>
            <div>
              <label>Village Name</label>
              <input
                type="text"
                name="village"
                id="village"
                required
                v-model="village"
                placeholder="Your Village Name"
                class="w-full border rounded-md shadow-lg"
              />
            </div>
            <div>
              <label>Occupation</label>
              <input
                type="text"
                name="occupation"
                id="occupation"
                required
                v-model="occupation"
                placeholder="Your Occupation"
                class="w-full border rounded-md shadow-lg"
              />
            </div>
            <div>
              <label>Phone No.</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                v-model="phone"
                required
                placeholder="Your Phone No."
                class="w-full border rounded-md shadow-lg"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                required
                placeholder="Your Email"
                class="w-full border rounded-lg shadow-xl"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                v-model="password"
                placeholder="Your Password"
                class="w-full border rounded-lg shadow-xl"
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                v-model="confirmPassword"
                placeholder="Your Password"
                class="w-full border rounded-lg shadow-xl"
              />
            </div>
            <br />
            <button
              class="w-full tracking-wider font-semibold bg-green-500 py-3 rounded-md text-gray-200 focus:outline-none focus:shadow-outline"
            >
              <div class="flex items-center justify-center">
                <svg
                  v-if="registering"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <p>{{ registering ? "Please Wait..." : "REGISTER" }}</p>
              </div>
            </button>
            <h1
              v-if="error"
              class="p-4 rounded-lg text-center bg-red-500 text-gray-200 tracking-wider"
            >
              {{ error }}
            </h1>
            <p class="text-sm">
              Already registered?
              <n-link to="/login" class="text-blue-500">Login here</n-link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
    head() {
    return {
      title: "Register",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Register",
        },
      ],
    };
  },
  data() {
    return {
      username: "",
      family: "",
      village: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      occupation: "",
      error: "",
      passwordError: "",
      registering: false,
    };
  },
  methods: {
    async registerUser() {
      this.registering = true;
      this.error = "";
      if (this.confirmPassword === this.password) {
        try {
          const newUser = await this.$strapi.register({
            email: this.email,
            family: this.family,
            village: this.village,
            occupation: this.occupation,
            password: this.password,
            username: this.username,
            phone: this.phone,
            blocked: true,
          });
          console.log(newUser);
          if (newUser !== null) {
            this.email = "";
            this.family = "";
            this.village = "";
            this.occupation = "";
            this.password = "";
            this.confirmPassword = "";
            this.username = "";
            this.phone = "";
            this.registering = false;
            this.$toasted.success(
              "We have received your details. Now contact the Admins for verification and unblocking.",
              {
                position: "top-center",
                duration: 5000,
              }
            );
            this.error = "";
            this.$nuxt.$router.push("/login");
          }
        } catch (error) {
          this.registering = false;
          this.error = error.message;
        }
      } else {
        this.registering = false;
        this.passwordError =
          "Your Confirm Password does not match your Password.";
      }
    },
  },
};
</script>