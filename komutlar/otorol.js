module.exports = {

  name:"otorol",

  $if:"v4",

  code:`

  $if[$message[1]==aç]

  $description[1;**Otorol <#$mentionedChannels[1]> adlı kanala ayarlanmıştır.**]

$color[1;BLUE]

$setServerVar[otorolk;$mentionedChannels[1]]

$onlyIf[$mentionedChannels[1;no]!=undefined;❌ - **Lütfen bir kanal etiketleyiniz.**]

  $endif

  $if[$message[1]==üye]

  $description[1;**Üye rolü <@&$mentionedRoles[1]> adlı role ayarlanmıştır.**]

$color[1;BLUE]

$setServerVar[otoroli;$mentionedRoles[1]]

$onlyif[$mentionedRoles[1;no]!=undefined; Lütfen Bir Rol Belirtiniz]

  $endif

  $if[$message[1]==bot]

  $description[1;**Bot rolü <@&$mentionedRoles[1]> adlı role ayarlanmıştır.**]

$color[1;BLUE]

$setServerVar[otorolb;$mentionedRoles[1]]

$onlyif[$mentionedRoles[1;no]!=undefined; Lütfen Bir Rol Belirtiniz]

  $endif

  $if[$message[1]==kapat]

  $description[1;**Otorol kapanmıştır.**]

$color[1;BLUE]

$setServerVar[otorolb;]

$setServerVar[otoroli;]

$setServerVar[otorolk;]

  $endif

  $onlyPerms[admin;❌ - **Yeterli iznin yok lütfen daha üst bir yetkiliye söyleyiniz.**]

  `

} 