<template>
  <div class="main-page">
    <table class="table-layout">
      <tr>
        <td colspan="2" class="language-selection">
          <div class="custom-select" @click="toggleDropdown" ref="dropdown">
            <div class="selected-option">{{ selectedLanguage }}</div>
            <ul v-if="isDropdownOpen" class="dropdown-menu" :style="{ minWidth: dropdownWidth + 'px' }">
              <li v-for="(lang, index) in supportedLanguages" :key="index" @click="selectLanguage(lang.label)">{{ capitalize(lang.label) }}</li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td class="links">
          <router-link :to="`/${selectedLanguage.toLowerCase()}/cv`" class="link">{{ langData.cv }}</router-link>
          <router-link :to="`/${selectedLanguage.toLowerCase()}/projects`" class="link">{{ langData.projects }}</router-link>
          <router-link :to="`/${selectedLanguage.toLowerCase()}/blog`" class="link">{{ langData.blog }}</router-link>
          <router-link :to="`/${selectedLanguage.toLowerCase()}/contact`" class="link">{{ langData.contact }}</router-link>
        </td>
      </tr>
      <tr>
        <td class="about-site" colspan="2">
          <router-link :to="`/${selectedLanguage.toLowerCase()}/about`" class="about-link">{{ langData.about }}</router-link>
        </td>
      </tr>
    </table>
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
      selectedLanguage: "English", // Default language
      supportedLanguages: [
        { label: "English", value: "english" },
        { label: "Spanish", value: "spanish" },
        { label: "Italian", value: "italian" },
        { label: "Latin", value: "latin" },
        { label: "Quechua", value: "quechua" },
        { label: "Swedish", value: "swedish" }
      ],
      langData: eng, // Default language data
      isDropdownOpen: false,
      dropdownWidth: 0
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      if (this.isDropdownOpen) {
        this.dropdownWidth = this.$refs.dropdown.offsetWidth;
      }
    },
    selectLanguage(language) {
      this.selectedLanguage = this.capitalize(language);
      this.changeLanguage();
      this.isDropdownOpen = false; // Close the dropdown immediately after selecting a language
    },
    changeLanguage() {
      let langJson = null;
      switch(this.selectedLanguage.toLowerCase()) {
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
    },
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
};
</script>

<style scoped>
.main-page {
  max-width: 100%;
  height: 95vh;
  margin: 0 auto;
  padding-bottom: 0; /* Set bottom padding to occupy 10% of the viewport height */
  position: relative;
}
.table-layout {
  width: 100%;
}

.language-selection {
  text-align: right;
}

.custom-select {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.selected-option {
  background-color: #fff;
  border: 1px solid #fff;
  padding: 1px;
  color: black;
  font-family: Consolas, monospace;
  font-size: 12px;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 5px);
  background-color: #fff;
  border: 1px solid #fff;
  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 1;
  color: black;
  font-family: Consolas, monospace;
  font-size: 12px;
  text-align: left;
}

.dropdown-menu li {
  padding: 2px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #fff;
}

.links {
  position: absolute;
  left: 10%;
  top: 30%;
  align-items:start ;
  display:flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: flex-start;
}

.link {
  display: block;
  margin-bottom: 0;
  color: black;
  text-decoration: none;
  font-family: Consolas, monospace;
  font-size: 12px;
}

.about-site {
  position: absolute;
  left: 10%;
  bottom: 10%;
}

.about-link {
  display: block;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
  font-family: Consolas, monospace;
  font-size: 12px;
}
</style>
