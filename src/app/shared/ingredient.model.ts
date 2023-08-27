export class Ingredient {
    private dateAdded;
    public name: string;
    public amount : number;
    //public imagePath: string;
    
    constructor(name: string, amount: number) { 
        this.dateAdded = Date.now();
        this.name = name;
        this.amount = amount;
    }

    getDateAdded() {
        return this.dateAdded;
    }
}