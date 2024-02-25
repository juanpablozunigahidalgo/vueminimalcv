<template>
    <div class="language-selection">
      <select :value="selectedLanguage" @change="changeLanguage" style="font-family: Consolas, monospace;">
        <option v-for="(lang, index) in supportedLanguages" :key="index" :value="lang.value" style="font-family: Consolas, monospace;">{{ lang.label }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: "LanguageSelector",
    props: {
      selectedLanguage: {
        type: String,
        default: "english" // Default language
      },
      supportedLanguages: {
        type: Array,
        default: () => [
          { label: "English", value: "english" },
          { label: "Spanish", value: "spanish" },
          { label: "Italian", value: "italian" },
          { label: "Latin", value: "latin" },
          { label: "Quechua", value: "quechua" },
          { label: "Swedish", value: "swedish" }
        ]
      }
    },
    methods: {
      changeLanguage(event) {
        this.$emit("language-changed", event.target.value);
      }
    }
  };
  </script>
  
  <style scoped>
  .language-selection {
    margin-bottom: 20px;
    margin-right: 10%;
    text-align: right;
  }
  
  .language-selection select {
    border: none;
    padding: 10px;
    box-shadow: none!important;
    transition: none;
  }
  
  .language-selection select:focus {
    outline: none;
  }
  </style>