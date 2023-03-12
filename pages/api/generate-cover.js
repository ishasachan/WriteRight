import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { name, companyName, role, requirements, about } = req.body;
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(name, companyName, role, requirements, about),
    temperature: 0.6,
    max_tokens: 3000,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(name, companyName, role, requirements, about) {
  return `Generate a Cover letter for ${name}$ and here is information about me ${about}$. I am applying in ${companyName} for the role of ${role} with the following requirements ${requirements}.`;
}