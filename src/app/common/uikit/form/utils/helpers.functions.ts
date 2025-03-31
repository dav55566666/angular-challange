import { ValidationTypes } from "../enums/validationTypes.enum";
import { FormBody } from "../interfaces/body.interface";
import { RequiredFields } from "../interfaces/requiredField.interface";
import { FormValidationArgs } from "./interfaces";

export const initRequiredFields = (body: FormBody): RequiredFields => {
    const requiredFields: RequiredFields = {};
    Object.keys(body).forEach((key) => {
        requiredFields[key] = {
            required: body[key].required,
            isValid: false,
            type: body[key].validationType
        }
    })
    return requiredFields;
}

const body = {
    email: {
        validationType: ValidationTypes.EMAIL,
        required: true,
        value: ''
    },
    password: {
        validationType: ValidationTypes.PASSWORD,
        required: true,
        value: ''
    },
    phone: {
        validationType: ValidationTypes.PHONE,
        required: false,
        value: ''
    }
}

const createdReq = initRequiredFields(body);

export const formValidation = ({body, requiredFields} : FormValidationArgs) => {
    Object.keys(requiredFields).forEach((key) => {
        const value = body[key].value;
        const required = requiredFields[key].required;
        const type: ValidationTypes = requiredFields[key].type;
        console.log(type, value, required);
        
        // switch (type) {
        //     case type === ValidationTypes.EMAIL:
        //         const isValid = regexTests.email.test(value);
        //         break;
        
        //     default:
        //         break;
        // }
    });
}

formValidation({
    body: body,
    requiredFields: createdReq
})