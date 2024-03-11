<template>
  <div class="main-page">
    <div class="links" v-if="langData.contactdata">
      <p>{{ langData.contactdata.email }}</p>
      <p>{{ langData.contactdata.phone }}</p>
      <p>{{ langData.contactdata.address }}</p>
      <p>{{ langData.contactdata.linkedin }}</p>
      <p>{{ langData.contactdata.github }}</p>
    </div>
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
  margin: none;
  padding-bottom: 0; /* Set bottom padding to occupy 10% of the viewport height */
  color: black;
  font-size: 12px;
}

.links {
  min-width: 200px;
  position: fixed;
  left: 10%;
  right: 30%;
  top: 0;
  padding-top: 12%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
@media (max-width: 1000px) {
  .links {
    padding-top: 30%; /* Padding top for smaller screens */
    right: 10%;
  }
}
.links p {
  text-align: justify;
  margin: 0; /* Remove default margin */
}

</style>