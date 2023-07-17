import fs from 'fs';
import { GenId } from './generateUuid.js';
import {
    LayoutDataResource,
    DlexLayout
} from "@dynamicpdf/api"

export class CreatePdfDlexLayout {
    static async Run() {
        let layoutData = new LayoutDataResource("./instructions.json");
        let dlexEndpoint = new DlexLayout(process.env.DLEXENDPOIT, layoutData)

        dlexEndpoint.apiKey = process.env.APIKEY

        let res = await dlexEndpoint.process()

        if (res.isSuccessful) {
            let pdfName = GenId.GenerateUUID()
            let outFile = `./output/${pdfName}.pdf`
            let outStream = fs.createWriteStream(outFile)
            outStream.write(res.content)
            outStream.close()
            return pdfName
        } else {
            console.log(response.errorJson)
        }
    }
}