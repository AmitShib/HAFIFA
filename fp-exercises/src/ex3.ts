/*
You are given strings str and col.
String str represents a table in CSV (comma-separated-values) format,
where rows are separated by new line characters ('\n') and each row consists of one or more fields separated by commas (',').

The first row contains the names of the columns. 
The following rows contain values.

For example, the table below is presented by the following string:
str = "id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7".

+----+-------+-----+------+------+------+
| id |  name | age | act. | room | dep. |
+----+-------+-----+------+------+------+
|  1 |  Jack |  68 |   T  |  13  |   8  |
| 17 | Betty |  28 |   F  |  15  |   7  |
+----+-------+-----+------+------+------+

String col is the name of a column in the table described by str that contains only integers.
Your task is to find the maximum value in that column. 
In the example above, for col = "age", the maximum value is 68.
In the example above, for col = "room", the maximum value is 15.
In the example above, for col = "dep.", the maximum value is 8.

Write a function:
const maxValue = (str, col) => {...};

Which, given two string str and col consisting of N and M characters, respectively,
returns the maximum value in column col of the table described by str.
*/
import { pipe, map, filter, identity } from 'ramda';

const splitStrToRows = (str :string) : string[] => str.split('\n');

const getColIndex = (row :string , col : string) : number => row.split(',').indexOf(col); //get the col index-- need to bring the first row after the split

const getRowFields = (row :string) : string[] => row.split(',');

const getColValue = (row : string, colIndx : number) : string => getRowFields(row)[colIndx];

const strArrToNumArr = (colValues : string[]) : number[] => colValues.map(value => (value !== null ? Number(value) : null)).filter(value => value !== null) as number[];;


export const makeArr1 = (str: string, col: string): number[] => {
    const rows = splitStrToRows(str);
    const colIndex = getColIndex(rows[0], col);
    const colValues = rows.map(row => getColValue(row , colIndex));
    const finalArr = strArrToNumArr(colValues);
    return finalArr;
  };


  
// const makeArr = (str: string, col: string): number[] => {
//     const rows = str.split('\n'); // Split the string into rows
//     const colIndex = rows[0].split(',').indexOf(col); // Find the index of the specified column
  
//     if (colIndex === -1) {
//       // Column not found
//       throw new Error(`Column "${col}" not found in the table.`);
//     }
  
//     const valuesInCol = rows.slice(1).map(row => {
//       const fields = row.split(',');
//       const colValue = fields[colIndex];
  
//       if (isNaN(Number(colValue))) {
//         // Skip non-numeric values
//         return null;
//       }
  
//       return Number(colValue);
//     });
  
//     return valuesInCol.filter(value => value !== null) as number[];
//   };

  const makeArr = (str: string, col: string): number[] => {
    const rows = splitStrToRows(str); // Use splitStrToRows instead of str.split('\n')
    const colIndex = getColIndex(rows[0], col); // Use getColIndex with the first row
    if (colIndex === -1) {
      // Column not found
      throw new Error(`Column "${col}" not found in the table.`);
    }
  
    const valuesInCol = rows.slice(1).map(row => {
      const colValue = getColValue(row, colIndex); // Use getColValue
      if (isNaN(Number(colValue))) {
        // Skip non-numeric values
        return null;
      }
  
      return Number(colValue);
    });
  
    return valuesInCol.filter(value => value !== null) as number[];
  };
  
  export const maxValue = (str: string, col: string) => Math.max(...makeArr(str,col)); 