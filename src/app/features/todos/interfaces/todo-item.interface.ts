export interface TodoItemType {
    id: number;
    name: string;
    task: string;
    date: Date;
    deadLine: Date;
    subTastks: {id: number, task: string}[] | null;
    completed: boolean;
}