export type RacesFromApi = {
  "index": string,
  "name": string,
  "url": string,
};

export type Races = {
  count: number,
  results: RacesFromApi[];
}

export type RaceType = RacesFromApi & {
  id: number | string;
};

export type RaceDescriptionTypeApi = {
  "index": string,
  "name": string,
  "alignment": string,
  "age": string,
  "size_description": string,

};

// export type Description = {
//   count: number,
//   results: RaceDescriptionTypeApi[];
// }

export type DescriptionType = RaceDescriptionTypeApi & {
  id: number | string;
};


export type DeleteHandlerType = (id: RaceType['id']) => void;