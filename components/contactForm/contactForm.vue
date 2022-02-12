<template>
  <div class="contact-form">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-4">
          <h3 v-if="!showSucces && !showError && title">
            {{ title }}
          </h3>
        </div>
        <div class="grid-c-8">
          <template v-if="showSucces && successMessage">
            <p>{{ successMessage }}</p>
          </template>
          <template v-if="showError">
            {{ showError }}
            <h3>Ups there was an error</h3>
            <p>Try again later</p>
          </template>
          <div v-if="!showSucces && !showError">
            <form
              id="simple-contact-form"
              name="simpleContactForm"
              method="POST"
              data-netlify="true"
            >
              <div class="grid-r">
                <div class="grid-c-8">
                  <input type="text" placeholder="Navn" name="name" required />
                </div>
                <div class="grid-c-8">
                  <input type="tel" placeholder="Telefonnummer" name="phone" />
                </div>

                <div class="grid-c-8">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div class="grid-c-8">
                  <input type="text" placeholder="Emne" name="Emne" />
                </div>
                <div class="grid-c-16">
                  <textarea
                    placeholder="Besked"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div class="grid-c-16">
                  <button class="btn" type="submit">Send besked</button>
                </div>
                <input
                  type="hidden"
                  name="form-name"
                  value="simpleContactForm"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ContactForm",
  props: {
    title: {
      type: String,
      default: null,
    },
    successMessage: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      showSucces: false,
      showError: false,
    };
  },

  mounted() {
    const form = document.getElementById(
      "simple-contact-form"
    ) as HTMLFormElement;

    if (form) {
      form.addEventListener("submit", (event: Event) => {
        event.preventDefault();
        const formData = new FormData(form);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "multipart/form-data" },
          body: new URLSearchParams(formData as any).toString(),
        })
          .then(() => formSuccesHandler())
          .catch(() => formErrorHandler());
      });
      const formSuccesHandler = () => {
        form.reset();
        // @ts-ignore
        this.showSucces = true;
      };
      const formErrorHandler = () => {
        form.reset();
        // @ts-ignore
        this.showError = true;
      };
    }
  },
});
</script>
<style lang="scss" src="./contactForm.scss" scoped></style>
