export const regexTests = {
    emailTest: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    passwordTest: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    phoneTest: /^\+?[1-9]\d{1,14}$/,
    urlTest: /^(https?:\/\/)?([a-zA-Z0-9.-]+)(:[0-9]{1,5})?(\/.*)?$/,
    dateTest: /^\d{4}-\d{2}-\d{2}$/,
    timeTest: /^(0[0-9]|1[0-2]):[0-5][0-9] ?([APap][mM])?$/,
    numberTest: /^[0-9]+$/
}