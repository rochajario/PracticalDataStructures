export interface IDataStructure<T> {
    //Adds item to the collection end
    push(value: T): void;

    //Adds item to the collection start
    unshift(value: T): void;

    //Return value of item in requested index
    get(index: number): T;

    //Replace item in requested index
    set(index: number, value: T): void;

    //Remove last item of the collection
    pop(): void;

    //Remove first item of the collection    
    shift(): void;

    insert(index: number, value: T): void;
}