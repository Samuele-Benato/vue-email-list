const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      randomUserEmails: [],
    };
  },

  mounted() {
    // this.generateRandomMail();
  },

  methods: {
    generateRandomMail() {
      this.randomUserEmails = [];
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((email) => {
            const randomEmail = email.data.response;

            this.randomUserEmails.push(randomEmail);
          });
      }
    },
  },
}).mount("#app");
