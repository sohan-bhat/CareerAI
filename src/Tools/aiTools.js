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
        content: "As the user gives their interests, tell them in under 2 jobs, what possible future careers they can undergo. Be as conscise as possible. Pair this alongside the education ",
      },
    ],
    model: "llama3-8b-8192",
  });
}