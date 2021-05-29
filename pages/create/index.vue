<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-md mx-auto px-4 py-8">
      <div class="rounded-lg border overflow-hidden bg-white shadow-xl">
        <h1
          class="px-4 py-6 bg-green-500 text-xl font-semibold text-gray-200 tracking-wider"
        >
          CREATE ACCOUNT
        </h1>
        <div class="p-4">
          <form @submit.prevent="createUser" class="space-y-4">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                v-model="name"
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
                <p>{{ creating ? "Please Wait..." : "CREATE ACCOUNT" }}</p>
              </div>
            </button>
            <h1
              v-if="error"
              class="p-4 rounded-lg text-center bg-red-500 text-gray-200 tracking-wider"
            >
              {{ error }}
            </h1>
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
      title: "Create Account",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Create Account",
        },
      ],
    };
  },
  data() {
    return {
      name: "",
      family: "",
      village: "",
      phone: "",
      email: "",
      occupation: "",
      error: "",
      creating: false,
    };
  },
  methods: {
    async createUser() {
      this.creating = true;
      this.error = "";
      try {
        await this.$strapi.create("members", {
          name: this.name,
          family: this.family,
          village: this.village,
          occupation: this.occupation,
          email: this.email,
          phone: this.phone,
        });
        this.name = "";
        this.family = "";
        this.village = "";
        this.occupation = "";
        this.phone = "";
        this.email = "";
        this.creating = false;
        this.$toasted.show("Your Account Has Been Successfully Created.", {
          position: "top-center",
          duration: 7000,
        });
        this.error = "";
        this.$nuxt.$router.push("/members");
      } catch (error) {
        this.creating = false;
        this.error = error.message;
      }
    },
  },
};
</script>