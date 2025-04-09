export interface Iproduct {
    id:number;
    name: String;
    brand: String;
    barCode: String;
    supplier:String;
    stockId:number;
    Price:Number;
    weight:Number;
    measureUnit: String;
}

export interface IproductListFilters{
    name?: String;
    brand?: String;
    supplier?:string;
    stockId?: number;
}