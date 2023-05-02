export interface Data {
  _embedded?: Embedded;
}

export interface Embedded {
  events?: Event[];
  venues?: Venue[];
  attractions?: Event[];
  genres?: Segment[];
  subgenres?: Segment[];
}

export interface Event {
  name: string;
  type?: string;
  test?: boolean;
  locale?: string;
  id: string;
  url: string;
  dates?: Date;
  _embedded?: Embedded;
  images: Image[];
  classifications: Classification[];
  sales?: {
    public: {
      startDateTime: string;
      startTBD: boolean;
      startTBA: boolean;
      endDateTime: string;
    };
  };
  promoter?: {
    id: string;
    name: string;
  };
  promoters?: [
    {
      id: string;
      name: string;
    }
  ];
  priceRanges?: [
    {
      type: string;
      currency: string;
      min: number;
      max: number;
    },
    {
      type: string;
      currency: string;
      min: number;
      max: number;
    }
  ];
  upcomingEvents?: {
    _total?: number;
    _filtered?: number;
  };
  _links?: {
    self?: {
      href?: string;
    };
    attractions?: [
      {
        href?: string;
      }
    ];
    venues?: [
      {
        href?: string;
      }
    ];
  };
}

export interface Venue {
  name: string;
  type?: string;
  test?: boolean;
  locale?: string;
  postalCode?: string;
  timezone?: string;
  id: string;
  url: string;
  location: Coord;
  address: Address;
  city: City;
  country: Country;
  images?: Image[];
  upcomingEvents?: {
    _total?: number;
    "mfx-de"?: number;
    _filtered?: number;
  };
  _links?: {
    self?: {
      href?: string;
    };
  };
}

export interface Coord {
  longitude: string;
  latitude: string;
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
    dateTBD?: boolean;
    dateTBA?: boolean;
    timeTBA?: boolean;
    noSpecificTime?: boolean;
  };
  timezone?: string;
  status?: {
    code?: string;
  };
  spanMultipleDays?: boolean;
}

export interface Classification {
  primary?: boolean;
  segment?: Segment;
  genre?: Segment;
  subGenre?: Segment;
  type?: Segment;
  subType?: Segment;
  family?: boolean;
  _links?: {
    self?: {
      href?: string;
    };
  };
}

export interface Segment {
  id: string;
  name: string;
  locale?: string;
  primaryId?: string;
  _links?: {
    self?: {
      href?: string;
    };
  };
  _embedded?: Embedded;
}

export type Image = {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback?: boolean;
};

export type Review = {
  parent: string;
  title: string;
  text: string;
  rating: number;
  attended: boolean;
};
