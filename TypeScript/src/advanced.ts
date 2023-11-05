
let arr: (Date | number)[] = [new Date(), 123, new Date(), 456];

let isoDatesArray: string[] = arr.map((element: Date | number) => {
    if (element instanceof Date) {
        return element.toISOString(); // Convert Date to ISO string
    } else {
        return element.toString(); // Convert number to string
    }
});

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

