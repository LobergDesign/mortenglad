<template>
  <div class="contact-form">
    <div class="grid-w">
      <div class="grid-r">
        <div class="grid-c-12 grid-c-sm-4">
          <h3 v-if="!showSucces && !showError && title" data-split-line-effect>
            {{ title }}
          </h3>
        </div>
        <div class="grid-c-12 grid-c-sm-8">
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
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div class="grid-r">
                <!-- Honeypot field for spam protection (hidden from users) -->
                <p class="hidden">
                  <label>
                    Don't fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </p>
                <div class="grid-c-12 grid-c-sm-6">
                  <input
                    data-inview-simple-show-effect
                    type="text"
                    placeholder="Full name"
                    name="name"
                    required
                  />
                </div>
                <div class="grid-c-12 grid-c-sm-6">
                  <input
                    data-inview-simple-show-effect
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div class="grid-c-12">
                  <textarea
                    data-inview-simple-show-effect
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div class="grid-c-16">
                  <button
                    class="btn"
                    type="submit"
                    data-inview-simple-show-effect
                  >
                    Send message
                  </button>
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

<script setup lang="ts">
defineProps<{
  title: string;
  successMessage: string;
}>();

const showSucces = ref(false);
const showError = ref(false);

onMounted(() => {
  const form = document.getElementById(
    'simple-contact-form'
  ) as HTMLFormElement;

  if (form) {
    form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      const formData = new FormData(form);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })
        .then(() => formSuccesHandler())
        .catch(() => formErrorHandler());
    });
    const formSuccesHandler = () => {
      form.reset();
      showSucces.value = true;
    };
    const formErrorHandler = () => {
      form.reset();
      showError.value = true;
    };
  }
});
</script>
<style lang="scss" src="./contactForm.scss" scoped></style>
