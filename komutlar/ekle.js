module.exports = {

  name: "bot-ekle",
  
  aliases:["botekle","başvuru","başvur","ekle"],

  code: `

  $deletecommand

  $setServerVar[başvuranbotu;$message[1];$authorID]

  $useChannel[$getServerVar[yetkililog]]

<@$authorID>,<@&$getServerVar[yetkilirol]> 

$author[1;$userTag;$useravatar[$authorid];$useravatar[$authorid]]

$description[1;<@$authorID> Adlı üye **$userTag[$message[1]]( \`$message[1]\` )** adlı botu ile başvurdu

Prefixi:  \`$message[2]\`

[0 Perm](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot+applications.commands&permissions=0) | [8 perm](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot+applications.commands&permissions=8)]

$color[1;ORANGE]

$thumbnail[1;$useravatar[$message[1]]]

$channelSendMessage[$channelID;\`$userTag[$message[1]]\` adlı botun başarıyla sıraya eklendi{delete:5s}]

$onlyIf[$message[2]!=;❌ **Kullanım:** \`$getServerVar[prefix]bot-ekle $clientID $getServerVar[prefix]\` **Hata:** Prefix yazılmadı{delete:7s}]

$onlyIf[$isBot[$message[1]]==true;❌ **Kullanım:** \`$getServerVar[prefix]bot-ekle $clientID $getServerVar[prefix]\` **Hata:** Girilen id bir bota ait değil{delete:5s}]

$onlyIf[$isNumber[$message[1]]==true;❌ **Kullanım:** \`$getServerVar[prefix]bot-ekle $clientID $getServerVar[prefix]\` **Hata:** ID'niz sayı olmalı{delete:5s}]

$onlyIf[$message[1]!=;❌ **Kullanım:** \`$getServerVar[prefix]bot-ekle $clientID $getServerVar[prefix]\` **Hata:** ID girilmedi{delete:5s}]

$onlyIf[$channelID==$getServerVar[botkanal]; Başvuruları Sadece <#$getServerVar[botkanal]> Kanalında Yapabilirsiniz]

$onlyIf[$getServerVar[botkanal]!=;⚠️ Bot Ekleme Kanalı Ayarlanmamış]

$onlyIf[$getServerVar[botlog]!=;⚠️ Botlog Kanalı Ayarlanmamış]

$onlyIf[$getServerVar[yetkilirol]!=;⚠️ Yetkili Rolü Ayarlanmamış]

$onlyIf[$getServerVar[yetkililog]!=;⚠️ Yetkili Logu Ayarlanmamış]

`

} 

