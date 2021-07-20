<template>
  <div class="main-container">
    <div class="edit-container">
      <div class="form-title">
        <input
          class="title"
          type="text"
          v-model="note.title"
          placeholder="Enter your title"
        />
      </div>
      <div class="form-content">
        <textarea
          class="content"
          v-model="note.content"
          rows="8"
          cols="40"
          placeholder="Enter your content"
        ></textarea>
      </div>
    </div>
    <div class="action">
      <div @click="addNote" class="edit">Add this Post-it</div>
    </div>
  </div>
</template>

<script>
//import { uuid } from "vue-uuid";
export default {
  name: "AddNote",
  data() {
    return {
      note: {
        id: "",
        title: "",
        content: [],
      },
    };
  },
  methods: {
    addNote() {
      let str = this.note.content.toString();
      this.note.content = str.split("\n");
      this.$store.dispatch("addNote", this.note);
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
  justify-content: center;
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
  padding: 8px;

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
}
</style>
