<template>
  <router-link
    class="note-item"
    v-if="note && note._id"
    :to="{ name: 'Note', params: { id: note._id } }"
  >
    <h2>{{ note.title }}</h2>
    <p v-for="content in note.content" :key="content.id">
      {{ content }}
    </p>
  </router-link>
</template>

<script>
export default {
  name: "Postit",
  props: {
    note: {
      _id: String,
      title: String,
      content: [String],
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.note-item {
  font-family: "Caveat", cursive;
  flex: 0 0 25%;
  margin: 25px;
  background-color: pink;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  transform: rotate(-6deg);
  transition: transform 0.15s linear;
  cursor: pointer;
  min-width: 275px;
  max-width: 360px;
  width: 360px;
  height: 250px;
  padding: 10px;
  box-sizing: border-box;
  overflow: scroll;

  h2 {
    font-size: xx-large;
    font-weight: 900;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-size: large;
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:nth-child(2n) {
    transform: rotate(4deg);
    position: relative;
    top: 5px;
    background: #cfc;
  }
  &:nth-child(3n) {
    transform: rotate(-3deg);
    position: relative;
    top: -5px;
    background: #ccf;
  }
  &:nth-child(4n) {
    transform: rotate(4.5deg);
    position: relative;
    top: -5px;
    background: whitesmoke;
  }
  &:nth-child(5n) {
    transform: rotate(-1deg);
    position: relative;
    top: -10px;
    background: lightgoldenrodyellow;
  }
  &:nth-child(6n) {
    transform: rotate(4deg);
    position: relative;
    top: 5px;
    background: #ffba3b;
  }
  &:hover {
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
    transform: scale(1.25);
    position: relative;
    z-index: 5;
  }
}
a {
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  }
}
</style>
