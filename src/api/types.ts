export type Option<T> = None | Some<T>;

export class Some<T> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}

export class None {
  error: string;
  constructor(error: string) {
    this.error = error;
  }
}
