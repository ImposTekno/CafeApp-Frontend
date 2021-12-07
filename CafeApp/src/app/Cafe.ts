import { TOUCH_BUFFER_MS } from "@angular/cdk/a11y/input-modality/input-modality-detector";

export class Cafe
{
    private id: number;
    private name: String;
    private address: String;
    private cuisine: String;
    private tables: number;

    constructor(){

    }

    // ID getter and setter
    public get cafeId(): number
    {
        return this.id;
    }
    public set cafeId(inID: number)
    {
        this.id = inID;
    }

    // NAME getter and setter
    public get cafeName(): String
    {
        return this.name;
    }
    public set cafeName(inString: String)
    {
        this.name = inString;
    }   
    
    // ADDRESS getter and setter
    public get cafeAddress(): String
    {
        return this.address;
    }
    public set cafeAddress(inAddress: String)
    {
        this.address = inAddress;
    }

    // CUISINE getter and setter
    public get cuisineType():String
    {
        return this.cuisine;
    }  
    public set cuisineType(inType: String)
    {
        this.cuisine = inType;
    }

    // TABLES getter and setter
    public get maxTables():number
    {
        return this.tables;
    }
    public set maxTables(inNum: number)
    {
        this.tables = inNum;
    }

}