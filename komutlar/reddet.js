module.exports = {

  name:"reddet",

  code:`

 $channelSendMessage[$getServerVar[botlog];<@$message[1]> $userTag[$getServerVar[başvuranbotu;$message[1]]] adlı botun Reddedildi]

 $description[1;Bot Başarılı bir şekilde reddedildi ve loglandı]

 $color[RANDOM]

 $onlyIf[$getServerVar[başvuranbotu;$message[1]]!=;❌ Kullanıcı bir bot için başvurmamış]

 $onlyif[$isnumber[$message]!=false;Bir İd Gir]
 
 $onlyForRoles[$getServerVar[yetkilirol];Bunun İçin Yetkili Rolüne Sahip Olman lazım]

  `

  }