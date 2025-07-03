// analyze.js
const fs = require("fs");
const path = require("path");
const { OpenAI } = require("openai");
require("dotenv").config();

const filePath = process.argv[2];
if (!filePath) {
  console.error("🚨 Veuillez fournir un chemin de fichier JS/TS à analyser.");
  process.exit(1);
}

const code = fs.readFileSync(filePath, "utf8");
const bestPractices = fs.readFileSync("best-practices.md", "utf8");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function runAnalysis() {
  const prompt = `
Tu es un reviewer IA pour une équipe JS/React.

Voici les bonnes pratiques de l'équipe :

${bestPractices}

Voici un fichier à analyser :
\`\`\`
${code}
\`\`\`

Donne un retour critique : qu’est-ce qui est bien, qu’est-ce qui est à améliorer ? 
Propose des modifications si nécessaire.
`;

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4",
  });

  console.log("\n🧠 Feedback IA :\n");
  console.log(chatCompletion.choices[0].message.content);
}

runAnalysis().catch((err) => {
  console.error("Erreur durant l’analyse :", err.message);
});
