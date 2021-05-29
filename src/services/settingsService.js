const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

const settingsSevice =  {
    GetSettings: async () => {
        //Simulate Request Delay
        await sleep(2000); 
        return [
            {
                id: 1,
                sistema: "OFV",
                modulo: "BIZAGI",
                seccion: "PROVINCIAS",
                estado: 1
            },
            {
                id: 2,
                sistema: "OFV",
                modulo: "BIZAGI",
                seccion: "LISTADO_BANCOS",
                estado: 1
            }
        ];      
    },

    GetSettingsDetail: async (IdConfiguracion) => {
        //Simulate Request Delay
        await sleep(2000);
        const mockData =  [
            {
                id: 1,
                idconfiguracion: 1,
                llave: "1",
                valor: "San Juan",
                codref: "",
                estado: 1
            },
            {
                id: 2,
                idconfiguracion: 1,
                llave: "2",
                valor: "La Romana",
                codref: "",
                estado: 1
            },
            {
                id: 3,
                idconfiguracion: 1,
                llave: "3",
                valor: "Hato Mayor",
                codref: "",
                estado: 1
            },
            {
                id: 4,
                idconfiguracion: 1,
                llave: "4",
                valor: "San Pedro",
                codref: "",
                estado: 1
            }
        ];
        return mockData.filter(itm => itm.idconfiguracion = IdConfiguracion);
    }
}

export default settingsSevice;