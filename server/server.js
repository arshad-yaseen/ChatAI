import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from "openai"


const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);




app.get('/',(req,res)=> { 
    res.status(200).send({Message: "Hey from ChatAI"})
}) 

app.post('/',async(req,res)=> { 
    console.log(req.body);
        
    let prompt = req.body.prompt;
 

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 3000,
        temperature: 0,
      });

      res.json({status:true,bot: response.data.choices[0].text})
    

})


app.listen(8000,()=> console.log("Server started at http://localhost:8000"))