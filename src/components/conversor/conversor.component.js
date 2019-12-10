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
      showLoading: false,
      currencies: {}
    };
  },

  beforeMount() {
    this.initializeMoedas()
  },

  methods: {
    converter(eventButton) {
      this.showLoading = true;
      let currenciesLocalStorage = JSON.parse(localStorage.getItem('currencies'));
      var currentCurrency = eventButton.target.parentElement.childNodes[0].childNodes[1].value.split('-')[0].trim();

      if (currenciesLocalStorage) {
        this.showLoading = false;
        let cotacao = (currenciesLocalStorage[currentCurrency].ask).toString().replace(",", ".");
        this.moedaB_value = (parseFloat(this.moedaA_value.toString().replace(",", ".")) / cotacao).toFixed(2);
      } else {
        axios
          .get(`https://economia.awesomeapi.com.br/all/${currentCurrency}-BRL`)
          .then(json => {
            this.showLoading = false;
            let value = currentCurrency;
            let cotacao = (json.data[value].ask).toString().replace(",", ".");
            this.moedaB_value = (parseFloat(this.moedaA_value.toString().replace(",", ".")) / cotacao).toFixed(2);
          })
          .catch(error => {
            this.showLoading = false;
            console.log('There has been a problem with your fetch operation: ' + error.message);
          });
      }
    },

    initializeMoedas() {
      let currenciesLocalStorage = localStorage.getItem('currencies');

      if (currenciesLocalStorage) {
        this.currencies = JSON.parse(currenciesLocalStorage);
      } else {
        axios
          .get(`https://economia.awesomeapi.com.br/all`)
          .then(json => {
            this.currencies = json.data;
            const currenciesStringify = JSON.stringify(json.data);
            localStorage.setItem('currencies', currenciesStringify);
          })
          .catch(error => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
          });
      }
    }
  }
}
