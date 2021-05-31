<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-md mx-auto px-4 py-8">
      <!-- create -->
      <div
        v-if="part1"
        class="rounded-lg border overflow-hidden bg-white shadow-xl"
      >
        <h1
          class="px-4 py-6 bg-green-500 text-xl font-semibold text-gray-200 tracking-wider"
        >
          PART 1 - Identification
        </h1>
        <div class="p-4">
          <form @submit.prevent="createUser" class="space-y-4">
            <div>
              <label class="labelTag">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                v-model="name"
                placeholder="Enter Your Full Name"
                class="inputTag w-full border rounded-md shadow-lg"
              />
            </div>
            <div>
              <label class="labelTag">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                required
                placeholder="Enter Your Email"
                class="inputTag w-full border rounded-md shadow-lg"
              />
            </div>
            <div>
              <label class="labelTag">Phone No.</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                v-model="phone"
                placeholder="Enter Your Phone No."
                class="inputTag w-full border rounded-md shadow-lg"
              />
            </div>
            <div>
              <label class="labelTag">Family Name</label>
              <input
                type="text"
                name="family"
                id="family"
                required
                v-model="family"
                placeholder="Enter Your Family Name"
                class="inputTag w-full border rounded-md shadow-lg"
              />
            </div>
            <div>
              <label class="labelTag">Village Name</label>
              <input
                type="text"
                name="village"
                id="village"
                required
                v-model="village"
                placeholder="Enter Your Village Name"
                class="inputTag w-full border rounded-md shadow-lg"
              />
            </div>
            <div>
              <label class="labelTag">Occupation</label>
              <input
                type="text"
                name="occupation"
                id="occupation"
                required
                v-model="occupation"
                placeholder="Enter Your Occupation"
                class="inputTag w-full border rounded-md shadow-lg"
              />
            </div>
            <br />
            <button
              class="w-full tracking-wider font-semibold bg-green-500 py-3 rounded-md text-gray-200 focus:outline-none focus:shadow-outline"
            >
              <div class="flex items-center justify-center">
                <svg
                  v-if="creating"
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
                <p>{{ creating ? "Please Wait..." : "IDENTIFY" }}</p>
              </div>
            </button>
            <p
              v-if="createError"
              class="p-4 rounded-lg text-center bg-red-500 text-gray-200 tracking-wider"
            >
              {{ createError }}
            </p>
            <p class="text-sm">
              Already registered?
              <n-link to="/login" class="text-blue-500">Login here</n-link>
            </p>
          </form>
        </div>
      </div>
      <!-- register -->
      <div
        v-if="part2"
        class="rounded-lg border overflow-hidden bg-white shadow-xl"
      >
        <h1
          class="px-4 py-6 bg-green-500 text-xl font-semibold text-gray-200 tracking-wider"
        >
          PART 2 - Registration
        </h1>
        <div class="p-4">
          <form @submit.prevent="registerUser" class="space-y-4">
            <div>
              <label>Username</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                v-model="name"
                disabled
                placeholder="Your Username"
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
                disabled
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
            <p
              v-if="error"
              class="p-4 rounded-lg text-center bg-red-500 text-gray-200 tracking-wider"
            >
              {{ error }}
            </p>
            <p
              v-if="passwordError"
              class="p-4 rounded-lg text-center bg-red-500 text-gray-200 tracking-wider"
            >
              {{ passwordError }}
            </p>
            <p class="text-sm">
              Go back to
              <button @click="partOne" class="text-blue-500">PART 1</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
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
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
      createError: "",
      passwordError: "",
      name: "",
      family: "",
      phone: "",
      village: "",
      occupation: "",
      registering: false,
      creating: false,
      part1: true,
      part2: false,
    };
  },
  methods: {
    async createUser() {
      this.creating = true;
      this.createError = "";
      try {
        await this.$strapi.create("members", {
          email: this.email,
          phone: this.phone,
          name: this.name,
          family: this.family,
          village: this.village,
          occupation: this.occupation,
          show: false,
        });
        this.creating = false;
        this.$toasted.success("PART 1 is done. Now complete PART 2.", {
          position: "top-center",
          duration: 9000,
        });
        this.part1 = false;
        this.part2 = true;
      } catch (error) {
        this.creating = false;
        this.createError = error;
      }
    },
    async registerUser() {
      this.registering = true;
      this.error = "";
      this.passwordError = "";
      if (this.password === this.confirmPassword) {
        try {
          const newUser = await this.$strapi.register({
            username: this.name,
            email: this.email,
            password: this.password,
            blocked: true,
          });
          if (newUser !== null) {
            this.registering = false;
            this.$toasted.success(
              "Registration done. Contact admin for verification and unblocking.",
              {
                position: "top-center",
                duration: 9000,
              }
            );
            this.error = "";
            this.passwordError = "";
            // this.part1 = false;
            // this.part2 = true;
            this.$nuxt.$router.push("/login");
          }
        } catch (error) {
          this.registering = false;
          this.error = error.message;
        }
      } else {
        this.registering = false;
        this.passwordError =
          "Your password does not match with your confirm password.";
      }
    },

    partOne() {
      this.part2 = false;
      this.part1 = true;
    },
  },
  mounted() {
    var formTag = gsap.timeline();
    formTag
      .from(".inputTag", {
        duration: 2,
        opacity: 0,
        y: 200,
        ease: "back",
      })
      .from(".labelTag", {
        duration: 2,
        opacity: 0,
      });
  },
};
</script>