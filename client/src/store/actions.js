export default {
  getNotes({ commit }) {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3000/api/notes", { headers })
      .then((response) => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then((data) => {
          commit("GET_NOTES", data);
        });
      })

      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  },

  getNote({ commit }, noteId) {
    const headers = { "Content-Type": "application/json" };
    fetch(`http://localhost:3000/api/notes/${noteId}`, {
      headers,
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then((data) => {
          commit("GET_NOTE", data);
        });
      })

      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  },

  addNote({ commit }, note) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    };

    fetch(`http://localhost:3000/api/notes`, requestOptions)
      .then((response) => {
        if (response.status !== 201) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(() => {
          commit("ADD_NOTE", note);
        });
      })

      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  },

  deleteNote({ commit }, noteId) {
    fetch(`http://localhost:3000/api/notes/${noteId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(() => {
          commit("DELETE_NOTE", noteId);
        });
      })

      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  },

  updateNote({ commit }, payload) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload.note),
    };

    fetch(`http://localhost:3000/api/notes/${payload.id}`, requestOptions)
      .then((response) => {
        if (response.status !== 201) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then(() => {
          commit("UPDATE_NOTE", payload);
        });
      })

      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  },
};
