const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      randomUserEmail: "",
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((email) => {
        const randomEmail = email.data.response;
        this.randomUserEmail = randomEmail;
        console.log(this.randomUserEmail);
      });
  },
  method: {},
}).mount("#app");
