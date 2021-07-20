import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";

export default createStore({
  state: {
    notes: [],
    note: "",
  },
  mutations,
  actions,
  modules: {},
});
