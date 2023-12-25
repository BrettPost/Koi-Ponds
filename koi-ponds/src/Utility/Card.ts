class Card {
    name: string;
    image: string;
    primaryAbility: string;
    faction?: string;
    cost?: number;
    allyAbility?: string;
    scrapAbility?: string;

    constructor(name: string, image: string, primaryAbility: string, faction?: string, cost?: number, allyAbility?: string, scrapAbility?: string) {
      this.name = name;
      this.image = image;
      this.primaryAbility = primaryAbility;

      this.faction = faction;
      this.cost = cost;
      this.allyAbility = allyAbility;
      this.scrapAbility = scrapAbility;
    }


  
  }
  export default Card;