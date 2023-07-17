import "dotenv/config"
import express, { json } from "express"
import { CreatePdfDlexLayout } from "./app/services/dynamicPdf.js"
import * as url from "url"

const port = process.env.PORT || 3000
const app = express()

app.use(json())

app.post('/pdf', async (req, res) => {
    const pdf = await CreatePdfDlexLayout.Run()

    res.status(201).send({
        msg: "PDF created successfully",
        source: `http://localhost:3000/${pdf}/pdf-viewer`
    })
})

app.get('/:pdfsource/pdf-viewer', (req, res) => {
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    const filePath = __dirname + `./output/${req.params.pdfsource}.pdf`
    res.sendFile(filePath)
});


app.get('/', (req, res) => {
    res.status(200).send({msg: "Funcionando!!"})
})

app.listen(port, console.log("Starting in http://localhost:3000"))