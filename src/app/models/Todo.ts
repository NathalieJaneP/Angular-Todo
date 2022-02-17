export class Todo {
    task: string;
    done: boolean;
    created: Date;

    constructor(newTask: string) {
        this.task = newTask;
        this.done = false;
        this.created = new Date();
    }
}