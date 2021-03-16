<template>
  <div v-show="shouldShow" class="outermodal">
    <div class="innerModal">
      <span
        >Demo ends here / no job offer view.<br />
        Have you checked out <br />the mobile view & tag filters</span
      >
      <button @click="closeModal">Back to jobs</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      shouldShow: false,
    };
  },
  created() {
    this.emitter.on("demo-end", () => {
      this.shouldShow = true;
    });
  },
  methods: {
    closeModal() {
      this.shouldShow = false;
    },
  },
};
</script>

<style scoped>
.outermodal {
  width: 100%;
  height: 100%;
  background: #000c;
  position: absolute;
  overflow: hidden;
  top: 0;
}

.innerModal {
  line-height: 25px;
  width: 20vw;
  height: 20vh;
  min-width: 300px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #63baba;
  color: darkslategray;
  font-size: 1em;
  border-radius: 1vh;
  letter-spacing: -0.85px;
  flex-direction: column;
}

span {
  margin-bottom: 10px;
}

button {
  outline: none;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  color: #00000080;
  font-weight: 600;
  border-radius: 3px;
  transition: 0.2s letter-spacing, 0.4s box-shadow, 0.3s border-radius;
}

button:hover {
  cursor: pointer;
  box-shadow: 0 5px 10px 0px rgb(255 255 255 / 30%);
  transition: 0.2s letter-spacing, 0.4s box-shadow, 0.3s border-radius;
  letter-spacing: 1px;
  border-radius: 5px;
}
</style>