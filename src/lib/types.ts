export interface Main {
	currentPage: number;
	hasNextPage: boolean;
	results: Result[];
}

export interface Result {
	id: string;
	malId: number;
	title: Title;
	image: string;
	trailer: Trailer;
	description: string;
	status: string;
	cover: string;
	rating: number;
	releaseDate: number;
	color: string;
	genres: string[];
	totalEpisodes: number;
	duration: number;
	type: string;
}

export interface Title {
	romaji: string;
	english: string;
	native: string;
	userPreferred: string;
}

export interface Trailer {
	id: string;
	site: string;
	thumbnail: string;
}

export interface Result {
	id: string;
	malId: number;

	title: Title;
	image: string;
	rating: number;
	color: string;
	episodeId: string;
	episodeTitle: string;
	episodeNumber: number;
	genres: string[];
	type: string;
}
export interface Result {
  id:              string;
  malId:           number;
  title:           Title;
  status:          string;
  image:           string;
  popularity:      number;
  currentEpisode:  number | null;
  countryOfOrigin: string;
  description:     string;
  genres:          string[];
  color:           string;
  type:            string;
  releaseDate:     number;
}

export interface Info {
	id:                string;
	title:             InfoTitle;
	malId:             number;
	synonyms:          string[];
	isLicensed:        boolean;
	trailer:           Trailer;
	isAdult:           boolean;
	countryOfOrigin:   string;
	image:             string;
	popularity:        number;
	color:             string;
	cover:             string;
	description:       string;
	status:            Status;
	releaseDate:       number;
	startDate:         EndDateClass;
	endDate:           EndDateClass;
	nextAiringEpisode: NextAiringEpisode;
	totalEpisodes:     number;
	currentEpisode:    number;
	rating:            number;
	duration:          number;
	genres:            string[];
	season:            string;
	studios:           string[];
	subOrDub:          string;
	type:              string;
	recommendations:   Ation[];
	characters:        Character[];
	relations:         Ation[];
	mappings:          Mappings;
	episodes:          Episode[];
}

export interface Character {
	id:          number;
	role:        Role;
	name:        Name;
	image:       string;
	voiceActors: VoiceActor[];
}

export interface Name {
	first:         string;
	last:          null | string;
	full:          string;
	native:        null | string;
	userPreferred: string;
}

export enum Role {
	Main = "MAIN",
	Supporting = "SUPPORTING",
}

export interface VoiceActor {
	id:       number;
	language: Language;
	name:     Name;
	image:    string;
}

export enum Language {
	English = "English",
	French = "French",
	German = "German",
	Hebrew = "Hebrew",
	Italian = "Italian",
	Japanese = "Japanese",
	Korean = "Korean",
	Portuguese = "Portuguese",
	Spanish = "Spanish",
}

export interface EndDateClass {
	year:  number | null;
	month: number | null;
	day:   number | null;
}

export interface Episode {
	id:          string;
	title:       string;
	description: string;
	number:      number;
	image:       string;
	airDate:     Date;
}

export interface Mappings {
	mal:            number;
	anidb:          number;
	kitsu:          number;
	anilist:        number;
	thetvdb:        number;
	anisearch:      number;
	livechart:      number;
	"notify.moe":   string;
	"anime-planet": string;
}

export interface NextAiringEpisode {
	airingTime:      number;
	timeUntilAiring: number;
	episode:         number;
}

export interface Ation {
	id:            number;
	malId:         number | null;
	title:         Title;
	status:        Status;
	episodes:      number | null;
	image:         string;
	cover:         string;
	rating:        number;
	type:          string;
	relationType?: RelationType;
	color?:        string;
}

export enum RelationType {
	Adaptation = "ADAPTATION",
	Alternative = "ALTERNATIVE",
	Character = "CHARACTER",
	Other = "OTHER",
	SideStory = "SIDE_STORY",
	Summary = "SUMMARY",
}

export enum Status {
	Completed = "Completed",
	Ongoing = "Ongoing",
}

export interface InfoTitle {
	romaji:         string;
	english:        null | string;
	native:         string;
	userPreferred?: string;
}
