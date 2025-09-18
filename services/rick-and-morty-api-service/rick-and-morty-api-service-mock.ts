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

const sleep = async (ms: number = 500) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
};

const fetchCharacters = async (
  filter?: CharacterFilter,
): Response<Character[]> => {
  await sleep(2000);
  return {
    results: [
      {
        id: 1,
        name: "name",
        url: "url",
        created: "created",
        status: "Dead",
        species: "species",
        type: "Alien",
        gender: "Genderless",
        origin: {
          name: "test",
          url: "http://localhost:8080",
        },
        location: {
          name: "test",
          url: "http://localhost:8080",
        },
        image: "",
        episode: [""],
      },
      {
        id: 2,
        name: "name 2",
        url: "url",
        created: "created",
        status: "Dead",
        species: "species",
        type: "Alien",
        gender: "Genderless",
        origin: {
          name: "test",
          url: "http://localhost:8080",
        },
        location: {
          name: "test",
          url: "http://localhost:8080",
        },
        image: "",
        episode: [""],
      },
      {
        id: 3,
        name: "name 3",
        url: "url",
        created: "created",
        status: "Dead",
        species: "species",
        type: "Alien",
        gender: "Genderless",
        origin: {
          name: "test",
          url: "http://localhost:8080",
        },
        location: {
          name: "test",
          url: "http://localhost:8080",
        },
        image: "",
        episode: [""],
      },
    ],
    info: {
      count: 100,
      pages: 4,
      next: null,
      prev: null,
    },
  };
};

const fetchCharacter = async (id: number): Promise<Character> => {
  await sleep(2000);
  return {
    id,
    name: "name " + id,
    url: "url" + id,
    created: "created",
    status: "Dead",
    species: "species",
    type: "Alien",
    gender: "Genderless",
    origin: {
      name: "test",
      url: "http://localhost:8080",
    },
    location: {
      name: "test",
      url: "http://localhost:8080",
    },
    image: "",
    episode: [""],
  };
};

const fetchEpisodes = async (filter?: EpisodeFilter): Response<Episode[]> => {
  await sleep(2000);

  return {
    results: [
      {
        id: 1,
        name: "Episodio 1",
        url: "url 1",
        created: "created",
        episode: "S0E01",
        air_date: "12/12/21",
        characters: [1, 2],
      },
      {
        id: 2,
        name: "Episodio 2",
        url: "url 2",
        created: "created",
        episode: "S0E02",
        air_date: "12/12/21",
        characters: [1],
      },
      {
        id: 3,
        name: "Episodio 3",
        url: "url 3",
        created: "created",
        episode: "S1E01",
        air_date: "12/32/21",
        characters: [1],
      },
    ],
    info: {
      count: 100,
      pages: 4,
      next: null,
      prev: null,
    },
  };
};

const fetchEpisode = async (id: number): Promise<Episode> => {
  await sleep(2000);
  return {
    id,
    name: "Episodio " + id,
    url: "url",
    created: "created",
    episode: "S0E01",
    air_date: "12/12/21",
    characters: [1, 2],
  };
};

const fetchLocations = async (
  filter?: LocationFilter,
): Response<Location[]> => {
  await sleep(2000);

  return {
    results: [
      {
        id: 1,
        name: "Episodio 1",
        url: "url",
        created: "created",
        type: "Ground",
        dimension: "C-136",
        residents: [1, 2],
      },
      {
        id: 2,
        name: "Episodio 2",
        url: "url",
        created: "created",
        type: "Ground",
        dimension: "C-136",
        residents: [1, 2, 3],
      },
      {
        id: 3,
        name: "Episodio 3",
        url: "url",
        created: "created",
        type: "Gravel",
        dimension: "C-122",
        residents: [1, 2, 3, 4, 5],
      },
    ],
    info: {
      count: 100,
      pages: 4,
      next: null,
      prev: null,
    },
  };
};

const fetchLocation = async (id: number): Promise<Location> => {
  await sleep(2000);
  return {
    id,
    name: "Episodio " + id,
    url: "url",
    created: "created",
    type: "Ground",
    dimension: "C-136",
    residents: [1, 2, 3],
  };
};

export {
  fetchCharacters,
  fetchEpisodes,
  fetchLocations,
  fetchEpisode,
  fetchLocation,
  fetchCharacter,
};
