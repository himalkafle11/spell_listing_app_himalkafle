export interface Spell {
  index?: any;
  name?: string;
}

export interface FavouriteButton {
  spell: Spell;
  onClick: () => void;
}
