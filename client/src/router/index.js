import { createRouter, createWebHistory } from "vue-router";
import Notes from "../views/Notes.vue";
import Note from "../views/Note.vue";
import AddNote from "../views/AddNote.vue";

const routes = [
  {
    path: "/",
    name: "Notes",
    component: Notes,
  },
  {
    path: "/note/:id",
    name: "Note",
    component: Note,
  },
  {
    path: "/addNote",
    name: "AddNote",
    component: AddNote,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
