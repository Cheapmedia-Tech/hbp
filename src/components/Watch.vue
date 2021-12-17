<template>
  <div
    class="font-graphik tracking-tight pt-3 pb-4 sm:max-w-screen-sm sm:mx-auto"
  >
    <div class="text-right mt-4">
      <img src="../assets/img/eazifit-logotype.svg" class="mx-auto w-1/3" />
    </div>

    <section id="who-book-for" class="text-gray-800 mt-8 text-center px-4">
      <h2 class="font-semibold text-2xl mb-4">
        Watch or Download the HBP Exercise Video Below
      </h2>

      <vueVimeoPlayer ref="player" :video-id="657730585" player-width="auto"/>

    </section>
  </div>
</template>
<script>
 import { vueVimeoPlayer } from 'vue-vimeo-player'

export default {
  name: "ThankYou",
  components: {
    vueVimeoPlayer
  },
  created() {
    document.title = "Watch or Download the HBP Exercise Video :: EaziFit";
  },
};
</script>
