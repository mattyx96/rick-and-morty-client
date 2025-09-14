import { getCharacters, getEpisodes, getLocations } from "rickmortyapi";

import type {
  Character,
  CharacterFilter,
  Episode,
  EpisodeFilter,
  Location,
  LocationFilter,
  PaginatedResponse,
} from "@/models";

type Response<T extends Array<unknown>> = Promise<PaginatedResponse<T>>;

const fetchCharacters = async (
  filter?: CharacterFilter,
): Response<Character[]> => {
  try {
    const response = await getCharacters(filter);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const fetchEpisodes = async (filter?: EpisodeFilter): Response<Episode[]> => {
  try {
    const response = await getEpisodes(filter);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const fetchLocations = async (
  filter?: LocationFilter,
): Response<Location[]> => {
  try {
    const response = await getLocations(filter);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export { fetchCharacters, fetchEpisodes, fetchLocations };
