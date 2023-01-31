export type Result<T> = ResultError | Ok<T>;

export class Ok<T> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}

export class ResultError {
  error: string;
  constructor(error: string) {
    this.error = error;
  }
}

export enum EmoteType {
  SEVENTV = "SEVENTV",
  BTTV = "BTTV",
  FFZ = "FFZ",
}

export type EmoteInfo = {
  id: string;
  name: string;
  displayName?: string;
  type: EmoteType;
};
