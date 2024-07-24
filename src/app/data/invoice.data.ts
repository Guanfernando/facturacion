import { Invoice } from "../models/invoice";

export const invoiceData:any = {
    id: 1,
    name: 'Componentes de PC',
    client:{
        name:'Juan',
        lastname: 'uribe',
        address:{
                country: 'Colombia', 
                city: 'Medellin',
                street: 'Carrera 1',
                number: '123'
            }
        },
        
        company:{
            name: 'Juan PC',
            nit: 111222333
        },
        
        item:[{
            id:1,
            product:'intel core i5',
            price: 1000000,
            quantity:1
        },
        {
            id:2,
            product:'ram 8gb',
            price: 200000,
            quantity:1
        },
        {
            id:3,
            product:'procesador intel i5',
            price: 1000000,
            quantity:3
        }
        ]   
        
    }
    
