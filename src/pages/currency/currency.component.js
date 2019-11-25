import Conversor from '../../components/conversor/Conversor';

export default {
    name: 'Currency',
    components: {
        Conversor,
    },
    data() {
        return {
            moedas: [
                {
                    id: 0,
                    a: 'BRL',
                    b: 'USD'
                },
                {
                    id: 1,
                    a: 'BRL',
                    b: 'AUD'
                },
                {
                    id: 2,
                    a: 'BRL',
                    b: 'EUR'
                }
            ],
        };
    }
}
