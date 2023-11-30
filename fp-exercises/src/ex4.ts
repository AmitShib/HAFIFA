interface MapFunction<T, V> {
  (value: T): V;
}
// implement map function using reduce
export const map = <T, V>(arr: T[], mapFunc: MapFunction<T, V>): V[] =>
  arr.reduce((result, value) => [...result, mapFunc(value)], [] as V[]);


interface Predicate<T> {
  (value: T): boolean;
}
// implement filter function using reduce
export const filter = <T>(arr: T[], predicate: Predicate<T>): T[] =>
  arr.reduce((result, value) => (predicate(value) ? [...result, value] : result), [] as T[]);