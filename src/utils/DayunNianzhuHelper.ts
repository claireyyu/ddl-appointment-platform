
export default function DayunNianzhuHelper(data: { string: { "year_char": string }[]}) {
  console.log(data);
  const keys = []
  for (let i = 0; i < 10; i++) {
    keys.push(`dayunNianzhu${i}`);
  }
  
  // Collect the arrays using the provided keys
  const dayunArrays = keys.map(key => data[key]);
  console.log(dayunArrays);

  // Determine how many elements are in each array (assumed they all have the same length)
  const numElements = 8;

  // Create an array to hold the grouped result
  const groupedParas = [];

  // Loop through each index of the arrays (e.g., 0 to 11 in your case)
  for (let i = 0; i < numElements; i++) {
    const group = [];

    // For each array, get the `year_char` at index `i`
    dayunArrays.forEach(array => {
      group.push(array[i].year_char); // Push the `year_char` into the group
    });

    // Add the group to the final result
    groupedParas.push(group);
  }

  console.log(groupedParas);

  return groupedParas;
}
