//imports the dotenv library
//and allow us to access variables inside dotenv dile by using process.env.TOKEN
require("dotenv").config();
//importing the masto api that we will use
const m = require("masto");
//importing claude
const Anthropic = require("@anthropic-ai/sdk");
//file status
const fs = require("fs");

//set up the ability to use the masto library
//this is very similar to making app
//const app= express()
const masto = m.createRestAPIClient({
  url: "https://networked-media.itp.io",
  accessToken: process.env.TOKEN, // token is the variable name I gave it in .env
});

const claude = new Anthropic({ apiKey: process.env.CLAUDE });

let lastPost = "";

//function makeStatus(){}
const makeStatus = async () => {
  //the whole process
  let instructions = fs.readFileSync("CLAUDE.md", "utf8");
  let logs = fs.readFileSync("dailylogs.txt", "utf8");
  let prompt = `${instructions}\n\nHere are my recent logs:\n${logs}`;

  //add the last post so claude keeps continuity
  if (lastPost !== "") {
    prompt =
      prompt +
      `\n\nThe last post was: "${lastPost}" — make sure the next one follows believably from this.`;
  }

  const response = await claude.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 450,
    messages: [{ role: "user", content: prompt }],
  });

  let postText = response.content[0].text;

  //character limit
  if (postText.length > 450) {
    postText = postText.slice(0, 450);
  }

  const s = await masto.v1.statuses.create({
    status: postText,
    visibility: "public", //to test I can make private
  });
  console.log(s.url);

  lastPost = postText;
};

//will post one status one time
// makeStatus();
//this will post status one time every 30 minutes
setInterval(makeStatus, 1800000);
