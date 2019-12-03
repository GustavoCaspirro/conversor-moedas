import axios from "axios";
export default {
    name: 'Conversor',
    props: [
        'moedaA',
        'moedaB'
    ],
    data() {
        return {
            moedaA_value: '',
            moedaB_value: 0,
            showLoading: false
        };
    },
    methods: {
        converter(){    
            this.showLoading = true;
            axios
                .get(`https://economia.awesomeapi.com.br/all/${this.moedaB}-BRL`)
                
                .then(json => {
                    this.showLoading = false;
                    let value = this.moedaB;
                    let cotacao = (json.data[value].ask).toString().replace(",",".");
                    this.moedaB_value = (parseFloat(this.moedaA_value.toString().replace(",",".")) / cotacao).toFixed(2);
                })
                .catch(error => {
                    this.showLoading = false;
                    console.log('There has been a problem with your fetch operation: ' + error.message);
                });
        }
    }
}
