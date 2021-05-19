<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="px-4 py-8 max-w-2xl mx-auto">
      <h1 class="border-b-2 border-green-500 inline text-green-500 text-2xl">
        Executive Details:
      </h1>
      <div
        v-if="error"
        class="py-8 px-4 text-center text-lg text-red-500 tracking-widest font-semibold"
      >
        {{ error }}
      </div>
      <div
        v-else-if="$apollo.queries.executive.loading"
        class="py-12 px-4 flex flex-col justify-center"
      >
        <div class="flex items-center justify-center space-x-4">
          <div class="ld w-3 h-3 bg-green-600 rounded-full"></div>
          <div class="ld w-3 h-3 bg-green-600 rounded-full"></div>
          <div class="ld w-3 h-3 bg-green-600 rounded-full"></div>
          <div class="ld w-3 h-3 bg-green-600 rounded-full"></div>
        </div>
      </div>

      <div v-else class="mt-8 bg-white rounded-lg overflow-hidden shadow-xl">
        <div
          class="px-8 flex flex-col md:flex-row items-center justify-center md:justify-between py-8 bg-green-400"
        >
          <div>
            <div v-if="executive.image">
              <img
                :src="executive.image"
                alt="executive photo"
                class="rounded-full w-56 h-56 object-center object-cover"
              />
            </div>
            <div v-else class="text-yellow-500">image loading...</div>
          </div>
          <div class="text-center mt-2 md:mt-0 md:text-right">
            <h1
              class="text-xl md:text-2xl font-semibold text-gray-800 tracking-wide"
            >
              {{ executive.post }}
            </h1>
            <h3 class="text-xl text-gray-700">
              {{ executive.name }}
            </h3>
          </div>
        </div>
        <div class="p-4 space-y-4 tracking-wide sm:text-lg">
          <div class="flex justify-between">
            <p class="font-semibold text-gray-700">Phone No:</p>
            <p v-if="executive.phone">{{ executive.phone }}</p>
          </div>
          <div class="flex justify-between">
            <p class="font-semibold text-gray-700">Email:</p>
            <a
              v-if="executive.mail"
              :href="executive.mail"
              target="_blank"
              class="text-blue-500 hover:opacity-75"
              >{{ executive.mail }}</a
            >
          </div>
          <div class="flex justify-between">
            <p class="font-semibold text-gray-700">Website:</p>
            <a
              v-if="executive.website"
              :href="executive.website"
              target="_blank"
              class="text-blue-500 hover:opacity-75"
              >{{ executive.website }}</a
            >
          </div>
          <div>
            <p class="font-semibold text-gray-700">Bio</p>
            <p class="">{{ executive.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { executiveQuery } from "~/graphql/query";
export default {
  data() {
    return {
      executive: Object,
    };
  },
  apollo: {
    executive: {
      prefetch: true,
      query: executiveQuery,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
  mounted() {
    gsap.from(".ld", {
      duration: 1,
      opacity: 0,
      y: 30,
      ease: "back",
      stagger: 0.25,
      repeat: -1,
    });
  },
};
</script>