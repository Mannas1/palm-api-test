const dotenv = require("dotenv");
const express = require('express');
const app = express();
const PORT = 3001;
const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";

dotenv.config();

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(process.env.API_KEY),
});


app.get('/generateText', async (req,res) => {
  try {
    const prompt = req.query.prompt || 'Repeat after me: one, two,'; // You can pass prompt as a query parameter

    const result = await client.generateText({
      model: MODEL_NAME,
      prompt: {
        text: prompt,
      },
    });

    res.json(result);
  } catch (err) {
    console.log(err);
  }
} )

app.listen(PORT, () => {
  console.log('server is running on port 3001')
})
