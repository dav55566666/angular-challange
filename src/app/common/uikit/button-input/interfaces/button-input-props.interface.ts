import { ButtonInputType } from "../enums/button-input-type.enum";

export interface ButtonInputProps {
    inputId?: string;
    name?: string;
    type: ButtonInputType;
    value: string;
    click: (e: Event) => void;
}