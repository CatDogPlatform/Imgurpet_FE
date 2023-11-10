import * as yup from "yup";
import { object, string, number, date } from "yup";
export const petSchema = object( {
    name: string().required( "Required" ).min( 1 ),
    description: string().required( "Required" ),
    price: number().required( "Required" ).min( 0, "Salary must be more than 0" ),
    petType: string().required( "Required" ),
} );