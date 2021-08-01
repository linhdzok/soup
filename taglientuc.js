module.exports.config = {
    name: "taglientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group","Admin",
    usages: "taglientuc @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 3000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 6000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 9000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 12000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 15000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 19000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 21000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 24000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 27000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 30000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 33000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 36000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 39000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 42000);
setTimeout(() => {a({body: "Alo con lợn "+" "+name, mentions: arraytag}, )} , 45000);
setTimeout(() => {a({body: "Chủ tao cần gặp mày nè con chó lồn"+" "+name, mentions: arraytag}, )} , 48000);
setTimeout(() => {a({body: "Chủ tao cần gặp mày nè con chó lồn"+" "+name, mentions: arraytag}, )} , 51000);
setTimeout(() => {a({body: "Chủ tao cần gặp mày nè con chó lồn"+" "+name, mentions: arraytag}, )} , 54000);
setTimeout(() => {a({body: "Chủ tao cần gặp mày nè con chó lồn"+" "+name, mentions: arraytag}, )} , 57000);
setTimeout(() => {a({body: "Chủ tao cần gặp mày nè con chó lồn"+" "+name, mentions: arraytag}, )} , 60000);
setTimeout(() => {a({body: "Chủ tao cần gặp mày nè con chó lồn"+" "+name, mentions: arraytag}, )} , 63000);
setTimeout(() => {a({body: "Chủ tao cần gặp mày nè con chó lồn"+" "+name, mentions: arraytag}, )} , 66000);
setTimeout(() => {a({body: "Chủ tao cần gặp mày nè con chó lồn"+" "+name, mentions: arraytag}, )} , 69000);
setTimeout(() => {a({body: "Chủ tao cần gặp mày nè con chó lồn"+" "+name, mentions: arraytag}, )} , 72000);
setTimeout(() => {a({body: "Chủ tao cần gặp mày nè con chó lồn"+" "+name, mentions: arraytag}, )} , 75000);
setTimeout(() => {a({body: "Giờ đâu phải giờ ngủ dậy đi bạn ơi"+" "+name, mentions: arraytag}, )} , 78000);
setTimeout(() => {a({body: "Giờ đâu phải giờ ngủ dậy đi bạn ơi"+" "+name, mentions: arraytag}, )} , 81000);
setTimeout(() => {a({body: "Giờ đâu phải giờ ngủ dậy đi bạn ơi"+" "+name, mentions: arraytag}, )} , 84000);
setTimeout(() => {a({body: "Giờ đâu phải giờ ngủ dậy đi bạn ơi"+" "+name, mentions: arraytag}, )} , 87000);
setTimeout(() => {a({body: "Giờ đâu phải giờ ngủ dậy đi bạn ơi"+" "+name, mentions: arraytag}, )} , 90000);
setTimeout(() => {a({body: "Bạn ơi dậy thôi nào"+" "+name, mentions: arraytag}, )} , 93000);
setTimeout(() => {a({body: "Bạn ơi dậy thôi nào"+" "+name, mentions: arraytag}, )} , 96000);
setTimeout(() => {a({body: "Bạn ơi dậy thôi nào"+" "+name, mentions: arraytag}, )} , 99000);
setTimeout(() => {a({body: "Bạn ơi dậy thôi nào"+" "+name, mentions: arraytag}, )} , 102000);
setTimeout(() => {a({body: "Dậy đi con vợ "+" "+name, mentions: arraytag}, )} , 105000);
setTimeout(() => {a({body: "Dậy đi con vợ "+" "+name, mentions: arraytag}, )} , 108000);
setTimeout(() => {a({body: "Dậy đi con vợ "+" "+name, mentions: arraytag}, )} , 111000);
setTimeout(() => {a({body: "Dậy đi con vợ "+" "+name, mentions: arraytag}, )} , 114000);
setTimeout(() => {a({body: "Dậy đi con vợ "+" "+name, mentions: arraytag}, )} , 117000);
setTimeout(() => {a({body: "Dậy đi con vợ "+" "+name, mentions: arraytag}, )} , 120000);
setTimeout(() => {a({body: "Dậy đi con vợ "+" "+name, mentions: arraytag}, )} , 123000);
setTimeout(() => {a({body: "Dậy đi con vợ "+" "+name, mentions: arraytag}, )} , 126000);
setTimeout(() => {a({body: "Dậy đi con vợ "+" "+name, mentions: arraytag}, )} , 129000);
setTimeout(() => {a({body: "Dậy đi con vợ "+" "+name, mentions: arraytag}, )} , 132000);
setTimeout(() => {a({body: "Dậy đi nào bé yêu của anh"+" "+name, mentions: arraytag}, )} , 135000);
setTimeout(() => {a({body: "Dậy đi nào bé yêu của anh"+" "+name, mentions: arraytag}, )} ,138000);
setTimeout(() => {a({body: "Dậy đi nào bé yêu của anh"+" "+name, mentions: arraytag}, )} ,141000);
setTimeout(() => {a({body: "Dậy đi nào bé yêu của anh"+" "+name, mentions: arraytag}, )} , 144000);
setTimeout(() => {a({body: "Dậy đi nào bé yêu của anh"+" "+name, mentions: arraytag}, )} , 147000);
setTimeout(() => {a({body: "Dậy đi nào bé yêu của anh"+" "+name, mentions: arraytag}, )} , 150000);
setTimeout(() => {a({body: "Dậy đi nào bé yêu của anh"+" "+name, mentions: arraytag}, )} , 153000);
setTimeout(() => {a({body: "Dậy đi nào bé yêu của anh"+" "+name, mentions: arraytag}, )} , 156000);
setTimeout(() => {a({body: "Dậy đi nào bé yêu của anh"+" "+name, mentions: arraytag}, )} , 159000);
setTimeout(() => {a({body: "Tao nghỉ 1 chút đã ko mark lại zucc"+" "+name, mentions: arraytag}, )} , 160000);
setTimeout(() => {a({body: "Địt mẹ tỉnh coi"+" "+name, mentions: arraytag}, )} , 163000);
setTimeout(() => {a({body: "Địt mẹ tỉnh coi"+" "+name, mentions: arraytag}, )} , 166000);
setTimeout(() => {a({body: "Địt mẹ tỉnh coi"+" "+name, mentions: arraytag}, )} , 169000);
setTimeout(() => {a({body: "Địt mẹ tỉnh coi"+" "+name, mentions: arraytag}, )} , 172000);
setTimeout(() => {a({body: "Địt mẹ tỉnh coi"+" "+name, mentions: arraytag}, )} , 175000);
setTimeout(() => {a({body: "Địt mẹ tỉnh coi"+" "+name, mentions: arraytag}, )} , 178000);
setTimeout(() => {a({body: "Địt mẹ tỉnh coi"+" "+name, mentions: arraytag}, )} , 181000);
setTimeout(() => {a({body: "Địt mẹ tỉnh coi"+" "+name, mentions: arraytag}, )} , 184000);
setTimeout(() => {a({body: "Địt mẹ tỉnh coi"+" "+name, mentions: arraytag}, )} , 187000);
setTimeout(() => {a({body: "Địt mẹ tỉnh coi"+" "+name, mentions: arraytag}, )} , 190000);
setTimeout(() => {a({body: "Địt mẹ mày online đi tao nói đàng hoàng tử tế mà đéo tỉnh à"+" "+name, mentions: arraytag}, )} , 193000);
setTimeout(() => {a({body: "Địt mẹ mày online đi tao nói đàng hoàng tử tế mà đéo tỉnh à"+" "+name, mentions: arraytag}, )} , 196000);
setTimeout(() => {a({body: "Địt mẹ mày online đi tao nói đàng hoàng tử tế mà đéo tỉnh à"+" "+name, mentions: arraytag}, )} , 199000);
setTimeout(() => {a({body: "Địt mẹ mày online đi tao nói đàng hoàng tử tế mà đéo tỉnh à"+" "+name, mentions: arraytag}, )} , 201000);
setTimeout(() => {a({body: "Địt mẹ mày online đi tao nói đàng hoàng tử tế mà đéo tỉnh à"+" "+name, mentions: arraytag}, )} , 204000);
setTimeout(() => {a({body: "Địt mẹ mày online đi tao nói đàng hoàng tử tế mà đéo tỉnh à"+" "+name, mentions: arraytag}, )} , 207000);
setTimeout(() => {a({body: "Địt mẹ mày online đi tao nói đàng hoàng tử tế mà đéo tỉnh à"+" "+name, mentions: arraytag}, )} , 210000);
setTimeout(() => {a({body: "Địt mẹ mày online đi tao nói đàng hoàng tử tế mà đéo tỉnh à"+" "+name, mentions: arraytag}, )} , 213000);
setTimeout(() => {a({body: "Địt mẹ mày online đi tao nói đàng hoàng tử tế mà đéo tỉnh à"+" "+name, mentions: arraytag}, )} , 217000);
setTimeout(() => {a({body: "Địt mẹ mày online đi tao nói đàng hoàng tử tế mà đéo tỉnh à"+" "+name, mentions: arraytag}, )} , 220000);
setTimeout(() => {a({body: "Địt mẹ tao xin mày đấy hãy tỉnh lại đi"+" "+name, mentions: arraytag}, )} , 223000);
setTimeout(() => {a({body: "Địt mẹ tao xin mày đấy hãy tỉnh lại đi"+" "+name, mentions: arraytag}, )} , 226000);
setTimeout(() => {a({body: "Địt mẹ tao xin mày đấy hãy tỉnh lại đi"+" "+name, mentions: arraytag}, )} , 229000);
setTimeout(() => {a({body: "Địt mẹ tao xin mày đấy hãy tỉnh lại đi"+" "+name, mentions: arraytag}, )} , 232000);
setTimeout(() => {a({body: "Địt mẹ tao xin mày đấy hãy tỉnh lại đi"+" "+name, mentions: arraytag}, )} , 235000);
setTimeout(() => {a({body: "Địt mẹ tao xin mày đấy hãy tỉnh lại đi"+" "+name, mentions: arraytag}, )} , 238000);
setTimeout(() => {a({body: "Địt mẹ tao xin mày đấy hãy tỉnh lại đi"+" "+name, mentions: arraytag}, )} , 241000);
setTimeout(() => {a({body: "Địt mẹ tao xin mày đấy hãy tỉnh lại đi"+" "+name, mentions: arraytag}, )} , 244000);
setTimeout(() => {a({body: "Địt mẹ tao xin mày đấy hãy tỉnh lại đi"+" "+name, mentions: arraytag}, )} , 247000);
setTimeout(() => {a({body: "Rồi mày có hiện hồn không"+" "+name, mentions: arraytag}, )} , 250000);
setTimeout(() => {a({body: "Địt mẹ mày không hiện hồn à"+" "+name, mentions: arraytag}, )} , 253000);
setTimeout(() => {a({body: "Không hiện hồn thì thôi tao mệt rồi"+" "+name, mentions: arraytag}, )} , 256000);
setTimeout(() => {a({body: "chào tạm biệt mày nhé"+"+"name, mentions: arraytag}, )} , 259000); 

  }
