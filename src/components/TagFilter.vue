<template>
  <div class="tag_filter__container">
    <ul>
      <li class="tag" v-for="tag in tags" :key="tag" @click="removeTag">
        <span>{{ tag }}</span>
        <div
          @mouseover="highlightCloseBtn"
          @mouseleave="highlightCloseBtn"
          :data-tag="tag"
        >
          <i class="fas fa-times tag__icon"></i>
        </div>
      </li>
    </ul>
    <span v-show="toggleClearBtn()" @click="clearAllTags()" class="tag clearBtn"
      >Clear</span
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [],
    };
  },
  mounted() {
    this.emitter.on("add-tag-to-list", (v) => {
      this.tags = [...new Set([...this.tags, v])];
    });
  },
  methods: {
    toggleClearBtn() {
      return this.tags.length > 0;
    },
    clearAllTags() {
      this.tags.forEach((tag) => {
        this.tags = this.tags.filter((v) => v !== tag);
        this.emitter.emit("remove-tag-from-list", {
          removedTag: tag,
          updatedTagList: this.tags,
        });
      });
    },
    removeTag(t) {
      let tag = t.target.dataset.tag;
      if (tag) {
        let tag = t.target.dataset.tag;

        this.tags = this.tags.filter((v) => v !== tag);
        this.emitter.emit("remove-tag-from-list", {
          removedTag: tag,
          updatedTagList: this.tags,
        });
      }
    },
    highlightCloseBtn(e) {
      e.target.childNodes[0].classList.toggle("tag--hover");
    },
  },
  name: "TagFilter",
};
</script>
<style scoped>
.tag_filter__container {
  width: 100%;
  max-width: calc(1366px - 10%);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  height: calc(50px + 20px);
  background: #fff;
  padding: 10px 20px;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -50px;
  box-shadow: 0 10px 20px -15px #000;
}

.choisie {
  font-weight: bold;
}

ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li:not(:first-child) {
  margin-left: 20px;
}

.tag__icon {
  width: 20px;
  height: 20px;
  font-weight: 100;
  border-radius: 3px;
  background: #a9a9a9;
  color: #fff;
  margin-left: 7px;
  padding: 3px 5px;
  pointer-events: none;
}

.tag > div:hover {
  cursor: pointer;
}

.tag--hover {
  background: #4c4c4c;
}

.tag > div:hover:after {
  background: darkslategray;
}

.tag {
  color: #a9a9a9;
  font-weight: bold;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

.clearBtn:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>