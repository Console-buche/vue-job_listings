<template>
  <div id="container">
    <ListingsHeader />
    <TagFilter />
    <ListingsList />
    <Modal />
  </div>
</template>
<script>
import ListingsHeader from "@/components/ListingsHeader.vue";
import ListingsList from "@/components/ListingsList.vue";
import TagFilter from "@/components/TagFilter.vue";
import Modal from "@/components/Modal.vue";
export default {
  name: "JobListings",
  components: {
    ListingsHeader,
    ListingsList,
    TagFilter,
    Modal,
  },
};
</script>
<style scoped>
#container {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
}
</style>

