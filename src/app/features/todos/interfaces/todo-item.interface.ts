export interface TodoItemType {
    id: number;
    task: string;
    date: Date;
    deadLine: Date;
    subTastks: {id: number, task: string}[] | null;
    completed: boolean;
}