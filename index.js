import UIComponent from "./app/services/components.service.js";
import Git from "./app/model/Git.js";
import { run } from "./app/app.js";

const git = new Git();
const ui = new UIComponent();

run( git, ui )