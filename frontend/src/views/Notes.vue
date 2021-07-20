<template>
  <div class="notes-container" id="notes-list">
    <Postit v-for="note in notes" :key="note._id" :note="note"></Postit>
  </div>

  <div class="add-note">
    <router-link to="/addNote">+</router-link>
  </div>
</template>

<script>
import Postit from "../components/Postit.vue";

export default {
  components: { Postit },
  name: "Notes",
  computed: {
    notes() {
      return this.$store.state.notes;
    },
  },
  mounted() {
    this.$store.dispatch("getNotes");
  },
};
</script>

<style scoped lang="scss">
.notes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.add-note {
  font-family: monospace;
  position: fixed;
  bottom: 15px;
  right: 15px;

  a {
    padding: 10px;
    text-decoration: none;
    color: white;
    background-color: black;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    font-weight: 100;
    margin-left: auto;
  }
}
</style>
