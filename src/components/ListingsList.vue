<template>
  <ul>
    <li
      v-show="job.isVisible"
      :class="{ featured: job.isFeatured }"
      v-for="job in jobs"
      :key="job.id"
    >
      <JobTab :job="job" />
    </li>
  </ul>
</template>
<script>
import JobTab from "./JobTab.vue";
export default {
  name: "ListingsList",
  components: {
    JobTab,
  },
  data() {
    return {
      tagList: [],
      currentJobTags: [],
      jobs: [
        {
          id: 0,
          logo: "photosnap.svg",
          company: "photosnap",
          isNew: true,
          isFeatured: true,
          jobTitle: "Senior Frontend Developer",
          descTags: ["1d ago", "Full time", "USA only"],
          techTags: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
          isVisible: true,
        },
        {
          id: 1,
          logo: "manage.svg",
          company: "manage",
          isNew: true,
          isFeatured: true,
          jobTitle: "Fullstack Developer",
          descTags: ["1d ago", "Part time", "Remote"],
          techTags: ["Fullstack", "Midweight", "Python", "React"],
          isVisible: true,
        },
        {
          id: 2,
          logo: "account.svg",
          company: "account",
          isNew: false,
          isFeatured: false,
          jobTitle: "Junior Frontend Developer",
          descTags: ["2d ago", "Part time", "USA only"],
          techTags: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
          isVisible: true,
        },
        {
          id: 3,
          logo: "myhome.svg",
          company: "MyHome",
          isNew: false,
          isFeatured: false,
          jobTitle: "Junior Frontend Developer",
          descTags: ["5d ago", "Contract", "USA only"],
          techTags: ["Frontend", "Junior", "css", "JavaScript"],
          isVisible: true,
        },
        {
          id: 4,
          logo: "loop-studios.svg",
          company: "Loop Studios",
          isNew: false,
          isFeatured: false,
          jobTitle: "Software Engineer",
          descTags: ["1w ago", "Full Time", "Worldwide"],
          techTags: ["Fullstack", "Midweight", "JavaScript", "Ruby", "Sass"],
          isVisible: true,
        },
        {
          id: 5,
          logo: "faceit.svg",
          company: "FaceIt",
          isNew: false,
          isFeatured: false,
          jobTitle: "Junior Backend Developer",
          descTags: ["2w ago", "Full Time", "UK only"],
          techTags: ["Backend", "Junior", "Ruby", "RoR"],
          isVisible: true,
        },
        {
          id: 6,
          logo: "shortly.svg",
          company: "Shortly",
          isNew: false,
          isFeatured: false,
          jobTitle: "Junior Developer",
          descTags: ["2w ago", "Full Time", "Worldwide"],
          techTags: ["Frontend", "Junior", "HTML", "JavaScript", "Sass"],
          isVisible: true,
        },
        {
          id: 7,
          logo: "insure.svg",
          company: "Insure",
          isNew: false,
          isFeatured: false,
          jobTitle: "Junior Developer",
          descTags: ["2w ago", "Full Time", "USA only"],
          techTags: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"],
          isVisible: true,
        },
        {
          id: 8,
          logo: "eyecam-co.svg",
          company: "Insure",
          isNew: false,
          isFeatured: false,
          jobTitle: "Full Stack Engineer",
          descTags: ["3w ago", "Full Time", "Worldwide"],
          techTags: [
            "Fullstack",
            "Midweight",
            "Python",
            "JavaScript",
            "Django",
          ],
          isVisible: true,
        },
        {
          id: 9,
          logo: "the-air-filter-company.svg",
          company: "The Air Filter Company",
          isNew: false,
          isFeatured: false,
          jobTitle: "Front-end Dev",
          descTags: ["1mo ago", "Part Time", "Worldwide"],
          techTags: ["Frontend", "Junior", "JavaScript", "React", "Sass"],
          isVisible: true,
        },
      ],
    };
  },
  methods: {
    checkAllTags(t) {
      return this.currentJobTags.includes(t);
    },
    updateJobList(job) {
      this.currentJobTags = job.techTags;
      let hasTag = this.tagList.every(this.checkAllTags);

      //show or hide depending on result
      job.isVisible = hasTag;
    },
  },
  mounted() {
    //on new filter, update filtered job offers
    this.emitter.on("add-tag-to-list", (v) => {
      //add to local list
      this.tagList = [...new Set([...this.tagList, v])];
      this.jobs.forEach((j) => {
        //run for each job
        this.updateJobList(j);
      });
    });

    //on filter remove, update filtered job offers
    this.emitter.on("remove-tag-from-list", (v) => {
      this.tagList = Object.values(v.updatedTagList);
      this.jobs.forEach((j) => {
        //run for each job
        this.updateJobList(j);
      });
    });
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: calc(1366px - 10%);
}

li {
  box-sizing: border-box;
  padding: 25px;
  margin-top: 15px;
  background: #fff;
  width: 100%;
  box-shadow: 0 10px 20px -15px #000;
  border-radius: 5px;
}

li:first-child {
  margin-top: 50px;
}

.featured {
  border-left: 4px solid #59a6a3;
}

@media only screen and (max-width: 850px) {
  ul {
    margin-top: 50px;
  }
  li {
    margin-bottom: 50px;
    width: 80%;
    transition: 0.5s width;
  }
}
</style>