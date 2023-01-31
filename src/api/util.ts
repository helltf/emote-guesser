import { ResultError, Result, Ok } from "./types";

export const request = async <T>(url: string): Promise<Result<T>> => {
  try {
    const data = (await (await fetch(url)).json()) as T;
    return new Ok(data);
  } catch (e: any) {
    return new ResultError(e);
  }
};
