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