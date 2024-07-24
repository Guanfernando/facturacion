import { Client } from "./client";
import { Company } from "./Company";
import { Item } from "./item";

export class Invoice{
[x: string]: any;
    id!: number;
    name!: string;
    client!: Client;
    company!: Company;
    item!: Item[];
    total!: number;

}