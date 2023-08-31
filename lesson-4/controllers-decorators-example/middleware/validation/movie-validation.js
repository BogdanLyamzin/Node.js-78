import movieSchemas from "../../schemas/movie-schemas.js";

import {validateBody} from "../../decorators/index.js";

const addMovieValidate = validateBody(movieSchemas.movieAddSchema);

export default {
    addMovieValidate,
}