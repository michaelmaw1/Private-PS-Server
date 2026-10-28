export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	meganium: {
		inherit: true,
		baseStats: { hp: 100, atk: 40, def: 100, spa: 110, spd: 100, spe: 80 },
		abilities: { 0: "Overgrow", H: "Grassy Surge" },
	},
	meganiummega: {
		inherit: true,
		types: ["Grass", "Fire"],
		baseStats: {hp: 100, atk: 40, def: 120, spa: 150, spd: 120, spe: 100},
	},
	typhlosion: {
		inherit: true,
		baseStats: { hp: 80, atk: 50, def: 80, spa: 110, spd: 85, spe: 125 },
		abilities: { 0: "Blaze", H: "Dazzling" },
	},
	feraligatr: {
		inherit: true,
		baseStats: { hp: 90, atk: 125, def: 90, spa: 60, spd: 90, spe: 75 },
		abilities: { 0: "Torrent", H: "Drizzle" },
	},
	feraligatrmega: {
		inherit: true,
		baseStats: { hp: 90, atk: 160, def: 90, spa: 60, spd: 90, spe: 110 },
	},	
};
