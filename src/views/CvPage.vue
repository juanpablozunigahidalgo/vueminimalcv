<template>
  <div class="main-page">
    <template v-if="cv">
    <table class="table-layout">
      <tr>
        <td colspan="2" class="links">
          <!-- <h3 class="heading">{{ cv.name }}</h3> -->
          <h3 class="heading-1">{{cv.cvheadings.abstract}}</h3>
          <p>{{ cv.summary }}</p>
          <h3 class="heading">{{cv.cvheadings.professionalexperience}}</h3>
          <ul class="no-bullets"> <!-- Added class "no-bullets" -->
            <li v-for="experience in cv.professionalExperience" :key="experience.title">
              <p style="font-weight:550; color: #36454F; padding-bottom: 1px;">{{ experience.title }}</p>
              <p>{{ experience.company }} ({{ experience.startDate.year }} - {{ experience.endDate.year }})</p>
              <p>{{ experience.description }} </p>
              <p style="padding-bottom: 5px;">Tools: {{ experience.tools.join(", ") }}</p>
            </li>
          </ul>
          <h3 class="heading">{{cv.cvheadings.formaleducation}}</h3>
          <ul class="no-bullets"> <!-- Added class "no-bullets" -->
            <li v-for="education in cv.formalEducation" :key="education.degree">
              <p>{{ education.degree }}</p>
              <p>{{ education.university }} ({{ education.startDate.year }} - {{ education.endDate.year }})</p>
            </li>
          </ul>
          <h3 class="heading">{{cv.cvheadings.coursesandcertifications}}</h3>
          <ul class="no-bullets"> <!-- Added class "no-bullets" -->
            <li v-for="course in cv.coursesAndCertifications" :key="course.course">
              <p>{{ course.course }}</p>
              <p>{{ course.provider }} ({{ course.startDate.year }} - {{ course.endDate.year }})</p>
            </li>
          </ul>
          <h3 class="heading">{{cv.cvheadings.competenceoverview}}</h3>
          <ul class="competence-overview">
            <li v-for="(value, key) in cv.competenceOverview" :key="key">{{ key }}: {{ value }}</li>
          </ul>
          <h3 class="heading">{{cv.cvheadings.skills}}</h3>
          <ul class="competence-overview">
            <li v-for="skill in cv.skills" :key="skill">{{ skill }}</li>
          </ul>
          <h3 class="heading">{{cv.cvheadings.personalinformation}}</h3>
          <p>Driver's License: {{ cv.personalInformation.driverLicense }}</p>
          <p>Nationality: {{ cv.personalInformation.nationality.join(", ") }}</p>
          <p>Languages: {{ cv.personalInformation.languages.join(", ") }}</p>
        </td>
      </tr>
    </table>
  </template>
  <template v-else>
      <p>Loading...</p>
    </template>
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
    // Fetch the appropriate JSON data based on the language
    try {
      const response = await fetch(`../languages/cv-${language}.json`); // Assuming the files are in public/lang/ folder
      if (!response.ok) {
        throw new Error('Failed to fetch CV data');
      }
      this.cv = await response.json();
    } catch (error) {
      console.error(error);
      // Handle error loading CV data
    }
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
  padding-bottom: 0; /* Set bottom padding to occupy 10% of the viewport height */
  color: black;
  font-size: 12px;
  overflow-y: auto; 
  height: 100%;
}

.table-layout {
  width: 100%;
}

.links {
  padding-top: 200px;
  padding-left: 10%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%; /* Set height to 100% of the viewport height */
  overflow-y: auto; /* Enable vertical scrolling */
  padding-bottom: 10%;
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

.no-bullets {
  list-style-type: none; /* Remove bullets */
  padding-left: 0; /* Adjust padding to align with headings */
  margin: 0; /* Add this line to remove top margin */
}

.competence-overview {
  display: flex;
  flex-wrap: wrap;
  list-style: none; /* Remove bullet points */
  padding: 0;
  margin: 0;
}

.competence-overview li {
  margin-right: 10px; /* Adjust spacing between items */
}
.heading-1 {
  margin-bottom: 5px;
  margin-top: 0;
  font-size: inherit; /* Inherit font size from parent */
  font-weight: bold; /* Set font weight to bold */
}

.heading {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: inherit; /* Inherit font size from parent */
  font-weight: bold; /* Set font weight to bold */
}
.no-bullets {
  list-style-type: none; /* Remove bullets */
  padding-left: 0; /* Adjust padding to align with headings */
  margin: 0; /* Add this line to remove top margin */
}
</style>