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
}

export type Data = {
  currentPage: number;
  hasNextPage: boolean;
  results: Anime[];
}
