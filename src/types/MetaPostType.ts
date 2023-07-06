// To parse this data:
//
//   import { Convert, MetaPost } from "./file";
//
//   const metaPost = Convert.toMetaPost(json);

export interface MetaPost {
  hits?: Hit[];
  nbHits?: number;
  page?: number;
  nbPages?: number;
  hitsPerPage?: number;
  exhaustiveNbHits?: boolean;
  exhaustiveTypo?: boolean;
  exhaustive?: Exhaustive;
  query?: string;
  params?: string;
  processingTimeMS?: number;
  processingTimingsMS?: ProcessingTimingsMS;
  serverTimeMS?: number;
}

export interface Exhaustive {
  nbHits?: boolean;
  typo?: boolean;
}

export interface Hit {
  created_at?: String;
  title?: string;
  url?: null | string;
  author?: string;
  points?: number;
  story_text?: null | string;
  comment_text?: null;
  num_comments?: number;
  story_id?: null;
  story_title?: null;
  story_url?: null;
  parent_id?: null;
  created_at_i?: number;
  _tags?: string[];
  objectID?: string;
  _highlightResult?: HighlightResult;
}

export interface HighlightResult {
  title?: Author;
  url?: Author;
  author?: Author;
  story_text?: Author;
}

export interface Author {
  value?: string;
  matchLevel?: MatchLevel;
  matchedWords?: any[];
}

export enum MatchLevel {
  None = "none",
}

export interface ProcessingTimingsMS {
  fetch?: Fetch;
  request?: Request;
  total?: number;
}

export interface Fetch {
  scanning?: number;
  total?: number;
}

export interface Request {
  roundTrip?: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toMetaPost(json: string): MetaPost {
    return JSON.parse(json);
  }

  public static metaPostToJson(value: MetaPost): string {
    return JSON.stringify(value);
  }
}
