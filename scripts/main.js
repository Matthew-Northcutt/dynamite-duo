import { generateMoviesHTML } from './movie-converter.js';
import { renderMoviesToDOM } from './movie-render.js';

const movieHTML = generateMoviesHTML();
//This line calls the generateMoviesHTML function, which generates the HTML markup for the movie cards based on the movie data. 
//The generated HTML is stored in the movieHTML variable.
renderMoviesToDOM(movieHTML);
//This line calls the renderMoviesToDOM function, passing the movieHTML as an argument. 
//The function takes the generated HTML and inserts it into the specified DOM element ("movie-list").