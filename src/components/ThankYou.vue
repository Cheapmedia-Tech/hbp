<template>
  <div
    class="font-graphik tracking-tight pt-3 pb-4 sm:max-w-screen-sm sm:mx-auto"
  >
    <div class="text-right mt-4">
      <img src="../assets/img/eazifit-logotype.svg" class="mx-auto w-1/3" />
    </div>

    <section id="who-book-for" class="text-gray-800 mt-8 text-center px-4">
      <h2 class="font-semibold text-2xl ">
        Thank you for Purchasing <br><span class="text-hgreen">The Easiest and Fastest Way to Lower Your Blood Pressure</span></h2>

      <p class="mt-6 font-medium px-5">
        Check your email to find the download links to the book, the videos and the bonuses
        <br>
      </p>

      <p class="mt-5 font-medium px-5">
        Or click the button below to talk to us if you didn't get a mail
        <br>
      </p>

      <a href="https://wa.me/2349058337546">
            <button
              class="mt-5 shadow-lg rounded-md w-9/12 text-sm px-2 bg-green-400 py-3 text-white text-center font-medium uppercase  leading-tight tracking-wide"
              type="submit"
              id="whatsapp-btn"
            >
              talk to us now
            </button>
          </a>

    </section>
  </div>
</template>
<script>
export default {
  name: "ThankYou",
  created() {
      document.title = "Thank you for your purchase! :: EaziFit"
  },
};
</script>
