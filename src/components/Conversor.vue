<template>
    <section class="conversor">
        <h2>
            {{ moedaA }} para {{ moedaB }}
        </h2>
        <input
            type="text"
            v-model="moedaA_value"
            :placeholder="moedaA"
        />
        <input
            type="button"
            value="Converter"
            v-on:click="converter"
        />
        <h2>
            {{ moedaB_value }}
        </h2>
    </section>
</template>

<script>
export default {
    name: "Conversor",
    props: [
        "moedaA",
        "moedaB"
    ],
    data() {
        return {
            moedaA_value: "",
            moedaB_value: 0
        };
    },
    methods: {
        converter(){
            let de_para = `${this.moedaA}_${this.moedaB}`;
            let urlApi = `https://free.currconv.com/api/v7/convert?apiKey=sample-key-do-not-use&q=${de_para}&compact=y`;

            fetch(urlApi).then(resp => {
                return resp.json();
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                })
                .then(json => {
                    let cotacao = json[de_para].val;
                    this.moedaB_value = (cotacao * parseFloat(this.moedaA_value)).toFixed(2);
                });
        }
    }
}
</script>

<style scoped>
    .conversor {
        border: 1px solid #ccc;
        border-radius: 3px;
        box-sizing: border-box;
        margin: 0 auto 10px;
        max-width: 1200px;
        padding: 20px;
    }
</style>