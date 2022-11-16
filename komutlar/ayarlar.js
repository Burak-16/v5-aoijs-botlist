module.exports = {

  name:"ayarlar",

  code:`

 

  $title[$serverName Sunucusunun Botlist Ayarları ]

  $description[ 

  

   Yetkili Rol: <@&$getServerVar[yetkilirol]>
   
   
   Bot Ekleme Kanalı <#$getServerVar[botkanal]>


   Yetkili log: <#$getServerVar[yetkililog]>

  
   Bot Log: <#$getServerVar[botlog]>

   
   Otorol Kanal: <#$getServerVar[otorolk]>
   
   
   Otorol Üye: <@&$getServerVar[otoroli]>
   
   
   Otorol Bot: <@&$getServerVar[otorolb]>
   
   
   Prefix: $getServerVar[prefix]]
   

  

  $color[RANDOM]

  

  $suppressErrors[Öncelikle Tüm Sistemleri Ayarlaman lazım]

  `}