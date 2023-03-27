export type Anime = {
	id: string;
	malId: number;
	title: {
		romaji: string;
		english?: string;
		native?: string;
		userPreferred?: string;
	};
	image: string;
	trailer?: {
		id: string;
		site: string;
		thumbnail: string;
	};
	description: string;
	status: string;
	cover: string;
	rating: number;
	releaseDate: number;
	color?: string;
	genres: string[];
	totalEpisodes: number;
	duration: number;
	type: string;
};

export type Data = {
	currentPage: number;
	hasNextPage: boolean;
	results: Anime[];
};
export interface ApiResponse {
  id: string;
  title: string[];
  malId: number;
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
  };
  image: string;
  popularity: number;
  color: string;
  description: string;
  status: string;
  releaseDate: number;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number | null;
    month: number | null;
    day: number | null;
  };
  rating: number;
  genres: string[];
  season: string;
  studios: string[];
  type: string;
  recommendations: {
    id: string;
    malId: string;
    title: string[];
    status: string;
    episodes: number;
    image: string;
    cover: string;
    rating: number;
    type: string;
  };
  characters: {
    id: string;
    role: string;
    name: string[];
    image: string;
  };
  relations: {
    id: number;
    relationType: string;
    malId: number;
    title: string[];
    status: string;
    episodes: number;
    image: string;
    color: string;
    type: string;
    cover: string;
    rating: number;
  };
  episodes: {
    id: string;
    title: string;
    episode: string;
  };
}