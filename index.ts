import { Client, GatewayIntentBits } from "discord.js";
import { Bot } from "./structs/Bot";
import * as play from "play-dl";

// ✅ Configura cookies (via variável de ambiente do Railway)
if (process.env.YT_COOKIE) {
  const cookies = process.env.YT_COOKIE_BASE64
  ? Buffer.from(process.env.YT_COOKIE_BASE64, 'base64').toString('utf-8')
  : null;

  if (!cookies) {
    console.warn("⚠️ Falha no decode da cookie.");
  } else {
    play.setToken({
      youtube: {
        cookie: cookies
      }
    });
    console.log("✅ Cookies do YouTube configurados com sucesso!");
  }  
} else {
  console.warn("⚠️ Nenhum cookie configurado! Alguns vídeos podem falhar.");
}

export const bot = new Bot(
  new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.DirectMessages
    ]
  })
);
