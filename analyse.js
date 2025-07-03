const fs = require("fs");
const { OpenAI } = require("openai");
require("dotenv").config();

const filePath = process.argv[2];
if (!filePath) {
  console.error("❌ Fournis un fichier à analyser (ex: ./src/example.jsx)");
  process.exit(1);
}

const code = fs.readFileSync(filePath, "utf8");
const bestPractices = fs.readFileSync("best-practices.md", "utf8");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function run() {
  const prompt = `
Tu es un reviewer IA pour une équipe JS/React.

Voici les bonnes pratiques de l'équipe :

${bestPractices}

Voici un fichier à analyser :
\`\`\`
${code}
\`\`\`

Fais un retour critique :
- ✅ Ce qui est bien
- ⚠️ Ce qui est à revoir
- 💡 Suggestions d’amélioration
`;

  const res = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  console.log("\n🧠 Résultat de l'analyse IA :\n");
  console.log(res.choices[0].message.content);
}

run().catch((err) => {
  console.error("❌ Erreur d’analyse :", err.message);
});
