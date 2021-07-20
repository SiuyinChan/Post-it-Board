export default {
  GET_NOTES(state, notes) {
    state.notes = notes;
  },
  GET_NOTE(state, note) {
    state.note = note;
  },
  ADD_NOTE(state, note) {
    state.notes.push(note);
  },
  DELETE_NOTE(state, noteId) {
    state.notes = state.notes.filter((note) => note.id !== noteId);
  },
  UPDATE_NOTE(state, payload) {
    state.notes = state.notes.map((note) => {
      if (note.id === payload.id) {
        return Object.assign({}, note, payload.note);
      }
      return note;
    });
  },
};
