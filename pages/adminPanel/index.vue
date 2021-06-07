<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-xl mx-auto px-2 py-8">
      <div class="">
        <h1
          class="text-center text-lg tracking-wide font-semibold text-gray-800"
        >
          ADMIN AUTHORIZATION PANEL
        </h1>
        <div class="mt-4 flex items-center justify-center space-x-2">
          <button
            @click="userButt"
            class="bg-yellow-500 p-2 rounded-lg text-gray-200 focus:outline-none focus:shadow-outline"
          >
            VERIFY USER
          </button>
          <button
            @click="memberButt"
            class="bg-green-500 p-2 rounded-lg text-gray-200 focus:outline-none focus:shadow-outline"
          >
            VERIFY MEMBERSHIP
          </button>
        </div>
      </div>

      <div class="my-4 py-2">
        <div
          v-if="usership"
          class="p-3 mb-6 bg-yellow-200 shadow-xl rounded-lg"
        >
          <div
            v-if="!users"
            class="flex justify-center py-12 text-lg space-x-2"
          >
            <p class="loading">l</p>
            <p class="loading">o</p>
            <p class="loading">a</p>
            <p class="loading">d</p>
            <p class="loading">i</p>
            <p class="loading">n</p>
            <p class="loading">g</p>
            <p class="loading">.</p>
            <p class="loading">.</p>
            <p class="loading">.</p>
          </div>

          <div v-else>
            <h1 class="font-semibold text-xl tracking-wide">Users:</h1>
            <form>
              <input
                type="search"
                name="username"
                id="username"
                v-model="query"
                placeholder="Search name"
                class="border w-full rounded-lg shadow-lg"
              />
            </form>
            <div
              v-if="filteredUsers < 1"
              class="py-4 text-center tracking-wide text-red-500 text-lg"
            >
              Searched name is not a user
            </div>
            <div
              v-for="user in filteredUsers"
              :key="user.id"
              class="my-6 bg-gray-700 p-3 rounded-lg"
            >
              <n-link :to="{ name: 'adminPanel-id', params: { id: user.id } }">
                <div class="flex items-center justify-between">
                  <h1 class="text-gray-200 sm:text-lg uppercase truncate">
                    {{ user.username }}
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      v-if="user.blocked"
                      class="text-red-500"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                    <path
                      v-if="!user.blocked"
                      class="text-green-500"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="mt-2 flex items-center justify-between">
                  <button
                    class="focus:outline-none focus:shadow-outline rounded-full"
                  ></button>
                </div>
              </n-link>
            </div>
          </div>
        </div>
        <div
          v-if="membership"
          class="p-3 mb-6 bg-green-200 shadow-xl rounded-lg"
        >
          <div
            v-if="!members"
            class="flex justify-center py-12 text-lg space-x-2"
          >
            <p class="loading">l</p>
            <p class="loading">o</p>
            <p class="loading">a</p>
            <p class="loading">d</p>
            <p class="loading">i</p>
            <p class="loading">n</p>
            <p class="loading">g</p>
            <p class="loading">.</p>
            <p class="loading">.</p>
            <p class="loading">.</p>
          </div>

          <div v-else>
            <h1 class="font-semibold text-xl tracking-wide">Members:</h1>
            <form>
              <input
                type="search"
                name="name"
                id="name"
                v-model="querym"
                placeholder="Search member"
                class="border w-full rounded-lg shadow-lg"
              />
            </form>
            <div
              v-if="filteredMembers < 1"
              class="py-4 text-center tracking-wide text-red-500 text-lg"
            >
              Searched name is not a member
            </div>
            <div
              v-for="member in filteredMembers"
              :key="member.id"
              class="my-6 bg-gray-700 p-3 rounded-lg"
            >
              <n-link
                :to="{ name: 'filteredMembers-id', params: { id: member.id } }"
              >
                <div class="flex items-center justify-between">
                  <h1 class="text-gray-200 sm:text-lg uppercase truncate">
                    {{ member.name }}
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      v-if="!member.show"
                      class="text-red-500"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                    <path
                      v-if="member.show"
                      class="text-green-500"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="mt-2 flex items-center justify-between">
                  <button
                    class="focus:outline-none focus:shadow-outline rounded-full"
                  ></button>
                </div>
              </n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usersQuery } from "~/graphql/query";
import { membersQuery } from "~/graphql/query";
export default {
  name: "Admin-Panel",
  head() {
    return {
      title: "Admin Panel",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Admin Panel",
        },
      ],
    };
  },
  data() {
    return {
      users: [],
      members: [],
      query: "",
      querym: "",
      error: "",
      membersError: "",
      membership: false,
      usership: true,
    };
  },
  apollo: {
    users: {
      prefetch: true,
      query: usersQuery,
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
    members: {
      prefetch: true,
      query: membersQuery,
      error(error) {
        this.membersError = JSON.stringify(error.message);
      },
    },
  },

  mounted() {
    gsap.from(".loading", {
      duration: 2,
      opacity: 0,
      y: 20,
      ease: "back",
      repeat: -1,
      stagger: 0.23,
    });
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => {
        return user.username.toLowerCase().includes(this.query.toLowerCase());
      });
    },
    filteredMembers() {
      return this.members.filter((member) => {
        return member.name.toLowerCase().includes(this.querym.toLowerCase());
      });
    },
  },
  methods: {
    userButt() {
      this.membership = false;
      this.usership = true;
    },
    memberButt() {
      this.usership = false;
      this.membership = true;
    },
  },
};
</script>