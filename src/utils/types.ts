export interface Data {
  _embedded?: Embedded;
}

export interface Embedded {
  events?: Event[];
  venues?: Venue[];
}

export interface Event {
  name: string;
  id: string;
  url: string;
  dates: Date;
  classifications: string;
  _embedded?: Embedded;
  images: Image[];
}

export interface Venue {
  name: string;
  id: string;
  url: string;
  location: Coord;
  address: Address;
  city: City;
  country: Country;
  images: Image;
}

export interface Coord {
  longitude: number;
  latitude: number;
}

export interface Address {
  line1?: string;
}

export interface City {
  name: string;
}

export interface Country {
  name: string;
  countryCode?: string;
}

export interface Date {
  start: {
    localDate?: string;
    localTime?: string;
    dateTime?: string;
  };
}

export type Image = {
  ratio: string;
  url: string;
  width: number;
  height: number;
};

export type Review = {
  parent: string;
  title: string;
  text: string;
  rating: number;
  attended: boolean;
};
