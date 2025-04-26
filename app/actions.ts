"use server";

export async function generateImageAction(prompt: string) {
  const response = await fetch(`${process.env.BACKEND_URL}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: prompt }),
  });

  const imageData = await response.text();
  return imageData;
}
