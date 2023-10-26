import axios from 'axios';

const aPIFetchExpMat = axios.create({
    baseURL: "https://sapl.novafriburgo.rj.leg.br/api/sessao/expedientemateria/",
    headers: {
        "content-language": "pt-br", 
        "content-length": 4954, 
        "content-type": "application/json"      
    }
});

export default aPIFetchExpMat;