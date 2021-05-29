<template>
  <div class="w-full min-h-screen bg-green-100">
    <Logout class="fixed" />
    <div class="px-4 pt-2 pb-8 max-w-lg mx-auto">
      <div class="pt-12 pb-6">
        <p v-if="$strapi.user" class="text-blue-500 calli-font font-semibold tracking-wide">
          Welcome, {{ $strapi.user.username }}
        </p>
        <h1 class="font-semibold text-xl tracking-widest">
          Verified Members
        </h1>
      </div>

      <div class="flex justify-center w-md mx-6">
        <input
          type="search"
          name="name"
          id="name"
          v-model="query"
          placeholder="Search name..."
          class="border w-full rounded-lg"
        />
      </div>
      <Loader v-if="$apollo.queries.members.loading" />
      <p v-if="error" class="text-center text-red-500 px-4 py-8">{{ error }}</p>

      <div
        v-else
        v-for="member in filteredList"
        :key="member.id"
        class="mt-3 relative"
      >
        <n-link v-if="member.show"
          :to="{ name: 'members-id', params: { id: member.id } }"
          class="block bg-gray-800 px-4 py-4 text-gray-200 sm:text-lg tracking-wider rounded-md uppercase"
        >
          {{ member.name }}
        </n-link>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from "~/components/Loader.vue";
import { membersQuery } from "~/graphql/query";
export default {
  name: "Members",
  head() {
    return {
      title: "Members",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Members",
        },
      ],
    };
  },
  middleware: "authenticated",
  components: { Loader },
  data() {
    return {
      members: [],
      error: "",
      query: "",
    };
  },
  apollo: {
    members: {
      prefetch: true,
      query: membersQuery,
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
  computed: {
    filteredList() {
      return this.members.filter((member) => {
        return member.name.toLowerCase().includes(this.query.toLowerCase());
      });
    },
  },
};
</script>