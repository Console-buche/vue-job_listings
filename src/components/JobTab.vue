<template>
  <div class="jobTab__container">
    <div class="jobTab__container__logo">
      <!--(local) relative path file loading REQUIREd()  with webpack -->
      <img
        :src="require(`@/assets/images/${job.logo}`)"
        :height="isMobile ? 40 : 80"
        :width="isMobile ? 40 : 80"
        :alt="`${job.company}'s logo`"
      />
    </div>
    <div class="jobTab__container__details">
      <p>
        <span style="text-transform: capitalize">{{ job.company }}</span>
        <span v-if="job.isNew" class="tag" :class="{ 'tag--new': job.isNew }"
          >NEW!</span
        >
        <span
          v-if="job.isFeatured"
          class="tag"
          :class="{ 'tag--featured': job.isFeatured }"
          >FEATURED</span
        >
      </p>
      <p @click="demoEnd" class="majortext">
        {{ job.jobTitle }}
      </p>
      <ul>
        <li class="tagtag" v-for="tag in job.descTags" :key="tag">
          {{ tag }}
        </li>
      </ul>
    </div>
    <div class="hr" v-show="isMobile"></div>

    <div class="jobTab__container__techTags">
      <ul>
        <li v-for="tag in job.techTags" :key="tag" @click="addTag">
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "JobTab",
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    updateResponsive() {
      console.log("test");
      this.isMobile = window.innerWidth < 850 ? true : false;
      return window.innerWidth < 850;
    },
    addTag(a) {
      const tag = a.target.textContent;
      this.emitter.emit("add-tag-to-list", tag);
    },
    demoEnd() {
      this.emitter.emit("demo-end");
    },
  },
  props: {
    job: {
      required: true,
      type: Object,
    },
  },
  created() {
    window.addEventListener("resize", this.updateResponsive);
  },
  mounted() {
    this.emitter.on("remove-tag-from-list", (d) => {
      let name = d.removedTag;
      if (this.$refs[`tech_${name}`])
        this.$refs[`tech_${name}`].classList.remove("picked");
    });
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap");

* {
  color: #61a8aa;
  font-family: "Spartan", sans-serif;
  font-size: 14px;
}

.hr {
  width: 100%;
  height: 1px;
  background: #61a8aa;
  border: none;
  box-shadow: none;
  margin: 20px 0 10px;
}

.img--small {
  height: ;
}

.picked {
  font-weight: bold;
}

.majortext {
  font-weight: 700;
  color: black;
}

.majortext:hover {
  color: gray;
  cursor: pointer;
}

.tag {
  font-size: 12px;
}

.tag--new {
  font-weight: 600;
  color: white;
  border-radius: 20px;
  padding: 7px 5px 5px;
  background-color: #61a8aa;
}

.tag--featured {
  font-weight: 600;
  color: #fff;
  border-radius: 20px;
  padding: 7px 5px 5px;
  background-color: rgba(0, 0, 0, 0.7);
}
ul,
p {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.jobTab__container {
  display: flex;
  align-items: center;
}

.jobTab__container__logo {
  flex: 0.2;
}

.jobTab__container__details {
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  height: 80px;
}

.jobTab__container__details,
.jobTab__container__techTags {
  flex: 0.5;
}

.jobTab__container__details ul,
.jobTab__container__techTags ul {
  display: flex;
}

.jobTab__container__details p span:not(:first-child) {
  margin-left: 10px;
}

.jobTab__container__techTags ul {
  justify-content: flex-end;
  margin-right: 20px;
}

.jobTab__container__techTags ul li {
  padding: 5px 10px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

.jobTab__container__techTags ul li:hover {
  cursor: pointer;
  border-radius: 3px;
  background: #a9a9a9;
  color: #fff;
  padding: 5px 10px;
}

.tagtag:not(:first-child):before {
  content: "•";
  padding-right: 10px;
  margin-left: 10px;
}

@media only screen and (max-width: 850px) {
  .jobTab__container {
    margin-top: -3em;
  }

  img {
    margin-bottom: 15px;
  }

  li > div {
    flex-wrap: wrap;
  }

  .jobTab__container__details {
    flex-basis: 100%;
  }

  .jobTab__container__techTags {
    flex-basis: 100%;
    display: flex;
  }

  .jobTab__container__techTags ul li {
    padding-left: 0;
    margin-top: 10px;
  }
}
</style>