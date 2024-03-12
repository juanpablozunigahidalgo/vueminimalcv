<template>
  <div class="main-page">
    <table class="table-layout">
      
      <tr>
        <td class="links">
            <p>{{ langData["text-about"] }}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import eng from "@/lang/eng.json";
import it from "@/lang/it.json";
import lat from "@/lang/lat.json";
import quechua from "@/lang/quechua.json";
import sv from "@/lang/sv.json";
import esp from "@/lang/esp.json";

const langData = ref({});

const route = useRoute();

function changeLanguage(selectedLanguage) {
  let langJson = null;
  switch(selectedLanguage.toLowerCase()) {
    case 'english':
      langJson = eng;
      break;
    case 'spanish':
      langJson = esp;
      break;
    case 'italian':
      langJson = it;
      break;
    case 'latin.r':
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
  langData.value = langJson;
}

watch(() => route.params.lang, (selectedLanguage) => {
  changeLanguage(selectedLanguage);
});

onMounted(() => {
  const selectedLanguage = route.params.lang;
  changeLanguage(selectedLanguage);
});
</script>

<style scoped>
.main-page {
  max-width: 100%;
  height: 95vh;
  margin: 0 auto;
  padding-bottom: 0; /* Set bottom padding to occupy 10% of the viewport height */
  position: relative;
  color: black;
  font-size: 12px;
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
  top: 188px ; /* Adjust as needed */
  width: 80%;
  text-align: justify; /* Add this line */
  display: flex; /* Add this line */
  flex-direction: column; /* Add this line */
  align-items: flex-start; /* Add this line */
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