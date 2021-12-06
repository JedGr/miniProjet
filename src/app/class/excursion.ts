import { Commentaire } from "./commentaire";

export class Excursion {
    constructor(
        public id?:number,
        public lib?:string,
        public photo?:string,
        public prix?:number,
        public prixAvant?:number,
        public duree?:string,
        public promo?:boolean,
        public nouv?:boolean,
        public coupDeCoeur?:boolean,
        public dateDep?:Date,
        public datePay?:Date,
        public commentaire?:Commentaire[],
        public description?:string
    ){}
}
