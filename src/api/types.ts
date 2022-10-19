export interface ChampionFullData {
  type: ChampionType;
  format: string;
  version: string;
  data: { [key: string]: ChampionData };
  keys: { [key: string]: string };
}

export interface ChampionData {
  id: string;
  key: string;
  name: string;
  title: string;
  image: ChampionImage;
  skins: ChampionSkin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: ChampionTag[];
  partype: string;
  info: ChampionInfo;
  stats: { [key: string]: number };
  spells: ChampionSpell[];
  passive: ChampionPassive;
}

export interface ChampionImage {
  full: string;
  sprite: ChampionImageSprite;
  group: ChampionType;
  x: number;
  y: number;
  w: number;
  h: number;
}

export enum ChampionType {
  Champion = "champion",
  Passive = "passive",
  Spell = "spell",
}

export enum ChampionImageSprite {
  Champion0PNG = "champion0.png",
  Champion1PNG = "champion1.png",
  Champion2PNG = "champion2.png",
  Champion3PNG = "champion3.png",
  Champion4PNG = "champion4.png",
  Champion5PNG = "champion5.png",
  Passive0PNG = "passive0.png",
  Passive1PNG = "passive1.png",
  Passive2PNG = "passive2.png",
  Passive3PNG = "passive3.png",
  Passive4PNG = "passive4.png",
  Passive5PNG = "passive5.png",
  Spell0PNG = "spell0.png",
  Spell10PNG = "spell10.png",
  Spell11PNG = "spell11.png",
  Spell12PNG = "spell12.png",
  Spell13PNG = "spell13.png",
  Spell14PNG = "spell14.png",
  Spell15PNG = "spell15.png",
  Spell16PNG = "spell16.png",
  Spell1PNG = "spell1.png",
  Spell2PNG = "spell2.png",
  Spell3PNG = "spell3.png",
  Spell4PNG = "spell4.png",
  Spell5PNG = "spell5.png",
  Spell6PNG = "spell6.png",
  Spell7PNG = "spell7.png",
  Spell8PNG = "spell8.png",
  Spell9PNG = "spell9.png",
}

export interface ChampionInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface ChampionPassive {
  name: string;
  description: string;
  image: ChampionImage;
}

export interface ChampionSkin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

export interface ChampionSpell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip?: ChampionLeveltip;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  effect: Array<number[] | null>;
  effectBurn: Array<null | string>;
  vars: any[];
  costType: ChampionCostType;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: ChampionImage;
  resource?: string;
}

export enum ChampionCostType {
  Abilityresourcename = " {{ abilityresourcename }}",
  AbilityresourcenamePerSecond = " {{ abilityresourcename }} per Second",
  CostTypeHealth = "Health",
  CurrentHealth = "% Current Health",
  Empty = "",
  Energy = " Energy",
  FuryASecond = " Fury a Second",
  Generates1Ferocity = "Generates 1 Ferocity",
  Health = " Health",
  Heat = " Heat",
  Mana = " Mana",
  ManaAllCharges = " Mana, all Charges",
  ManaPerRocket = " Mana Per Rocket",
  ManaPerSecond = " Mana per Second",
  ManaPercentmanacost100MaxMana = " Mana + {{ percentmanacost*100 }}% Max Mana",
  ManacostpersecondManaPerSecond = " + {{ manacostpersecond }} Mana per second",
  MaxHealthCostMana = "% Max Health, {{ cost }} Mana",
  NoCost = "No Cost",
  OfCurrentHealth = "% of current Health",
  OfCurrentHealthHealthcosttooltip = "% of current Health ({{ healthcosttooltip }})",
  OfCurrentHealthTooltiphealthcost = "% of current Health ({{ tooltiphealthcost }})",
  OfMaxHealth = "% of max Health",
  Passive = "Passive",
  The1Seed = "1 Seed",
  TurretKitCostMana = " Turret Kit & {{ cost }} Mana",
}

export interface ChampionLeveltip {
  label: string[];
  effect: string[];
}

export enum ChampionTag {
  Assassin = "Assassin",
  Fighter = "Fighter",
  Mage = "Mage",
  Marksman = "Marksman",
  Support = "Support",
  Tank = "Tank",
}
