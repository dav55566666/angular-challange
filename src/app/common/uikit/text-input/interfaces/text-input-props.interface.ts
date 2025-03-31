import { TextInputTypes } from "../enums/text-input-types.enum";

export interface TextInputProps {
    type: TextInputTypes;
    inputId: string;
    name: string;
    onChange: (event: Event) => void;
    defaultValue?: string;
    placeholder?: string;
    title?: string;
    value?: string;
}