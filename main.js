const flowers = [
  {
    id: 1,
    type: "Rose",
    colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
    price: 2.59,
    usdaZones: [3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 2,
    type: "Tulip",
    colors: ["Orange", "White", "Yellow", "Violet", "Red"],
    price: 1.04,
    usdaZones: [5, 6, 7, 8, 9],
  },
  {
    id: 3,
    type: "Daisy",
    colors: ["Gold", "White", "Orange", "Crimson"],
    price: 0.89,
    usdaZones: [3, 4, 5, 6, 7, 8],
  },
  {
    id: 4,
    type: "Carnation",
    colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
    price: 1.59,
    usdaZones: [5, 6, 7, 8, 9],
  },
  {
    id: 5,
    type: "Bird of Paradise",
    colors: ["Orange", "White"],
    price: 2.33,
    usdaZones: [9, 10, 11],
  },
  {
    id: 6,
    type: "Delphinium",
    colors: ["Blue", "Violet", "White", "Pink"],
    price: 1.67,
    usdaZones: [3, 4, 5, 6, 7],
  },
  {
    id: 7,
    type: "Gladiolus",
    colors: [
      "White",
      "Cream",
      "Yellow",
      "Red",
      "Pink",
      "Green",
      "Lavender",
      "Voilet",
    ],
    price: 1.85,
    usdaZones: [6, 7, 8, 9, 10],
  },
  {
    id: 8,
    type: "Lilly",
    colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
    price: 1.52,
    usdaZones: [3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: 9,
    type: "Chinese Lantern",
    colors: ["Orange"],
    price: 2.33,
    usdaZones: [3, 4, 5, 6, 7, 8, 9],
  },
];

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/

/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
  const filteredFlowers = []; // Do not modify
  //need a for loop with an if conditional to get flowers less that 2
  for (const flower of flowers) {
    if (flower.price < 2) {
      filteredFlowers.push(flower);
    }
  }

  return filteredFlowers; // Do not modify
};

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
  const filteredFlowers = []; // Do not modify

  //for loop through the array. if it includes 3 && 8 then push it to the filteredFlowers array
  // Write your algorithm first, and then your code. Feel free to remove this comment
  for (const flower of flowers) {
    if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
        filteredFlowers.push(flower)
      }
    }
  
  return filteredFlowers; // Do not modify
};

/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
  const filteredFlowers = []; // Do not modify

  //  goal. capture flowers that come in orange 1. loop through the array. 2.then loop through the nested    array of each object. 3.if the object has a value that includes orange, 4. push it into the            filteredFlowers array

  // Write your algorithm first, and then your code. Feel free to remove this comment
  for (const flower of flowers) {
    for (const color of flower.colors) {
      if (color === "Orange") filteredFlowers.push(flower);
    }
  }
  return filteredFlowers; // Do not modify
};

/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {
  /*
    Algorithmic thinking is most important on this one.
    We would rather see the correct algorithm than the
    correct code. If you have code that works, but no
    algorithm, then you failed the exercise.
    */
  /*
   Since the string has to be built up in parts - in both
   the outer loop and the inner loop - start off with a
   variable that has an initial value of an empty string. This part has been done for me
   */
  let flowersHTMLString = ""; // Do not modify

  /*
    Iterate all flowers
*/
  for (const flower of flowers) {
    /*
            Inside the iteration of all flowers, add the open article
            tag and the h1 tags with bird types inside using += operator
        */
    flowersHTMLString += "<article>\n";
    flowersHTMLString += `\t<h1>${flower.type}</h1>\n\n`;

    /*
        add the h2 tags with the word colors inside.
    */
    flowersHTMLString += `\t<h2>"Colors</h2>\n\n`;

    /*
        Then iterate the `colors` array for the current flower.
    */
    for (const color of flower.colors) {
      /*
                Create a string template with an opening and closing
                <section> element with the colors interpolated
                between them. Then add the string template to the
                variable created at the start with the += operator.
            */
      flowersHTMLString += `\t<section>${color}</section>\n`;
    }

    /*
        add the h2 tags with usda zones inside.
*/ flowersHTMLString += `\n\t<h2>USDA Zones</h2>\n`;

    /*
        Then iterate the `zones` array for the current flower.
*/ for (const zone of flower.usdaZones) {
      /*
            Create a string template with an opening and closing
            <div> element with the zone numbers interpolated
            between them. Then add the string template to the
            variable created at the start with the += operator.
    */
      flowersHTMLString += `\t<div>${zone}</div>\n`;
    }

    /*
    At the end of the for loop, add the closing
    </article> tag to the end of the main string with +=
*/
    flowersHTMLString += "</article>\n";
  }

  return flowersHTMLString; // Do not modify
};
flowersAsHTML()


/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers;
module.exports = {
  inexpensiveFlowers,
  orangeFlowers,
  zoneFlowers,
  flowersAsHTML,
};
/*  DO NOT TOUCH THIS CODE  */
