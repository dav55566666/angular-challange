import { ValidationTypes } from "../enums/validationTypes.enum";

export interface RequiredField {
    required: boolean;
    isValid: boolean;
    type: ValidationTypes;
}

export type RequiredFields = {
    [key: string]: RequiredField;
};