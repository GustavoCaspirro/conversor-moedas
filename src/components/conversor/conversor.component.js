export default {
    name: "Conversor",
    props: [
        "moedaA",
        "moedaB"
    ],
    data() {
        return {
            moedaA_value: "",
            moedaB_value: 0,
            showLoading: false
        };
    },
    methods: {
        converter(){
            this.showLoading = true;
            let de_para = `${this.moedaA}_${this.moedaB}`;
            let urlApi = `https://free.currconv.com/api/v7/convert?apiKey=sample-key-do-not-use&q=${de_para}&compact=y`;

            fetch(urlApi).then(resp => {
                return resp.json();
                })
                .catch(error => {
                    this.showLoading = false;
                    // eslint-disable-next-line no-console
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                })
                .then(json => {
                    this.showLoading = false;
                    let cotacao = json[de_para].val;
                    this.moedaB_value = (cotacao * parseFloat(this.moedaA_value)).toFixed(2);
                });
        }
    }
}
