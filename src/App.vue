<template>
  <div id="app">
    <Header />

    <section class="conversor-moedas">
      <h1 class="title"> Conversor de Moedas </h1>
      <div class="wrapper">
        <Conversor
          v-for="moeda in moedas"
          :key="moeda.id"
          :moeda-a="moeda.a"
          :moeda-b="moeda.b"
        />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from './layout/header/Header';
import Conversor from './components/conversor/Conversor';
import Footer from './layout/footer/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Conversor,
    Footer,
  },
  data() {
    return {
      moedas: [
        {
          id: 0,
          a: "BRL",
          b: "USD"
        },
        {
          id: 1,
          a: "BRL",
          b: "AUD"
        },
        {
          id: 2,
          a: "BRL",
          b: "EUR"
        }
      ]
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  }
</style>
