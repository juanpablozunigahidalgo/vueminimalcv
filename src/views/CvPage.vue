<template>
  <div class="main-page">
    <div class="links">
      <!-- <h3 class="heading">{{ cv.name }}</h3> -->
      <h3 class="heading-1">Abstract</h3>
      <p>{{ cv.summary }}</p>
      <h3 class="heading">Professional Experience</h3>
      <ul class="no-bullets"> <!-- Added class "no-bullets" -->
        <li v-for="experience in cv.professionalExperience" :key="experience.title">
          <p>{{ experience.title }}</p>
          <p>{{ experience.company }} ({{ experience.startDate.year }} - {{ experience.endDate.year }})</p>
        </li>
      </ul>
      <h3 class="heading">Formal Education</h3>
      <ul class="no-bullets"> <!-- Added class "no-bullets" -->
        <li v-for="education in cv.formalEducation" :key="education.degree">
          <p>{{ education.degree }}</p>
          <p>{{ education.university }} ({{ education.startDate.year }} - {{ education.endDate.year }})</p>
        </li>
      </ul>
      <h3 class="heading">Courses and Certifications</h3>
      <ul class="no-bullets"> <!-- Added class "no-bullets" -->
        <li v-for="course in cv.coursesAndCertifications" :key="course.course">
          <p>{{ course.course }}</p>
          <p>{{ course.provider }} ({{ course.startDate.year }} - {{ course.endDate.year }})</p>
        </li>
      </ul>
      <h3 class="heading">Competence Overview</h3>
      <ul class="competence-overview">
        <li v-for="(value, key) in cv.competenceOverview" :key="key">{{ key }}: {{ value }}</li>
      </ul>
      <h3 class="heading">Skills</h3>
      <ul class="competence-overview">
        <li v-for="skill in cv.skills" :key="skill">{{ skill }}</li>
      </ul>
      <h3 class="heading">Personal Information</h3>
      <p>Driver's License: {{ cv.personalInformation.driverLicense }}</p>
      <p>Nationality: {{ cv.personalInformation.nationality.join(", ") }}</p>
      <p>Languages: {{ cv.personalInformation.languages.join(", ") }}</p>
    </div>
  </div>
</template>

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

.links {
  min-width: 200px;
  margin-left: 10%;
  margin-right: 30%;
  padding-top: 12%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%; /* Set height to 100% of the viewport height */
  overflow-y: auto; /* Enable vertical scrolling */
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
</style>

<script>
import cvData from "@/languages/cv-eng.json"; // Import JSON data

export default {
  data() {
    return {
      cv: cvData // Assign JSON data to 'cv' property
    };
  }
};
</script>
