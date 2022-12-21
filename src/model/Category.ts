import { v4 as uuuidv4 } from "uuid";

class Category {
    id?: string; //deixamos opcional para poder passar/salvar
    name: string;
    description: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuuidv4();
        }
    }
}

export { Category }