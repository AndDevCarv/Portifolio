import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import routes from "../Portifolio/routes/routes.js";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url); //extrai a url do arquivo ATUAL para caminho do sistema
const __dirname = path.dirname(__filename); //aqui ele vai pegar somente a pasta onde o arquivo está, nessa caso a Portifolio, então pode ser reusado

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use("/", routes)

app.listen(port, () =>{
    console.log(`running on ${port}`);
})
