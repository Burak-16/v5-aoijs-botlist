const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.token,
prefix: "$getServerVar[prefix]",
intents: "all"
})


//Command Handler
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./komutlar/")
//Command Handler

//Callbacks


bot.onMessage()

bot.onLeave()

bot.onMessageDelete();

bot.onJoin()

bot.onInteractionCreate()

bot.onMessageUpdate()

bot.onMessageDeleteBulk()

bot.onGuildUpdate()

bot.onGuildUnavailable()

bot.onRoleCreate()

bot.onRoleUpdate()

bot.onRoleDelete()

bot.onChannelCreate()

bot.onChannelUpdate()

bot.onChannelDelete()

bot.onChannelPinsUpdate()

bot.onStageInstanceCreate()

bot.onStageInstanceUpdate()

bot.onStageInstanceDelete()

bot.onThreadCreate()

bot.onThreadUpdate()

bot.onThreadDelete()

bot.onThreadListSync()

bot.onThreadMemberUpdate()

bot.onThreadMembersUpdate()

bot.onMemberUpdate()

bot.onMemberAvailable()

bot.onMembersChunk()

bot.onEmojiCreate()

bot.onEmojiDelete()

bot.onEmojiUpdate()

bot.onStickerCreate()

bot.onStickerDelete()

bot.onStickerUpdate()

bot.onBanAdd()

bot.onBanRemove()

bot.onInviteCreate()

bot.onInviteDelete()

bot.onReactionAdd()

bot.onReactionRemove()

bot.onReactionRemoveAll()

bot.onReactionRemoveEmoji()

bot.onVoiceStateUpdate()

bot.onPresenceUpdate()

bot.onTypingStart()

bot.onApplicationCmdCreate()

bot.onApplicationCmdDelete()

bot.onApplicationCmdUpdate()

bot.onUserUpdate()

bot.onVariableCreate()

bot.onVariableDelete()

bot.onVariableUpdate()

bot.onRateLimit()

bot.onWebhookUpdate()

//Callbacks


//Status 

bot.status({

    text: "Bear Code",//buraya durum yazısı

    type: "PLAYING",//buraya oynuyor bölümü PLAYING LISTENING WATCHING STREAMING şeklindede yapabilirsiniz

    status: "dnd",//buraya status kısmı dnd idle online şeklinde yapabilirsiniz

    time: 12

})

//Status 


//Değişkenler 

bot.variables({

  prefix:"!",

  botlog:"Ayarlanmamıs",

  botkanal:"Ayarlanmamıs",

  yetkililog:"Ayarlanmamıs",

  yetkilirol:"Ayarlanmamıs",
  
  başvuranbotu:"Ayarlanmamıs",
  
  otorolk:"Ayarlanmamıs",

  otorolb:"Ayarlanmamıs",

  otoroli:"Ayarlanmamıs"

  })

//Değişkenler


//Örnek komut (ping)
bot.command({
name: "ping",
code: `Ping $ping ms `
})

bot.leaveCommand({

  channel:"$getServerVar[botlog]",

  code:`

  $author[Baybay $userTag ve botu $userTag[$getServerVar[başvuranbotu;$authorID]];$authorAvatar]

  $description[$userTag sunucudan ayrıldığı için botu $userTag[$getServerVar[başvuranbotu;$authorID]] sunucudan atıldı]

  $color[GREEN]

  $kick[$getServerVar[başvuranbotu;$authorID]]

  $suppressErrors

  `
  }) 

bot.joinCommand({ 

channel: "$getServerVar[otorolk]",

  $if:"v4",

code: `

$if[$isBot[$authorID]==false]

$description[1;**$usertag** adlı üyeye <@&$getServerVar[otoroli]> rolü verilmiştir.]

$color[1;$getRoleColor[$getServerVar[otoroli]]

$giveRole[$guildID;$authorID;$getServerVar[otoroli]]

$else

$description[1;**$usertag** adlı bota <@&$getServerVar[otorolb]> rolü verilmiştir.]

$color[1;$getRoleColor[$getServerVar[otorolb]]

$giveRole[$guildID;$authorID;$getServerVar[otorolb]]

$endif

`
})


