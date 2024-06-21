import Groq from "groq-sdk"

const groq = new Groq({ apiKey: "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", dangerouslyAllowBrowser: true });

export async function main(userInput) {
  const chatCompletion = await getGroqChatCompletion(userInput);
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

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