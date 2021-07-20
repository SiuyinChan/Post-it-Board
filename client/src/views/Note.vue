<template>
  <div class="main-container">
    <div>
      <router-link to="/" class="back">← Back to my Post-its</router-link>
    </div>

    <div class="edit-container">
      <div class="form-title">
        <input class="title" type="text" v-model="note.title" />
      </div>
      <div class="form-content">
        <textarea class="content" v-text="noteContent"></textarea>
      </div>
    </div>
    <div class="action">
      <div @click="deleteNote" class="delete">Delete this Post-it</div>
      <div @click="updateNote" class="edit">Edit this Post-it</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  computed: {
    note() {
      return this.$store.state.note;
    },
    noteContent() {
      return this.$store.state?.note?.content?.join("\n");
    },
  },
  mounted() {
    this.$store.dispatch("getNote", this.$route.params.id);
    // console.log(this.note.content);
    // let str = this.note.content.toString();
    // console.log(str);
  },

  methods: {
    deleteNote() {
      this.$store.dispatch("deleteNote", this.$route.params.id);
      this.$router.push(`/`);
    },

    updateNote() {
      let str = document.getElementsByTagName("textarea")[0].value;
      this.note.content = str.split("\n");
      this.$store.dispatch("updateNote", {
        id: this.$route.params.id,
        note: this.note,
      });
      this.$router.push(`/`);
    },
  },
};
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
}

.action {
  display: flex;
  justify-content: space-evenly;
}

.delete,
.edit {
  font-size: 20px;
  color: antiquewhite;
  font-weight: 700;
  background-color: #b90f0f;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
}

.edit {
  background-color: darkgreen;
}

.edit-container {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 40px auto;
  background-color: peachpuff;
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
}

.back {
  text-decoration: none;
  color: white;
  font-size: 25px;
  font-weight: 700;
  background-color: rebeccapurple;
  border-radius: 25px;
  padding: 8px 20px;

  &:visited {
    color: white;
  }
}

.title,
.content {
  font-family: "Caveat", cursive;
  background: none;
  border: 0;
  outline: none;
  margin: 15px;
}

.title {
  font-size: xxx-large;
  font-weight: 900;
  width: calc(100% - 30px);
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  text-align: center;
}

.content {
  font-size: xx-large;
  font-weight: 800;
  width: 85%;
  min-height: 300px;
}
</style>
