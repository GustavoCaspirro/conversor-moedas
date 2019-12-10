<template>
  <div id="app">
    <Header />

    <section class="conversor-moedas">
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.conversor-moedas {
  padding: 50px 10px;
}

.title {
  margin: 0 0 60px;
}

.wrapper {
  display: flex;
  max-width: 1000px;
}
</style>
