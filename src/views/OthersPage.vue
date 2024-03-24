<template>
  <div class="main-page">
    <div class="links">
      <p class="heading-1" v-if="cv">{{ cv.projects }}</p>
      <p class="heading-1"><a href="https://www.pinterest.se/juanpablozunigahidalgo/" class="no-link-style">Pinterest</a></p>
      <p class="heading-1"><a href="https://www.upwork.com/o/profiles/users/~014dc3930a8604d292/" class="no-link-style">Upwork</a></p>
      <p class="heading-1"><a href="https://se.linkedin.com/in/jpzuniga/en" class="no-link-style">Linkedin</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cv: null // Initialize cv as null
    };
  },
  async created() {
    // Get the language from the URL
    const language = this.getLanguageFromUrl();
    // Import the appropriate JSON data based on the language
    this.cv = await import(`@/languages/cv-${language}.json`);
  },
  methods: {
    getLanguageFromUrl() {
      // Extract language from URL
      const url = window.location.href;
      if (url.includes("/english/")) return "eng";
      else if (url.includes("spanish")) return "esp";
      else if (url.includes("italian")) return "it";
      else if (url.includes("latin.r")) return "lat";
      else if (url.includes("swedish")) return "sv";
      // Default to English if no language found in the URL
      else return "eng";
    }
  }
};
</script>

<style scoped>
.main-page {
  max-width: 100%;
  margin: none;
  padding-bottom: 0;
  color: black;
  font-size: 12px;
  overflow-y: auto; 
  height: 100%;
}

.links {
  padding-top: 200px;
  padding-left: 10%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 10%;
}
@media (max-width: 1000px) {
  .links {
    padding-top: 30%;
    right: 10%;
  }
}
.links p {
  text-align: justify;
  margin: 0;
}

.no-bullets {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.competence-overview {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.competence-overview li {
  margin-right: 10px;
}
.heading-1 {
  margin-bottom: 5px;
  margin-top: 0;
  font-size: inherit;

}

.heading {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: inherit;
  font-weight: bold;
}
.no-bullets {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}
.no-link-style {
  text-decoration: none; /* Remove underline */
  color: inherit; /* Use the parent's color */
  cursor: pointer; /* Use pointer cursor */
}
</style>