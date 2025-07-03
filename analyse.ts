
// analyze.ts
import fs from "fs";
import { OpenAI } from "openai"; // ou Nova SDK

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const filePath = process.argv[2];
const code = fs.readFileSync(filePath, "utf8");
const bestPractices = fs.readFileSync("best-practices.md", "utf8");

async function main() {
  const prompt = `
Tu es un reviewer IA expert.
Voici nos règles internes :

${bestPractices}

Voici un fichier à analyser :
\`\`\`
${code}
\`\`\`

Donne-moi un retour critique : est-ce que ce fichier respecte nos conventions ?
Réponds avec des suggestions claires.
`;

  const res = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4",
  });

  console.log(res.choices[0].message.content);
}

main();
