import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });
  PathParameters(app); // pass app reference to PathParameters
  QueryParameters(app); // pass app reference to QueryParameters
  WorkingWithObjects(app); // pass app reference to WorkingWithObjects
  WorkingWithArrays(app); // pass app reference to WorkingWithArrays
}
