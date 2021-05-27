<template>
  <div class="w-full min-h-screen bg-green-100">
    <Logout class="fixed" />
    <div class="px-4 pt-2 pb-8 max-w-lg mx-auto">
      <h1 class="py-6 font-semibold text-xl tracking-widest">
        Verified Members
      </h1>
      <div class="flex justify-center w-md mx-6">
        <input
          type="search"
          name="username"
          id="username"
          v-model="query"
          placeholder="Search name..."
          class="border w-full rounded-lg"
        />
      </div>
      <Loader v-if="$apollo.queries.users.loading" />
      <p v-if="error" class="text-center text-red-500 px-4 py-8">{{ error }}</p>

      <div
        v-else
        v-for="user in filteredList"
        :key="user.id"
        class="mt-3 relative"
      >
        <n-link
          :to="{ name: 'members-id', params: { id: user.id } }"
          class="block bg-gray-800 px-4 py-4 text-gray-200 sm:text-lg tracking-wider rounded-md uppercase"
        >
          {{ user.username }}
        </n-link>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from "~/components/Loader.vue";
import { usersQuery } from "~/graphql/query";
export default {
  components: { Loader },
  data() {
    return {
      users: [],
      error: "",
      query: "",
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
  },
  computed: {
    filteredList() {
      return this.users.filter((user) => {
        return user.username.toLowerCase().includes(this.query.toLowerCase());
      });
    },
  },
};
</script>