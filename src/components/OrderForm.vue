<template>
  <div
    class="font-graphik tracking-tight pt-3 pb-4 sm:max-w-screen-sm sm:mx-auto"
  >
    <div class="text-right mt-4">
      <img src="../assets/img/eazifit-logotype.svg" class="mx-auto w-1/3" />
    </div>

    <section id="who-book-for" class="text-gray-900 mt-8 px-2">
      <h2 class="font-semibold text-2xl text-center px-4">
        Fill the Form Below to Get your Purchase delivered to your Email
      </h2>

      <section id="#form" class="text-center">
        <div id="fwave-form" class="mt-5 mb-4 w-3/4 mx-auto">
          <!-- <h2 class="font-medium text-lg text-center leading-tight">
            Fill in the form below to pay with Flutterwave
          </h2> -->
          <form @submit.prevent action="" class="mt-4 flex flex-col">
            <input
              required
              type="text"
              name="fullname"
              placeholder="Your full name"
              id="fullname"
              class="text-sm mb-3 px-2 py-2 border-gray-400 border-2 rounded-md"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your email address"
              id="email"
              class="text-sm mb-3 px-2 py-2 border-gray-400 border-2 rounded-md"
            />
            <input
              required
              type="tel"
              name="phone"
              placeholder="Your phone number"
              id="phone"
              class="text-sm mb-3 px-2 py-2 border-gray-400 border-2 rounded-md"
            />
            <button
              class="mt-2 shadow-lg rounded-md w-full text-sm px-2 bg-hgreen py-3 text-white text-center font-medium uppercase  tracking-wide"
              @click="submitOrder"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: "Payment",
  created() {
    document.title =
      "Fill in the form to get the book delivered to your email :: EaziFit";
  },
  data() {
    return {};
  },
  methods: {
      submitOrder() {
        
      }
  }
};
</script>
