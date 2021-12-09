<template>
  <div
    class="font-graphik tracking-tight pt-3 pb-4 sm:max-w-screen-sm sm:mx-auto"
  >
    <div class="text-right mt-4">
      <img src="../assets/img/eazifit-logotype.svg" class="mx-auto w-1/3" />
    </div>

    <section id="who-book-for" class="text-gray-900 mt-8 px-2">
      <h2 class="font-semibold text-2xl text-center px-4">
        Use the Payment Methods Below to Begin your Purchase
      </h2>

      <section id="#payment-openers" class="text-center">
        <div class="mt-4 text-center w-3/4 mx-auto">
          <button
            v-on:click="fwaveHidden = !fwaveHidden"
            class="mt-6 border-2 font-semibold bg-hgreen text-white text-xl border-hgreen w-full rounded-lg px-2 py-3"
          >
            Pay with Flutterwave
          </button>
        </div>

        <div id="fwave-form" v-if="fwaveHidden" class="mt-5 mb-4 w-3/4 mx-auto">
          <h2 class="font-medium text-lg text-center leading-tight">
            Fill in the form below to pay with Flutterwave
          </h2>
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
              class="shadow-lg rounded-md w-full text-sm px-2 bg-gray-700 py-3 text-white text-center font-medium uppercase  leading-tight tracking-wide"
              type="submit"
            >
              Complete Payment
            </button>
          </form>
        </div>

        <div class="text-center w-3/4 mx-auto">
          <button
            v-on:click="transHidden = !transHidden"
            class="mt-8 border-2 font-semibold text-xl bg-hblue text-white  border-hblue w-full rounded-lg px-2 py-3"
          >
            Pay with Bank Transfer
          </button>
        </div>

        <div v-if="transHidden" id="bank-transfer" class="mt-5 w-3/4 mx-auto">
          <h2 class="font-medium  text-center leading-tight">
            Make a bank transfer to the account below and send us a message :)
          </h2>

          <hr class="mt-4" />

          <h2 class="mt-3 text-center leading-normal">
           <p class="font-semibold mt-2">Bank</p>
            <p class="-mt-1">Access Bank</p>


            <h2 class="font-medium  text-center leading-tight mt-2">
            Account number
          </h2>
          <p id="acc">0809292464</p>


            <p class="font-semibold mt-2">Account Name</p>
            Hackney Digitech Company Ltd <br />
            (Current Account)


          </h2>



          <button
            class="mt-4 shadow-lg rounded-md w-11/12 text-sm px-2 bg-gray-600 py-3 text-white text-center font-medium uppercase  leading-tight tracking-wide"
            type="submit"
            id="copybtn"
            @click="copy('acc'), changetext"
          >
            Copy Account Number
          </button>

          <a href="https://wa.me/2349058337546">
            <button
              class="mt-3 shadow-lg rounded-md w-11/12 text-sm px-2 bg-green-400 py-3 text-white text-center font-medium uppercase tracking-wide"
              type="submit"
              id="whatsapp-btn"
            >
              Send proof of payment to WhatsApp
            </button>
          </a>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  name: "Payment",
  data() {
    return {
      fwaveHidden: false,
      transHidden: false,
    };
  },
  methods: {
    copy(id) {
      var text = document.getElementById(id).innerText;
      var elem = document.createElement("textarea");
      document.body.appendChild(elem);
      elem.value = text;
      elem.select();
      document.execCommand("copy");
      document.body.removeChild(elem);
    },

    changetext() {
      setTimeout(function() {
        document.getElementById("copybtn").innerText = "Copied";
      }, 3000);
    },
  },
};
</script>
