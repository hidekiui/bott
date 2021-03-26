exports.wait = () => {
	return`*「 AGUARDE 」 EM PROCESSO🍁*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 ATIVADO 」 NÍVEL*`
}

exports.lvloff = () => {
	return`*「 DESATIVADO 」 NÍVEL*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUPO AINDA NÃO ESTÁ ATIVADO*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*Parece que você não se registrou no bot, comandos só serão aceitos após se registrar. Para se cadastrar: ${prefix}daftar(nome que você quiser)|(tamanho do pau)*\n*exemplo= ${prefix}daftar clovisnegro${pushname}|17*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*sim falhou tente repetir mais alguns momentos*`
}

exports.linkga = () => {
	return`*Link inválido desculpe*`
}

exports.groupo = () => {
	return`*「COMANDO SÓ FUCIONA EM GRUPOS👀」*`
}

exports.ownerb = () => {
	return`*「KKKKKKKKKKKKK, SÓ MEU DONO LINDO É GOSTOSO PODE USAR 🤡」*`
}

exports.ownerg = () => {
	return`*「MEMBRO COMUM QUERENDO USAR COMANDO DO DONO DO GRUPO, KKKKKKKKKKK❌」*`
}

exports.admin = () => {
	return`*「CALA A BOCA MEMBRO COMUM, COMANDO É SO PARA OS ADM PIKA DA GALÁXIA 😋」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW NÃO ESTIVADO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
	return`*Todas Mensagens Apagada*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*se você não recebeu a mensagem significa que você não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS DO CADASTRO」*\n\nvocê se cadastrou com os dados \n\n┏━➤nome\n┗➤${namaUser}\n┏━➤numero\n┗➤wa.me/${sender.split("@")[0]}\n┏━➤idade\n┗➤${umurUser}\n┏━➤hora de registro\n┗➤${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗➤NOTE : Não se esqueça de salvar o número do dono do BOT e não se esqueça de digitar as regras antes de iniciar o bot😁`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe tapi ${pushname} não o script do dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTA: CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahb}*\n\n_NOTA: CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTA: CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTA: CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTA: CHAT / SEMPRE PARA OBTER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTA: CHAT / SEMPRE PARA OBTER XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╭══─⊱ ❰ *USUÁRIO* ❱ ⊰─══
├➤ *Nome* : ${pushname}
├➤ *Número* : wa.me/${sender.split("@")[0]}
├➤ *Dinheiro* : Rp${uangku}
├➤ *XP* : ${getLevelingXp(sender)}/${reqXp}
├➤ *Nível* : ${getLevelingLevel(sender)}
├➤ *Registros de usuários* : ${_registered.length}
╰──── ⸨ *𝐇𝐈𝐃𝐄𝐊𝐈* ⸩  ⊰─════╯

╭────❰ *CRIADOR MENU* ❱
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}sticker* (vídeo máx. 9seg)
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kuncitext*
├♡ۜۜ͜͡✿➤ *${prefix}textdaun*
├♡ۜۜ͜͡✿➤ *${prefix}nulis*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}silktext*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}makequote*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}toimg*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ocr*
├♡ۜۜ͜͡✿➤ *${prefix}galaxstyle*
├♡ۜۜ͜͡✿➤ *${prefix}jokerlogo*
├♡ۜۜ͜͡✿➤ *${prefix}toxic*
├♡ۜۜ͜͡✿➤ *${prefix}bloodfrosted*
├♡ۜۜ͜͡✿➤ *${prefix}hororblood*
├♡ۜۜ͜͡✿➤ *${prefix}halloween*
├♡ۜۜ͜͡✿➤ *${prefix}firework*
├♡ۜۜ͜͡✿➤ *${prefix}glitch*
├♡ۜۜ͜͡✿➤ *${prefix}blackpink*
├♡ۜۜ͜͡✿➤ *${prefix}goldplay*
├♡ۜۜ͜͡✿➤ *${prefix}hologram*
├♡ۜۜ͜͡✿➤ *${prefix}textbyname*
├♡ۜۜ͜͡✿➤ *${prefix}herrypoter*
├♡ۜۜ͜͡✿➤ *${prefix}greenneon*
├♡ۜۜ͜͡✿➤ *${prefix}metallogo*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ttp*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}thunder*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}bokeh*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}strawberry*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}metaldark*
│
├❰ *ANIME MENU* ❱
│
├♡ۜۜ͜͡✿➤ *${prefix}animesaran*
├♡ۜۜ͜͡✿➤ *${prefix}animesaran2*
├♡ۜۜ͜͡✿➤ *${prefix}husbu2*
├♡ۜۜ͜͡✿➤ *${prefix}anime*
├♡ۜۜ͜͡✿➤ *${prefix}wallpaperanime*
├♡ۜۜ͜͡✿➤ *${prefix}trap*
├♡ۜۜ͜͡✿➤ *${prefix}animefanart*
├♡ۜۜ͜͡✿➤ *${prefix}megumin*
├♡ۜۜ͜͡✿➤ *${prefix}shinobu*
├♡ۜۜ͜͡✿➤ *${prefix}baka*
├♡ۜۜ͜͡✿➤ *${prefix}eroyuri*
├♡ۜۜ͜͡✿➤ *${prefix}happy*
├♡ۜۜ͜͡✿➤ *${prefix}dance*
├♡ۜۜ͜͡✿➤ *${prefix}neko3*
├♡ۜۜ͜͡✿➤ *${prefix}smile*
├♡ۜۜ͜͡✿➤ *${prefix}wallpaper*
├♡ۜۜ͜͡✿➤ *${prefix}slapnime*
├♡ۜۜ͜͡✿➤ *${prefix}shota*
├♡ۜۜ͜͡✿➤ *${prefix}sagiri*
├♡ۜۜ͜͡✿➤ *${prefix}femdom*
├♡ۜۜ͜͡✿➤ *${prefix}waifukawai*
├♡ۜۜ͜͡✿➤ *${prefix}kuni*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwloli3*
├♡ۜۜ͜͡✿➤ *${prefix}kitsune*
├♡ۜۜ͜͡✿➤ *${prefix}yuri*
├♡ۜۜ͜͡✿➤ *${prefix}yaoi*
├♡ۜۜ͜͡✿➤ *${prefix}wancak*
├♡ۜۜ͜͡✿➤ *${prefix}quotesnime*
├♡ۜۜ͜͡✿➤ *${prefix}waifu2*
├♡ۜۜ͜͡✿➤ *${prefix}bj*
├♡ۜۜ͜͡✿➤ *${prefix}boruto*
├♡ۜۜ͜͡✿➤ *${prefix}rize*
├♡ۜۜ͜͡✿➤ *${prefix}kaneki*
├♡ۜۜ͜͡✿➤ *${prefix}kemonomimi*
├♡ۜۜ͜͡✿➤ *${prefix}holo*
├♡ۜۜ͜͡✿➤ *${prefix}naruto*
├♡ۜۜ͜͡✿➤ *${prefix}amv*
├♡ۜۜ͜͡✿➤ *${prefix}minato*                                                                             
├♡ۜۜ͜͡✿➤ *${prefix}gecg*
├♡ۜۜ͜͡✿➤ *${prefix}avatar*
├♡ۜۜ͜͡✿➤ *${prefix}miku*
├♡ۜۜ͜͡✿➤ *${prefix}kurumi*
├♡ۜۜ͜͡✿➤ *${prefix}hinata*
├♡ۜۜ͜͡✿➤ *${prefix}sasuke*
├♡ۜۜ͜͡✿➤ *${prefix}sakura*
├♡ۜۜ͜͡✿➤ *${prefix}akura*
├♡ۜۜ͜͡✿➤ *${prefix}itori*
├♡ۜۜ͜͡✿➤ *${prefix}touka*
├♡ۜۜ͜͡✿➤ *${prefix}rem*
├♡ۜۜ͜͡✿➤ *${prefix}chika*
│
│
├❰ *MEDIA MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}beritahoax*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}brainly*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}pinterest*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ytmp3*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ytmp4*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}cerpen*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}husbu*
├♡ۜۜ͜͡✿➤ *${prefix}waifu2*
├♡ۜۜ͜͡✿➤ *${prefix}waifu*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}loli*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}loli2*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}neko*
├♡ۜۜ͜͡✿➤ *${prefix}neko2*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}nekonime*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomanime*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomhusbu*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomcyberspace*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomexo*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}blackpink*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomgame*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randommountain*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomloli*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}randomprogramer*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hartatahta*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}meme*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}memeindo*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}tts*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}play*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}lirik*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}ssweb*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}map*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}stalkig*
├♡ۜۜ͜͡✿➤ *${prefix}afk*
├♡ۜۜ͜͡✿➤ *${prefix}unafk*
├♡ۜۜ͜͡✿➤ *${prefix}asupan*
│    
├❰ *LIMITE MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}limit*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}buylimit*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}dompet*
│
├❰ *NSFW MENU* ❱
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}pokemon*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}anjing*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}nsfwloli*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwneko*
├♡ۜۜ͜͡✿➤ *${prefix}solo*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwtrap*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwpussy*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwyuri*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}nhentai*
├♡ۜۜ͜͡✿➤ *${prefix}ero*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwloli2*
├♡ۜۜ͜͡✿➤ *${prefix}sideoppai*
├♡ۜۜ͜͡✿➤ *${prefix}nsfwwaifu*
├♡ۜۜ͜͡✿➤ *${prefix}ecchi*
├♡ۜۜ͜͡✿➤ *${prefix}nekopoi* <judul>
│
├❰ *GRUPO MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}hidetag*
├♡ۜۜ͜͡✿➤ *${prefix}del*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}grouplist*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}level*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}leaderboard*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}linkgc*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}tagall*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setpp*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}add*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kick*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setname*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setdesc*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}demote*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}promote*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}listadmin*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}grupo* [abrir/fechar]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}nivel* [ativar/desativar]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}nsfw* [1/0]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}simih* [1/0]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}welcome* [1/0]
│
├❰ *DONO MENU* ❱ 
│
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}bc*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}bcgc*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}kickall* O que fazer Tod? >:
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setreply*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setprefix*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}clearall*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}block*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}unblock*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}listblock*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}leave*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}event* [1/0]
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}clone*
├♡ۣۜۜ፝͜͜͡͡✿➤ *${prefix}setppbot*
│
│
├───⊱⸨ *𝐇𝐈𝐃𝐄𝐊𝐈* ⸩  ⊰─═══
│©whatsapp2 em breve nos cinemas
╰──── ⸨ *𝐇𝐈𝐃𝐄𝐊𝐈* ⸩  
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 NÍVEL 」*
┏𖥻ꦼꦽ➳ *Nome* : ${pushname}
┣𖥻ꦼꦽ➳ *Número* : wa.me/${sender.split("@")[0]}
┣𖥻ꦼꦽ➳ *Xp* : ${getLevelingXp(sender)}
┗𖥻ꦼꦽ➳ *Nível* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe irmão ${pushname} Seu limite para hoje acabou*\n*O limite é zerado a cada 24:00 horas*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE DO USUÁRIO」*
o resto do seu limite : ${limitCounts}

🍁NOTE : para usar ter limite: pode esperar resetar  de nível ou de buylimit🍁`
}

exports.satukos = () => {
	return`Adicionar: 1 / habilitar ou 0 / desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 SALDO 」* ━┓\n┣𖥻ꦼꦽ➳ *Nome* : ${pushname}\n┣𖥻ꦼꦽ➳ *Número* : ${sender.split("@")[0]}\n┣𖥻ꦼꦽ➳ *Dinheiro* : ${uangkau}\n┗━━━━━━━━━━`
}
