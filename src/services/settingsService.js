const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
//http://localhost:5000/api/
//http://w12ocvmlabofv:7203/SystemConfigApi/api/
const settingsService =  {
    Base_Url: "http://w12ocvmlabofv:7203/SystemConfigApi/api/",
    GetSettings: async () => {
        //Simulate Request Delay
        await sleep(500); 
        
        return fetch(`${settingsService.Base_Url}SystemConfiguration`)
        .then(response => response.json());     
    },

    GetSettingsDetail: async (IdConfiguracion) => {
        //Simulate Request Delay
        await sleep(500);

        return fetch(`${settingsService.Base_Url}SystemConfiguration/${IdConfiguracion}/true`)
        .then(response => response.json());

    },

    InsertNewDetail: async (DetalleId, Codigo, Valor, CodigoReferencia) => {
        const data = {
            "idConfiguracion": DetalleId,
            "codigo": Codigo,
            "valor": Valor,
            "codigoRef": CodigoReferencia
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        return fetch(`${settingsService.Base_Url}SystemConfiguration/Details`, options)
            .then(res => res.text());
    }
}

export default settingsService;