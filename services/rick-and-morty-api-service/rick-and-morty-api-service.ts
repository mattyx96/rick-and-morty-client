import {
  type Character as CharacterDto,
  type Episode as EpisodeDto,
  getCharacter,
  getCharacters,
  getEpisode,
  getEpisodes,
  getLocation,
  getLocations,
  type Location as LocationDto,
} from "rickmortyapi";

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
    return {
      ...response.data,
      results: response.data.results?.map(mapCharacter),
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const fetchCharactersByIds = async (ids: number[]): Promise<Character[]> => {
  try {
    const response = await getCharacter(ids);
    return response.data.map(mapCharacter);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const fetchEpisodesByIds = async (ids: number[]): Promise<Episode[]> => {
  try {
    const response = await getEpisode(ids);
    return response.data?.map(mapEpisode) || [];
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const fetchEpisodes = async (filter?: EpisodeFilter): Response<Episode[]> => {
  try {
    const response = await getEpisodes(filter);
    return {
      ...response.data,
      results: response.data.results?.map(mapEpisode),
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const fetchEpisode = async (id: number): Promise<Episode> => {
  try {
    const response = await getEpisode(id);
    return mapEpisode(response.data);
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
    return {
      ...response.data,
      results: response.data.results?.map(mapLocation),
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const fetchLocation = async (id: number): Promise<Location> => {
  try {
    const response = await getLocation(id);
    return mapLocation(response.data);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const mapEpisode = (episode: EpisodeDto): Episode => {
  return {
    ...episode,
    characters: episode.characters
      .map((character) =>
        Number(character.split("/")[character.split("/").length - 1]),
      )
      .filter(Boolean),
  };
};

const mapCharacter = (character: CharacterDto): Character => {
  return {
    ...character,
    episode: character.episode
      .map((character) =>
        Number(character.split("/")[character.split("/").length - 1]),
      )
      .filter((id) => !Number.isNaN(id)),
  };
};

const mapLocation = (location: LocationDto): Location => {
  return {
    ...location,
    residents: location.residents
      .map((character) =>
        Number(character.split("/")[character.split("/").length - 1]),
      )
      .filter(Boolean),
  };
};

export {
  fetchCharacters,
  fetchEpisodes,
  fetchLocations,
  fetchEpisode,
  fetchLocation,
  fetchCharactersByIds,
  fetchEpisodesByIds,
};
