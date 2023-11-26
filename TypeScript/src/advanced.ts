
const arr: (Date | number)[] = [new Date(), 123, new Date(), 456];

const isDate = (e: any) : e is Date  => e instanceof Date
// make is Date a typeguard to fix error == DONE
const isoDatesArray: string[] = arr.map((e: Date | number) => isDate(e) ? e.toISOString() : e.toString());

console.log(isoDatesArray);

enum Dogs {
    golden = "golden retriever",
    poodle = "poodle",
    labrador = "labrador"
}

type Fish = 'salmon' | 'cod' | 'gold fish';

type MyObject = {
    [key: string]: Fish;
};

