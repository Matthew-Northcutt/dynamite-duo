import { generateMoviesHTML } from './movie-converter.js';
import { renderMoviesToDOM } from './movie-render.js';

const movieHTML = generateMoviesHTML();
//This line calls the generateMoviesHTML function, which generates the HTML markup for the movie cards based on the movie data. 
//The generated HTML is stored in the movieHTML variable.
renderMoviesToDOM(movieHTML);
//This line calls the renderMoviesToDOM function, passing the movieHTML as an argument. 
//The function takes the generated HTML and inserts it into the specified DOM element ("movie-list").

/*we brought everything together in the main module (main.js). 
We imported the necessary functions from the movie-converter.js and movie-render.js 
modules to generate the movie cards HTML and render them to the DOM.
The main.js module serves as the entry point of our application. 
It orchestrates the movie card generation and rendering process by calling the appropriate functions.
First, we call the generateMoviesHTML function to generate the HTML markup for the movie cards based on the movie data. 
The generated HTML is stored in the movieHTML variable.
Next, we call the renderMoviesToDOM function, passing the movieHTML as an argument. 
This function takes the generated HTML and inserts it into the specified DOM element ("movie-list"), 
effectively displaying the movie cards on the webpage.
By separating concerns into different modules (movies-data.js, movie-converter.js, movie-render.js), 
we achieve a modular and maintainable codebase. Each module has a specific responsibility, making the code easier to understand and modify.*/