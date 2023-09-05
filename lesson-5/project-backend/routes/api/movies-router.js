import express from "express";

import moviesController from "../../controllers/movies-controller.js";

// import movieValidation from "../../middleware/validation/movie-validation.js";

import movieSchemas from "../../schemas/movie-schemas.js";

import {validateBody} from "../../decorators/index.js";

const movieAddValidate = validateBody(movieSchemas.movieAddSchema);

const moviesRouter = express.Router();

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id", moviesController.getById);

moviesRouter.post("/", movieAddValidate, moviesController.add);

moviesRouter.put("/:id", movieAddValidate, moviesController.updateById);

moviesRouter.delete("/:id", moviesController.deleteById);

export default moviesRouter;