
exports.commands = {
    monothreat: function(target, room, user) {
        if (!this.can("info")) return false;
        let types = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];
        let randType = types[~~(Math.random() * types.length)];
	this.reply('/etour monotype');
        this.reply('/tour scouting off');
	this.reply('/tour autodq 2');
	this.reply('/tour name Monothreat ' + randType);
        this.reply('/wall This is a ' + randType + ' monothreat tournament, bring ' + randType + ' or be disqualified!');
    	},
     monotype: function () {
        if (!this.can("info")) return;
	this.reply('/etour monotype');
        this.reply('/tour scouting off');
	this.reply('/tour autodq 2');
	},
     test2: function (arg, user, room) {
        if (!this.can("info")) return this.reply('lol you cant use this command');

	this.reply('/me does a test');
	},
     test3: function (arg, by, room, cmd) {
        if (!this.can("info")) return this.reply('lol you cant use this command');
		this.say('rockethq', 'A tournament was made in <<' + room + '>>');
	this.reply('/me does a test');
	},
     r: 'runtour',
         runtour: function (arg, user, room) {
      if (!this.can('info')) return;
      var atimer = parseFloat(arg).toFixed(1);
      if (atimer == 'NaN') return this.reply('Error: The Argument must be a number!');
      if (atimer > 10) return this.reply('Error: The Argument is to high!');
      if (atimer < 0) return this.reply('Error: The Argument cant be a negative number!');
      if (atimer <= 0) this.reply('The Tournament will be starting __right now__');
      if (atimer > 0) this.reply("The Tournament will be starting in " + atimer + " minutes");
      let time = atimer * 1000 * 60; // minutes
      let self = this;

      setTimeout(() => {
        self.reply(`/tour start`); 
        self.reply("/tour autodq 2");
        self.reply("/tour remind");
	self.reply('/mn ' + user + ' Started a tournament.');
      }, time);
     },
     cc1v1: function () {
	if (!this.can("info")) return;
	this.reply('/etour Challenge Cup 1v1');
	this.reply('/tour autodq 2');
	},
     assb2: function () {
	if (!this.can("info")) return;
	this.reply('/etour gen7azuresuperstaffbrosii');
	this.reply('/tour autodq 2');
	},
     assb2cc1v1: function () {
	if (!this.can("info")) return;
	this.reply('/etour gen7azuresuperstaffbrosiichallengecup1v1');
	this.reply('/tour autodq 2');
	},
     redo: function () {
	if (!this.can("info")) return;
	let prize = Math.floor((Math.random() * 100));
	if (prize < 34) return this.reply("redo");
	if (prize < 101) return this.reply("no");
	},
     randombattle: function (arg, room, user) {
        if (!this.can("info")) return;
	if (arg == "1") this.reply('/etour gen1randombattle');
	if (arg == "2") this.reply('/etour gen2randombattle');
	if (arg == "3") this.reply('/etour gen3randombattle');
	if (arg == "4") this.reply('/etour gen4randombattle');
	if (arg == "5") this.reply('/etour gen5randombattle');
	if (arg == "6") this.reply('/etour gen6randombattle');
	if (arg == "7") this.reply('/etour gen7randombattle');
	if (!arg) this.reply('/etour randombattle');
	this.reply('/tour autodq 2');
	},
     randomdoubles: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Random Doubles Battle');
	this.reply('/tour autodq 2');
	},
     monotyperandom: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Monotype Random Battle');
	this.reply('/tour autodq 2');
	},
     metronomecc1v1: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Metronome Challenge Cup 1v1');
	this.reply('/tour autodq 2');
	},
     spacetimefuntimes: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Spacetime Funtimes');
	this.reply('/tour autodq 2');
	},
     ou: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour OU');
        this.reply('/tour scouting off');
	this.reply('/tour autodq 2');
	},
     e1v1: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour 1v1');
        this.reply('/tour scouting off');
	this.reply('/tour autodq 2');
	},
     monotypecc1v1: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Monotype Challenge Cup 1v1');
	this.reply('/tour autodq 2');
	},
     azuremonsrandoms: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Azuremons Random Battle');
	this.reply('/tour autodq 2');
	},
     azuremonscc1v1: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Azuremons Challenge Cup 1v1');
	this.reply('/tour autodq 2');
	},
     assb: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Azure Super Staff Bros.');
	this.reply('/tour autodq 2');
	},
     assbdoubles: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Azure Super Staff Bros. Doubles');
	this.reply('/tour autodq 2');
	},
     assbcc1v1: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Azure Super Staff Bros. Challenge Cup 1v1');
	this.reply('/tour autodq 2');
	},
     cc2v2: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Challenge Cup 2v2');
	this.reply('/tour autodq 2');
	},
     randommonocolor: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Random Monocolor');
	this.reply('/tour autodq 2');
	},
     battlefactorybss: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour BSS Factory');
	this.reply('/tour autodq 2');
	},
     battlefactory: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Battle Factory');
	this.reply('/tour autodq 2');
	},
     metronome: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Metronome');
	this.reply('/tour autodq 2');
	},
     hackmonscup: function (arg, room, user) {
        if (!this.can("info")) return;
	this.reply('/etour Hackmons Cup');
	this.reply('/tour autodq 2');
	},
     
     welcome: function (arg) {
	if (!arg) return;
	if (!this.can("say")) return;
	this.reply('/roompromote ' + arg + ', $')
	this.reply('Welcome ' + arg + ' to the Pikachu Valley!')
     },
     fbwelcome: function (arg) {
	if (!arg) return;
	if (!this.can("say")) return;
	this.reply('/roompromote ' + arg + ', +')
	this.reply('Welcome ' + arg + ' to the Firebars League! Do you wanna test to join us? (Respond with -yes or -no)')
     },
     yes: function (arg, user, room) {
	if (!this.can("info")) return;
	this.reply('/roompromote ' + user + ', $');
	this.reply('Thank you so much! We appreciate that!');
     },
     no: function (arg, user, room) {
	if (!this.can("info")) return;
	this.reply('/roomdeauth ' + user)
	this.reply('Ok. Then you can hang out with us!')
     },
     fbshop: function () {
        if (!this.can("wall")) return;
	this.reply('/addhtmlbox <!--ROOM SHOP--> <center><img src="https://vignette.wikia.nocookie.net/pokemon/images/4/45/Victini.png/revision/latest?cb=20131023215205" height="120" width="100" align="left"><img style="transform: scale(-1, 1)" src="https://vignette.wikia.nocookie.net/pokemon/images/4/45/Victini.png/revision/latest?cb=20131023215205" height="120" width="100" align="right"><br><br><img src="https://i.imgur.com/gaFIw3m.png" height="80" width="240"><br><br><br><table style="width: 100%; background-color: #eb6a30 ; color: black ; border: 2px solid Black ; padding: 2px ; border-radius: 9px" cellspacing="2" cellpadding="3" border="1"><tbody><tr><th style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; font-family: Arial">Item</th><th style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; font-family: Arial">Description</th><th style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; font-family: Arial">Price</th></tr><tr><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px"><center><button style="border: 2px solid Black ; background: none ; border-radius: 9px ; width: 100px ; font-family: Arial" name="send" value="/forcetransfermoney TheFirebarsLeague, 5">Go again</button></center></td><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px ; font-family: Arial"><center>Have a retry for your gym leader position</center></td><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px ; font-family: Arial"><center>5</center></td></tr><tr><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px"><center><button style="border: 2px solid Black ; background: none ; border-radius: 9px ; width: 100px ; font-family: Arial" name="send" value="/forcetransfermoney TheFirebarsLeague, 5">Leveling up</button></center></td><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px ; font-family: Arial"><center>Buy this to gain access to Room Voice.</center></td><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px ; font-family: Arial"><center>5</center></td></tr><tr><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px"><center><button style="border: 2px solid Black ; background: none ; border-radius: 9px ; width: 100px ; font-family: Arial" name="send" value="/forcetransfermoney TheFirebarsLeague, 10">Patch me through</button></center></td><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px ; font-family: Arial"><center>Buy this to gain access to Room Operator.</center></td><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px ; font-family: Arial"><center>10</center></td></tr><tr><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px"><center><button style="border: 2px solid Black ; background: none ; border-radius: 9px ; width: 100px ; font-family: Arial" name="send" value="/forcetransfermoney TheFirebarsLeague, 1">Overriden</button></center></td><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px ; font-family: Arial"><center>Pick up the tier for a tour.</center></td><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px ; font-family: Arial"><center>1</center></td></tr><tr><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px"><center><button style="border: 2px solid Black ; background: none ; border-radius: 9px ; width: 100px ; font-family: Arial" name="send" value="/forcetransfermoney TheFirebarsLeague, 7">Shut up!</button></center></td><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px ; font-family: Arial"><center>Mute a league member for 7 minutes.</center></td><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px ; font-family: Arial"><center>7</center></td></tr><tr><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px"><center><button style="border: 2px solid Black ; background: none ; border-radius: 9px ; width: 100px ; font-family: Arial" name="send" value="/forcetransfermoney TheFirebarsLeague, 20">Disappear!</button></center></td><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px ; font-family: Arial"><center>Mute a league member below & for 1 hour!.</center></td><td style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; height: 32px ; font-family: Arial"><center>20</center></td></tr></tbody></table><br><br><div style="background-color: #eb6a30 ; color: black ; border: 2px solid Black ; padding: 2px ; border-radius: 9px"><div style"style="border-radius: 9px ; border: 2px solid Black ; background: #faea9c ; font-family: Arial">Screen shot proof of your purchase or either inform a staff before you do so! Only notified purchases with proof are consided!</div></div></center> <!--ROOM SHOP-->');
	},
     ezjoin: function (arg, user, room) {
	if (!this.can("info")) return;
	this.reply('/tour join');
     },
     ezleave: function (arg, user, room) {
	if (!this.can("say")) return;
	this.reply('/tour leave');
     },

};
