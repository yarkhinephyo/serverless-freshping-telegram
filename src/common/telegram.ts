import "axios";
import axios from "axios";
import createError from "http-errors";

export const sendMessage = async (
  chat_id: string, message: string
) => {
  try{
    await axios.get(
      `https://api.telegram.org/bot${process.env["BOT_TOKEN"]}/sendMessage?chat_id=${chat_id}&text=${message}`
    );
  } catch (error) {
    console.log(error);
    throw createError(400, JSON.stringify({ errorMessage: "Failed to send to telegram chat" }), error);
  }
}