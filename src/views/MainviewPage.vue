<template>
  <div class="main-page">
    <div class="language-selection">
      <select v-model="selectedLanguage" @change="changeLanguage" style="font-family: Consolas, monospace; border-color: white; box-shadow: none;">
        <option v-for="(lang, index) in supportedLanguages" :key="index" :value="lang.value" style="font-family: Consolas, monospace;">{{ lang.label }}</option>
    </select>
    </div>
    <div class="links">
      <router-link :to="`/${selectedLanguage}/cv`" class="link">{{ langData.cv }}</router-link>
<router-link :to="`/${selectedLanguage}/projects`" class="link">{{ langData.projects }}</router-link>
<router-link :to="`/${selectedLanguage}/blog`" class="link">{{ langData.blog }}</router-link>
<router-link :to="`/${selectedLanguage}/contact`" class="link">{{ langData.contact }}</router-link>
    </div>
  </div>
</template>

<script>
import eng from "@/lang/eng.json";
import it from "@/lang/it.json";
import lat from "@/lang/lat.json";
import quechua from "@/lang/quechua.json";
import sv from "@/lang/sv.json";
import esp from "@/lang/esp.json";

export default {
  name: "MainPage",
  data() {
    return {
      selectedLanguage: "english", // Default language
      supportedLanguages: [
        { label: "English", value: "english" },
        { label: "Spanish", value: "spanish" },
        { label: "Italian", value: "italian" },
        { label: "Latin", value: "latin" },
        { label: "Quechua", value: "quechua" },
        { label: "Swedish", value: "swedish" }
      ],
      langData: eng // Default language data
    };
  },
  methods: {
    changeLanguage() {
      let langJson = null;
      switch(this.selectedLanguage) {
        case 'english':
          langJson = eng;
          break;
        case 'spanish':
          langJson = esp;
          break;
        case 'italian':
          langJson = it;
          break;
        case 'latin':
          langJson = lat;
          break;
        case 'quechua':
          langJson = quechua;
          break;
        case 'swedish':
          langJson = sv;
          break;
        default:
          langJson = eng;
      }
      this.langData = langJson;
    }
  }
};
</script>

<style scoped>
.main-page {
  background-color: white;
  color: black;
  font-family: Consolas, monospace;
  padding-top: 10px;
  text-align: left; /* Align content to the left */
}

.language-selection {
  margin-bottom: 20px;
  margin-right: 10%; /* Adjusted margin to create space */
  text-align: right; /* Align content to the right */
  border:none;
  font-size: 12px; /* Set font size to 12px */
}
.language-selection select {
  border: none; /* Remove border */
  padding: 10px; /* Remove default padding */
  box-shadow:none!important; /* Remove shadow initially */
  transition:none; /* Add transition to box-shadow */
  font-size: 12px; /* Set font size to 12px */
  border-color: -internal-light-dark(rgb(255, 255, 255), rgb(255, 255, 255));
}

.language-selection select:focus {
  outline: none; /* Remove focus outline */
}



.links {
  margin-left: 5%;
}

.link {
  display: block;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
  font-family: Consolas, monospace;
}

.link:hover {
  text-decoration: none;
}
</style>
