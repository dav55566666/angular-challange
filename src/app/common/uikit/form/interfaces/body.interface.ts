import { ValidationTypes } from "../enums/validationTypes.enum";

export interface FormBodyType {
    validationType: ValidationTypes;
    required: boolean;
    value: string | boolean | number;
}

export type FormBody = {
    [key: string]: FormBodyType;
}