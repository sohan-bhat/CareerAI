import Groq from "groq-sdk"
const groqApiKey = process.env.REACT_APP_GROQ_API_KEY
const groq = new Groq({ apiKey: `${groqApiKey}`, dangerouslyAllowBrowser: true });

export async function getGroqChatCompletion(userInput) {
  return groq.chat.completions.create({
    messages: [
      { 
        role: "user",
        content: `${userInput}`,
      },
      {
        role: "system",
        content: "As the user gives their interests, tell them what possible future careers they can undergo. Pair this alongside the education required for their career. Make sure to keep a professional tone, but keep it concise ",
      },
    ],
    model: "llama3-8b-8192",
  });
}