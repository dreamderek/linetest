let linebot = require('linebot');

// 初始化 line bot 需要的資訊，在 Heroku 上的設定的 Config Vars，可參考 Step2
let bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

bot.push("Uf016d2662b586e2ee9d0202711557de", "test");

// 當有人傳送訊息給 Bot 時
bot.on('message', function (event) {
  // 回覆訊息給使用者 (一問一答所以是回覆不是推送)
  switch (event.message.text) {
    case "1":
      event.reply(`你說了 ${event.source.userId}`);
      break;
    case "2":
      event.reply(`你說了 ${event.message.id}`);
      break;
    case "3":
      event.reply(`你說了 ${event.message.type}`);
      break;
    default:
      event.reply(`你說了 ${event.message.text}`);
      break;
  }
});

// Bot 所監聽的 webhook 路徑與 port，heroku 會動態存取 port 所以不能用固定的 port，沒有的話用預設的 port 5000
bot.listen('/', process.env.PORT || 5000, function () {
  console.log('機器人上線啦！');
});


let express = require('express');
let app = express();

app.get('/', (res, req) => {
  req.send("test");
});
app.listen(8888);