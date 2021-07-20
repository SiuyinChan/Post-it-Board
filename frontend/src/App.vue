<template>
  <div id="nav">
    <router-link to="/"></router-link>
    <h1><router-link class="header" to="/">POST-IT BOARD</router-link></h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
body {
  background-color: #666;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
}

h1 {
  font-family: monospace, Helvetica, Arial, sans-serif;
  font-size: 70px;
  margin: 15px;
}

.header {
  text-decoration: none;

  &:visited {
    color: black;
  }
}
</style>
