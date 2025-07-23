import { Client, GatewayIntentBits } from "discord.js";
import { Bot } from "./structs/Bot";
import * as play from "play-dl";

// ✅ Configura cookies (via variável de ambiente do Railway)
if (process.env.YT_COOKIE) {
  play.setToken({
    youtube: {
      cookie: process.env.YT_COOKIE
    }
  });
  console.log("✅ Cookies do YouTube configurados com sucesso!");
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
