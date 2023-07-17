# Dynamic PDF Dlex

Api baseada nos serviços em cloud da [Dynamic PDF](https://www.dynamicpdf.com), o serviço em especifico chamado dlex-pdf, onde você pode criar uma template no serviço cloud da empresa, depois pode por meio de instruções matidas em arquivos *.json enviar paramentos para preencher os dados dinâmicos na template.
## Documentação

#### Gera o PDF

```http
  POST /pdf
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `APIKEY` | `string` | **Obrigatório**. A chave da api da Dynamic PDF |
| `DLEXENDPOIT` | `string` | **Obrigatório**. Dlex layout |

#### Retorno gerado

```json
{
	"msg": "PDF created successfully",
	"source": "http://localhost:3000/0b463f32-e965-471e-b312/pdf-viewer"
}
```