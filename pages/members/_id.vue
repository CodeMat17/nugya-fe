<template>
  <div class="bg-green-100 w-full min-h-screen">
    <div class="max-w-md mx-auto px-4 py-12">
      <Loader v-if="!user"/>
      <div class="pt-12 flex justify-end px-4">
        <button
          @click="$router.back()"
          class="focus:outline-none focus:shadow-outline hover:opacity-75 bg-green-500 rounded-full px-4 py-1 text-gray-200 tracking-wider"
        >
          Back
        </button>
      </div>
      <div class="border mt-4 rounded-lg shadow-lg overflow-hidden bg-white">
        <h1
          class="text-center bg-green-500 py-8 text-lg px-4 font-semibold text-gray-200 uppercase tracking-wider"
        >
          {{ user.username }}
        </h1>
        <div class="p-4 space-y-2 tracking-wider">
          <h1><span class="font-semibold">Phone No:</span> {{ user.phone }}</h1>
          <h1><span class="font-semibold">Email:</span>  {{ user.email }}</h1>
          <h1><span class="font-semibold">Family Name:</span>  {{ user.family }}</h1>
          <h1><span class="font-semibold">Village Name:</span>  {{ user.village }}</h1>
          <h1><span class="font-semibold">Occupation:</span>  {{ user.occupation }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: Object,
      error: "",
    };
  },
  async asyncData({ $strapi, route }) {
    const id = route.params.id;
    try {
      const user = await $strapi.$users.findOne(id);
      return { user };
    } catch (error) {}
  },
};
</script>