import { FormBody } from "../interfaces/body.interface"
import { RequiredFields } from "../interfaces/requiredField.interface";

export type FormValidationArgs = {
    body: FormBody;
    requiredFields: RequiredFields;
}