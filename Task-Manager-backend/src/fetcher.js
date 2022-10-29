import db from "./bootstrap/db";
import { TaskSchema as Task, validateTask } from './models/task';

db();

// let result = Product.find(queryObject);


const result = async() => await Task.find();