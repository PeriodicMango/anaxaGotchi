interface GameData{
  gameDuration: number, //hours
  lastTick: number,
  charInfo: {
    name: string,
    nickname: string,
    birthday: number,
    affection: number,
    hunger: number,
    energy: number,
    happiness: number,
    cleanliness: number,
    health: number, 
    lust: number,
    growth: 'INFANT' | 'CHILD' | 'TEEN' | 'ADULT',
    activity: string,
    want: string // This should be game items / actions
  },
  inventory: string[],
}