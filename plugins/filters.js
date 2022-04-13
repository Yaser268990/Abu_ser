/* Copyright (C) 2021 Afx-Abu
Abu_ser
*/
const fs = require('fs')
const Abu = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== false ? Config.DISBGM.split(',') : [];
const afn = Config.PLKS !== false ? Config.PLKS.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');


Abu.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Abu.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.GEAR == 'one') {  
    
Abu.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919895809960@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/bgm/owner.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/bgm/owner.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        
const array = ['500 Dollars','Aaradukayanu','aaziyat','Ah ce mai','Ainsi bas la vida','arcade','Bad boy','Bad chick','Bad','Barbie Girl',' Beggin','Bejos','Bheeshma parvam','Bilionera','Black Swan','Bon bon','Boss bitch','Boy bye','Bumpy ride','Chammak Challo','changes','Cheap Thrills','Ciao Adios','Con calma','copines','Dakini','Dandelions','Dead or alive','Dick','Dil ko karar aaya','Djeale','Dont you need somebody','Dynamite','Dynasty','Ego','Enemy','Everybody Dies In Their Nightmare','Excuses','Favorito','For real','Gimme more','Glamorous','Habibi','Habits','harleys in hawaii','Heatwaves','Hey mama','High school','Hips Dont Lie','Hmm haa','Hookah bar','How you like that','I dont know why','I feel like im drowning','I need to know','Industry','Infinity','Into your arms','Itiber','Jalebi baby','Jeena','Khaak barabar','Levitating','Love nwantity edit','Magischa','mahaan','Main dhoondne','Make It Bun Dem','Me necessita','Memories','Mental manadhil','Mergem mai departe','Middle of the night','Money','Mood','Moriro da rae','Mudhal Nee Mudivum Nee','Nagumo','Night changes shayad','No idea','No lie','Numb','Often','On my own','On the floor','One dance','Pachchai vanna','Pata chalega','Pattamarangal','PH Intro Ranjha','Ps5','Raanjhana','Raataan lambiyan','Randall','Rich girl','Right round','Rowdy×arabic','Safari','Say jambo','See me fall','See you again edit','Sexyback','Side To Side','Soch na sake','Solo','Starboy','Stay','Step on up','Such a whore','Taki taki','Telepatia','Thara','They looking at me','This Could Be Us','Thousands of Summer','Thunderlike','Toofan editedd','touta','Un kaadhal','Unforgettable','Unstoppable','Va bene','Vo voy','Without me','Woman','worth it','Yedho mayakkam','You are perfect','Your Body Next To Me','Your love','Your Woman','zaalima','name entha','King','Kooi','Love','menu','alive','git','Thamasha','big fan','charlie','gd n8','kar98','love u','Endi','endi','noob','Poweresh','Perfect ok','perfect ok','power','saji','sed','single','waiting','Myr','myr','Malappuram','uyir','thug','avastha','Moodesh','sketched','Cr7','Z aayi','manasilayo','Hi','nirtheda','Aarulle','Cr7 back','Portugal','ennitt','Boss',,'Haters','ayn','Kgf','sed bgm','Messi','Hehe','hehe','Set aano','set aano','Bot myren','Venda','venda','chadhi','Chadhi','Hbday','hbday','Bot','R yyi padicho','Myre','myre','Umbi','umbi','parayatte','Fresh','fresh','Ok da','ok da','Feel aayi','feel aaayi','Scene','scene','Ok bei','ok bei','Da','Kozhi','kozhi','adi','Adi','kali','Kali','thantha','Thantha','Aysheri','aysheri','thund','Thund','thot','Thot','sneham','Sneham','pm','Pm','paatt','Paatt','njan','Njan','life','Life','Killadi','killadi','good bye','Good bye','evide','Evide','achan','Achan','kunna','Kunna','broken','Broken','why','Why','enth patti','Enth patti','pani','Pani','padicho','Padicho','paad','Paad','Chatho','chatho','lover','Lover','nanayikoode','Nanayikoode','Die','die','hate','Hate','Lamiya engineering','lamiya engineering','nallath','Nallath','Neymer','neymer','patti','Patti','poora','Poora','Rohit','rohit','thall','Thall','Theri','theri','potte','Potte','Caption','caption','onn poyi','Onn poyi','problem','Problem','Chill','chill','help','Help','Kunda','kunda','povano','sthalam','Sthalam','tholvi','Tholvi','vannu','Vannu','malayalam','Malayalam','vaa','Vaa','lub','Ayin','thyr','Thyr','sad','Sed','kiss','Kiss','baby','Baby','hi','voice','love','Admin','admin','Remove','remove','boss','sorry','Owner','owner','Gud nyt','dream','Dream','Avastha','Bye','bye','Nijin','What','Voice','Vilikk','Verupikkalle','Vazha','Vada','Va','Undakanni','Unda','Uff','Troll','Time','Thair','Start','Sry','Sorry','Senti','Sed akki','Sarasu','Poyo','Povalle','Pova','pottan','Podi','Poda','Parayatte','Noob','Nikk','Nee etha','Name','Naayi','Mole','Mng','Mass','Marannu','Mandan','Manassilayo','Line','Kollum','Kollatte','Kannappi','Jocker','Ivan','Ijjathi','Jerry','Insult','Home','Happy birthday','Hacker','Group chathu','Group active','Good night','Friend','Food','Fan','Dude','Dora','Chaya','Business','Bott chathu','Block','Bgm1','Ayn','Audio','Aliya','Air','Age','Ara','Pubg','Pes','Bgmi','Husni','Nijin husni','Xxxtentacion','Mm','Hello','Maalutty','Free fire','Ff','Pamb','I love you','Parayula','Wifi password','complan','Sp','Aara','Bgm','Bgm2','Bgm3','Bgm4','Bgm5','Bgm6','song','Munna','video','insta','husni','nijin','Nijin Husni','sticker','photo','Football','Isl','Lm10','M','Neymar','Njr','Ronaldo','football','isl','lm10','m','Aa','Aa da','aa','Aaa','Hbd','hbd','Hlo','Haapy','Sad','Happy birthday','Busy','sad','happy','Happy Birthday','she','Only','group','girls','good morning','you','i am back','online','mouse','joker','Ha','King','poda','love','song','Boss','owner','beast']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./media/bgm/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.GEAR == 'two') {    
    Abu.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '917025994178@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/bgm/owner.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/bgm/owner.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
        var uri = encodeURI(match[1])
const array = ['Hihi']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./media/bgm/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Abu.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '917025994178@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./media/stickers/Hi.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['asena','ayin','back','Back','Bot','fuck','Fuck','Hehe','Hello','Kill','kill','kiss','line','love','mwolu','Mwolu','single','tha','thund','z','Z','bie','Bie','Kaztro','Sad','Poocha','Poda','Bomb','Ayin','Ariyo','Alone','Pubg','Pes','Bgmi','Ff','Free fire','chavanam','Manassilayo','Manassilayilla','Kodathi','Kollum','vatt','Gaanam','Single','Maalutty','Xxxtentacion','Aa','Pottan','Budhi','Love','Njan','Mazha','Hi','Vella','Patt','Colour','Hacker','Ok','tts','Hack','Hii']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./media/stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
    
    async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
 
     Abu.addCommand({on: 'text', fromMe: false}, (async (message, match) => {

        if(Config.THERI_KICK){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        
const array = afn 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
    await message.client.sendMessage(message.jid,'you used a bad word that we dont allow here \n -admin panal ', MessageType.text, {quoted: message.data });  
    await message.client.groupRemove(message.jid, [message.data.participant]);                
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));