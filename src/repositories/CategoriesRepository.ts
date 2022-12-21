import { Category } from '../model/Category'


// DTO
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRepository {

    private categories: Category[]; //categories é atributo de uma classe - definir tipo de atributo

    constructor() {
        this.categories = []; //responsavel
    }

    // responsavel por cadastrar
    create({ name, description }: ICreateCategoryDTO): void { //void 
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }
    // retorno da lista de categorias
    list(): Category[] {
        return this.categories;
    }

}

export { CategoriesRepository }