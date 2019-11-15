<template>
  <div id="app">
    <h1 class="title"> Conversor de Moedas </h1>
    <div class="wrapper">
      <Conversor
        v-for="moeda in moedas"
        :key="moeda.id"
        :moeda-a="moeda.a"
        :moeda-b="moeda.b"
      />
    </div>
  </div>
</template>

<script>
import Conversor from './components/Conversor';
export default {
  name: 'app',
  components: {
    Conversor
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .title {
    margin-bottom: 60px;
  }

  .wrapper {
    display: flex;
  }
</style>
