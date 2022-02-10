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
            class="mt-4 shadow-lg rounded-md w-11/12 text-sm px-2 bg-gray-700 py-3 text-white text-center font-medium uppercase  leading-tight tracking-wide"
            type="submit"
            id="copybtn"
            @click="copy('acc'), changetext"
          >
            Copy Account Number
          </button>

          <a
            href="https://wa.me/2349058337546/?text=I%20have%20paid%20for%20%22Easiest%20and%20Fastest%20Way%20to%20Lower%20your%20Blood%20Pressure.%22%20Find%20my%20proof%20of%20payment%20below."
          >
            <button
              class="mt-3 shadow-lg rounded-md w-11/12 text-sm px-2 bg-green-400 py-3 text-white text-center font-medium uppercase tracking-wide"
              type="submit"
              id="whatsapp-btn"
            >
              Send proof of payment to WhatsApp
            </button>
          </a>
        </div>

        <div class="mt-4 text-center w-3/4 mx-auto">
          <button
            v-on:click="fwaveHidden = !fwaveHidden"
            class="mt-6 border-2 font-semibold bg-hgreen text-white text-xl border-hgreen w-full rounded-lg px-2 py-3"
          >
            Pay with Paystack
          </button>
        </div>

        <div id="fwave-form" v-if="fwaveHidden" class="mt-5 mb-4 w-3/4 mx-auto">
          <h2 class="font-medium text-lg text-center leading-tight">
            Fill in the form below to pay with Paystack
          </h2>
          <form @submit.prevent action="" class="mt-4 flex flex-col">
            <input
              required
              type="text"
              v-model="fullname"
              name="fullname"
              placeholder="Your full name"
              id="fullname"
              class="text-sm mb-3 px-2 py-2 border-gray-400 border-2 rounded-md"
            />
            <input
              required
              type="email"
              v-model="email"
              name="email"
              placeholder="Your email address"
              id="email"
              class="text-sm mb-3 px-2 py-2 border-gray-400 border-2 rounded-md"
            />
            <input
              required
              v-model="phone"
              type="tel"
              name="phone"
              placeholder="Your phone number"
              id="phone"
              class="text-sm mb-3 px-2 py-2 border-gray-400 border-2 rounded-md"
            />
            <paystack
              :amount="price * 100"
              :email="email"
              :paystackkey="'pk_live_005c0e3f747d9f69e822e5aa05a1ee5c15af651a'"
              :reference="reference"
              :callback="processPayment"
              :close="close"
              :disabled="!isComplete"
              :class="{
                'shadow-none bg-gray-500 cursor-not-allowed transform-none text-gray-800': !isComplete,
              }"
              class="shadow-lg rounded-md w-full text-sm px-2 bg-gray-700 py-3 text-white text-center font-medium uppercase  leading-tight tracking-wide"
              type="submit"
            >
              Complete Payment
            </paystack>
          </form>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import paystack from "vue-paystack";
import axios from "axios";

export default {
  props: ["price", "title"],

  name: "Payment",

  components: {
    paystack,
  },

  data: () => {
    return {
      fullname: "",
      email: "",
      phone: "",
      fwaveHidden: false,
      transHidden: false,
    };
  },
  created() {
    document.title = "Buy the Book and get Free Bonuses Now :: EaziFit";
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
    isComplete() {
      return this.fullname && this.phone && this.email;
    },
  },
  methods: {
    processPayment() {
      axios
        .post("https://hbp-be.herokuapp.com/order", {
          fullname: this.fullname,
          phone: this.phone,
        })
        .then(() => {
          console.log("sent");
          window.location.href = "https://eazifit.ng/optin";
        })
        .catch((error) => {
          console.log("error: " + error);
        });
    },
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
