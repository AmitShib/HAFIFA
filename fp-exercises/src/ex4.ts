interface MapFunction<T, V> {
    (value: T): V;
}
// implement map function using reduce
export const map = <T, V>(arr: T[], mapFunc: MapFunction<T, V>): V[] =>{
    return arr.reduce((result, currentValue) => {
        const mappedValue = mapFunc(currentValue);
        result.push(mappedValue);
        return result;
      }, [] as V[]);
};


interface Predicate<T> {
    (value: T): boolean;
}
// implement filter function using reduce
export const filter = <T>(arr: T[], predicate: Predicate<T>): T[] =>{
    return arr.reduce((result, currentValue) => {
        if (predicate(currentValue)) {
          result.push(currentValue);
        }
        return result;
      }, [] as T[]);
};