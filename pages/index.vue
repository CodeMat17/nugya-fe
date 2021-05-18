<template>
  <div class="bg-gray-800 w-full min-h-screen">
    <div class="pb-20 pt-24 px-6 flex flex-col justify-center items-center">
      <div class="md:flex md:items-center md:justify-between">
        <div
          class="flex justify-center logo md:w-auto order-first md:order-last"
        >
          <img
            src="@/assets/images/logo-com.jpg"
            alt="logo"
            class="w-48 md:w-56 h-48 md:h-56 lg:w-64 lg:h-64 rounded-full"
          />
        </div>
        <div
          class="title mt-4 md:w-2/3 overflow-hidden text-center md:text-left"
        >
          <h1
            class="hidden md:block text-gray-200 text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase font-semibold"
          >
            Nomeh Unateze General Youth Assembly
          </h1>
          <h1
            class="text-yellow-500 text-3xl lg:text-4xl xl:text-5xl font-bold tracking-widest"
          >
            NUGYA
          </h1>
        </div>
      </div>
      <div
        class="mt-12 md:mt-20 text-gray-500 text-center text-xl md:text-2xl tracking-wider font-semibold"
      >
        <h1 class="relative overflow-hidden">
          <span class="box absolute bottom-0 inline-block z-40"></span>
          <span class="hi inline-block"></span>
          <span class="text"></span>
          <span class="cursor text-red-500">_</span>
        </h1>
      </div>
      <n-link
        to="/about"
        class="arrowBg block mt-24 md:mt-16 px-8 py-2 bg-gray-100 shadow-xl bg-opacity-25 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="arrow h-10 w-10 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      </n-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  head() {
    return {
      title: "Home",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Home",
        },
      ],
    };
  },
  layout: 'home',
  data() {
    return {
      words: ["Okorobia Nomeh Unateze !", "Ofu Obi !!"],
    };
  },
  mounted() {
    gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });

    var tl = gsap.timeline();
    tl.from(".logo", {
      duration: .1,
      opacity: 0,
      y: "-100%",
      ease: "bounce",
    })
      .from(".title", {
        duration: 1.3,
        opacity: 0,
        x: "-100%",
        scale: 0.3,
        ease: "elastic",
      })
      .to(".box", {
        duration: 1,
        width: "21vw",
        //delay: 0.5,
        ease: "power4.inOut",
      })
      .from(".hi", {
        duration: 1,
        y: "7vw",
        ease: "power3.out",
        onComplete: () => masterTl.play(),
      })
      .to(".box", {
        duration: 1,
        height: "7vw",
        ease: "elastic.out",
      })
      .to(".box", {
        duration: 2,
        autoAlpha: 0.5,
        yoyo: true,
        repeat: -1,
        ease:
          "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})",
      });

    let masterTl = gsap.timeline({ repeat: -1 }).pause();
    this.words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 });
      tl.to(".text", {
        duration: 1,
        text: word,
      });
      masterTl.add(tl);
    });

    var arrowTl = gsap.timeline();
    arrowTl
      .from(".arrowBg", {
        duration: 1.5,
        opacity: 0,
        x: "-100%",
        delay: 3,
        ease: "back",
      })
      .to(".arrow", {
        duration: 2,
        opacity: 0,
        x: 20,
        repeat: -1,
      });
  },
};
</script>