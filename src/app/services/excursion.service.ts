import { Injectable } from '@angular/core';
import { Commentaire } from '../class/commentaire';
import { Excursion } from '../class/excursion';

@Injectable({
  providedIn: 'root'
})
export class ExcursionService {
private lesexcursions:Excursion[]=[
new Excursion(1,"Sidi bou Said","../assets/image.jpg",20,40,"3h,30min",false,false,true,new Date('02,01,2022'),new Date('22,12,2021'),
[ new Commentaire("Jed Grira","Experience Unique"),
new Commentaire("Khalil Ouhibi","C'est magnifique")
],"Célèbre pour ses rues pavées et ses maisons bleues et blanches, Sidi Bou Saïd est un village pittoresque installé sur un promontoire qui surplombe la mer Méditerranée. Des cafés en plein air, des restaurants tunisiens et des petites galeries d'art sont également parsemés sur les hauteurs. Construit au début du XXe siècle, le palais Ennejma Ezzahra est agrémenté d'arches, de mosaïques et d'éléments en stuc richement décorés, et la demeure historique Dar el-Annabi abrite des personnages de cire vêtus de costumes traditionnels. Un port de plaisance se trouve à côté d'une plage de sable."),
new Excursion(2,"Tabarka","../assets/tabarka.jpg",40,60,"10h,30min",true,false,false,new Date('03,01,2022'),new Date('23,12,2021'),
[
new Commentaire("Sarra Maherssia","J'adore"),
new Commentaire("Edoo","c'est magnifique")
],"L'architecture de son patrimoine bâti, en particulier celle de sa médina caractérisée par des motifs de briques en relief, est unique en Tunisie. "),
new Excursion(3,"Beja","../assets/beja.jpg",60,70,"10h,30min",true,true,true,new Date('04,01,2022'),new Date('24,12,2021'),
[
  new Commentaire("Bilel ","Experience unique"),
  new Commentaire("Khalil","c'est magnifique")
  ],"Connu par ses richesses agricoles, le gouvernorat de BEJA est un territoire aux ressources naturelles très appréciables. Ces potentialités le placent parmi les premiers gouvernorats dans les productions stratégiques. Par ailleurs le gouvernorat abrite un beau site archéologique classé patrimoine international par l’UNESCO en l’occurrence le site de Dougga.."
),
new Excursion(4,"Hammamet","../assets/pic.jpg",40,50,"8h,30min",false,true,true,new Date('05,01,2022'),new Date('25,12,2021'),
[
  new Commentaire("Ahmed","Experience unique"),
  new Commentaire("Nour","c'est magnifique")
  ],"C’est une très belle ville touristique, un véritable pôle d’attraction aussi bien pour les touristes que pour les tunisiens.Elle est réputée pour ses hôtels de standing, ses restaurants, ses bars, ses activités, et surtout pour ses magnifiques plages de sable fin où il fait bon se prélasser."),
new Excursion(5,"Kairouan","../assets/kairouan.jpg",70,50,"12h,30min",false,false,false,new Date('06,01,2022'),new Date('26,12,2021'),
[
  new Commentaire("adel","Experience unique"),
  new Commentaire("Sara","c'est magnifique")
  ],"Kairouan, une des plus célèbres villes du monde musulman, retient les visiteurs par le charme unique de sa médina. Sa Grande Mosquée est un chef-d’œuvre universel d’architecture. Une étape obligée dans un voyage en Tunisie, et un point de départ pour découvrir l’impressionnant site antique de Sbeïtla dans la région des Hautes steppes. "),
new Excursion(6,"Tozeur","../assets/tozeur.jpg",150,200,"36h",true,false,true,new Date('07,01,2022'),new Date('27,12,2021'),
[
  new Commentaire("abou kacem","Experience unique"),
  new Commentaire("ibn khaldoun","c'est magnifique") 
  ],"Tozeur, est une petite ville aux portes du Sahara. Ici, il n'y a pas de plage, mais du sable, une immense palmeraie et un immense lac de sel, le 'Chott El-Djerid. Une petite zone touristique regroupe une dizaine d'hôtels magnifiques..., avec piscine et tout le reste ! Une zone qui n'a rien à voir avec le reste de la ville. Comme presque tous les touristes, nous logions dans l'un de ces hôtels."),
new Excursion(7,"Jerba","../assets/djerba.jpg",200,250,"36h",true,false,false,new Date('08,01,2022'),new Date('28,12,2021'),
[
  new Commentaire("ibn sina","Experience unique"),
  new Commentaire("taha hsin","c'est magnifique")
  ],"En posant un pied à Djerba, impossible de ne pas commencer par une visite de Houmt-Souk, la principale ville de l’île. Faites d’abord le tour des très nombreuses mosquées aux styles variés, bien qu’elles ne soient pas ouvertes aux non pratiquants. Admirez la Mosquée des étrangers, celle de Sidi Brahim el Jemni avec son toit pentu ou encore la Mosquée des Turcs et son minaret de style ottoman. Envie de dépenser vos dinars ? Alors filez à la Caverne d’Ali Baba, marché rempli de stands en tous genres sur lesquels dénicher mille et un trésors. Bijoux, tissus, parfums, babouches… Vous y trouvez à coup sûr votre bonheur ! En sortant de cette caverne aux merveilles, allez prendre un bon bol de culture en vous rendant au musée Sidi Zitouni. Dédié à l’art et aux traditions populaires, il est aménagé dans un ancien sanctuaire de style mauresque datant du 18e siècle."),





];
getExcursion(){
  return this.lesexcursions;
}
  constructor() { }
}
