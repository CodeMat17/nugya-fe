<template>
    <div class="flex justify-center space-x-4 py-8">
            <div class="loader w-2 h-2 bg-green-500 rounded-full"></div>
            <div class="loader w-2 h-2 bg-green-500 rounded-full"></div>
            <div class="loader w-2 h-2 bg-green-500 rounded-full"></div>
            <div class="loader w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
</template>
<script>
export default {
    mounted() {
        gsap.from('.loader', {
            duration: 1,
            opacity: 0,
            y: 10,
            ease: 'back',
            stagger: .25,
            repeat: -1,
        })
    }
}
</script>