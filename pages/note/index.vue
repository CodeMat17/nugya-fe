<template>
  <div class="w-full bg-green-100">
    <div class="max-w-md mx-auto h-screen flex items-center justify-center">
      <div
        class="bg-yellow-500 px-8 py-4 rounded-lg shadow-xl text-center mx-4"
      >
        <h1>
          Please be notified that you MUST be an indigene of NOMEH Unateze to
          view this page and to perform other actions required thereof.
        </h1>
        <br />
        <div class="flex items-center justify-between space-x-4">
          <n-link to="/" class="w-full py-2 border rounded-lg">
            Go Back
          </n-link>
          <n-link
            to="/login"
            class="bg-green-500 w-full py-2 rounded-lg text-gray-200"
          >
            Okay!
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>