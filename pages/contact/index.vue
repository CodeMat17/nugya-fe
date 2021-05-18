<template>
  <div class="w-full min-h-screen bg-green-100">
    <div class="max-w-xl mx-auto px-4 py-6">
      <div class="border rounded-xl shadow-xl bg-white overflow-hidden">
        <div class="bg-green-500 p-4 flex items-center justify-between">
          <h1 class="text-2xl font-semibold tracking-wider">Contact Us</h1>
          <a href="https://twitter.com/NUGYA_Nomeh" target="_blank">
            <svg class="w-8 h-8 text-blue-600 bird" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
              />
            </svg>
          </a>
        </div>
        <div v-if="error" class="px-4 py-6 bg-red-200 text-center">
          {{ error }}
        </div>
        <form @submit.prevent="sendEmail" class="space-y-4 p-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              id="name"
              v-model="name"
              required
              placeholder="Enter Your Name"
              class="w-full border rounded-md focus:bg-green-100"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              v-model="email"
              placeholder="Enter Your Email"
              class="w-full border rounded-md focus:bg-green-100"
            />
          </div>
          <div>
            <label>Phone No.</label>
            <input
              type="tel"
              name="user_phone"
              id="phone"
              required
              v-model="phone"
              placeholder="Enter Your Phone No."
              class="w-full border rounded-md focus:bg-green-100"
            />
          </div>
          <div>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              v-model="subject"
              placeholder="Enter Your Subject"
              class="w-full border rounded-md focus:bg-green-100"
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              v-model="message"
              class="w-full border rounded-md focus:bg-green-100"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full p-3 bg-green-500 rounded-md shadow-lg text-gray-200 font-semibold tracking-widest focus:outline-none focus:shadow-outline"
          >
            {{ sending ? "SENDING..." : "SUBMIT" }}
          </button>
        </form>
      </div>
    </div>
    <div
      v-if="sentModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
    >
      <div class="relative w-auto mx-4 max-w-2xl">
        <div
          class="py-4 rounded-lg overflow-hidden bg-white w-full shadow-2xl flex flex-col"
        >
          <div class="text-xl text-gray-800 font-semibold px-4">
            <div
              class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0"
            >
              <img
                src="@/assets/images/nav-logo.jpg"
                alt="logo"
                class="w-32 h-32"
              />
                <p class="text-gray-800 text-center">
                  We have received your e-mail and will surely reply if
                  necessary. Thank you !
                </p>
            </div>
          </div>
          <button
            @click="sentModal = false"
            class="bg-green-500 py-3 inline mx-10 rounded-lg mt-6 text-gray-200 text-xl tracking-wider focus:outline-none focus:shadow-outline"
          >
            Okay !
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="sentModal"
      class="absolute inset-0 z-40 opacity-25 bg-black fixed"
    ></div>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactUs",
  head() {
    return {
      title: "ContactUs",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "ContactUs",
        },
      ],
    };
  },
  data() {
    return {
      sending: false,
      sentModal: false,
      error: "",
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      (this.error = ""), (this.sending = true);
      try {
        emailjs.sendForm(
          "service_hlm5rqe",
          "template_chyx61q",
          e.target,
          "user_Lqc92fwzUsqXMbBCdkSmP",
        );
        (this.name = ""),
          (this.email = ""),
          (this.phone = ""),
          (this.subject = ""),
          (this.message = ""),
          (this.sending = false);
        this.sentModal = true;
      } catch (error) {
        this.error = error;
        this.sending = false;
      }
    },
  },
  mounted() {
    gsap.from(".bird", {
      duration: 10,
      opacity: 1,
      x: -50,
      ease: "back",
      repeat: -1,
    });
    var mod = gsap.timeline();
    mod
      .from(".modal", {
        duration: 1,
        opacity: 0,
        y: "100%",
        ease: "back",
      })
      .from(".modalLogo", {
        duration: 1,
        opacity: 0,
        x: "-100%",
        ease: "back",
      })
      .from(".modalText", {
        duration: 2,
        opacity: 0,
        x: "100%",
        ease: "back",
        stagger: 0.23,
      });
  },
};
</script>