import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url); //extrai a url do arquivo ATUAL para caminho do sistema
const __dirname = path.dirname(__filename); //aqui ele vai pegar somente a pasta onde o arquivo está, nessa caso a Portifolio, então pode ser reusado

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res)=> {
    res.render("index");
})

app.listen(port, () =>{
    console.log(`running on ${port}`);
})