import axios from 'axios';

const aPIFetchExpMat = axios.create({
    baseURL: "https://sapl.novafriburgo.rj.leg.br/api/sessao/expedientemateria/",
    //timeout: 8000,
    headers: {
        "content-language": "pt-br",         
        "content-type": "application/json",      
    }
});

export default aPIFetchExpMat;