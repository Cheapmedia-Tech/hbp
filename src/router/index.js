import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/components/Landing.vue";
import Kenya from "@/components/Kenya.vue";
import Uganda from "@/components/Uganda.vue";
import Payment from "@/components/Payment.vue";
import ThankYou from "@/components/ThankYou.vue";
import Watch from "@/components/Watch.vue";
import OrderForm from "@/components/OrderForm.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: Landing,
      meta: {
        title:
          "The Easiest and Fastest Way to Lower Your Blood Pressure :: Eazifit",
      },
    },
    {
      path: "/kny",
      name: "Kenya",
      component: Kenya,
      meta: {
        title:
          "The Easiest and Fastest Way to Lower Your Blood Pressure :: Eazifit",
      },
    },
    {
      path: "/ug",
      name: "Uganda",
      component: Uganda,
      meta: {
        title:
          "The Easiest and Fastest Way to Lower Your Blood Pressure :: Eazifit",
      },
    },
    {
      path: "/pay",
      name: "Payment",
      component: Payment,
      meta: {
        title: "Buy the Book Now :: EaziFit",
      },
    },
    {
      path: "/paidaccessgranted",
      name: "ThankYou",
      component: ThankYou,
      meta: {
        title: "Thank you for your purchase :: EaziFit",
      },
    },
    {
      path: "/lbpvideo",
      name: "Watch",
      component: Watch,
      meta: {
        title: "Watch or Download the HBP Exercise Video :: EaziFit",
      },
    },
    {
      path: "/optin",
      name: "OrderForm",
      component: OrderForm,
      meta: {
        title: "Fill in the form to get the book delivered to your email :: EaziFit",
      },
    },
  ],
});
