/* Hold each perk taken in a global. */
var TakenPerks=new Array;
var NumbrPerks=0;

window.onload=function()
{
  var daID="Unknown";
  /* Remove the default text. */
  var topBox=document.getElementById("perkContainerTop");
  while(topBox.hasChildNodes())
  {
    topBox.removeChild(topBox.lastChild);
  }

  /* Parse ALL the perks! */
  for(var i=0;i<thePerks.length;i++)
  {
    /* Does this perk have multiple IDs? */
    if(thePerks[i].idno&&thePerks[i].idno.constructor===Array)
    {
      /* Only display the first one. */
      daID=thePerks[i].idno[0];
    }
    else
    {
      daID=thePerks[i].idno;
    }

    /* Create main "card" */
    var perkBlock=document.createElement("div");
    perkBlock.id=thePerks[i].name;
    perkBlock.onclick=function(){switchMe(this);};
    perkBlock.onmouseenter=function(){HoverColor(this);};
    perkBlock.onmouseleave=function(){NormalColor(this);};
    perkBlock.className="perkBlock";

    /* Create top line with name */
    var perkName=document.createElement("div");
    perkName.className="perkName";
    perkName.innerHTML=thePerks[i].name;
    perkBlock.appendChild(perkName);

    /* Create image */
    var perkImage=document.createElement("img");
    perkImage.className="perkImage";
    perkImage.src=thePerks[i].imge;
    perkBlock.appendChild(perkImage);

    /* Create rank line */
    var perkRanks=document.createElement("div");
    perkRanks.className="perkRanks";
    perkRanks.innerHTML="Ranks: ";
      /* Create rank filling */
      var RankSpan=document.createElement("span");
      RankSpan.id=thePerks[i].name+"_ranks";
      RankSpan.innerHTML=thePerks[i].rnks;
      perkRanks.appendChild(RankSpan);
    perkBlock.appendChild(perkRanks);

    /* Create description line */
    var perkDesc=document.createElement("div");
    perkDesc.className="perkDesc";
    perkDesc.innerHTML=thePerks[i].desc;
    perkBlock.appendChild(perkDesc);

    /* Create id line */
    var perkID=document.createElement("div");
    perkID.className="perkID";
    perkID.innerHTML="Editor ID: ";
      /* Create id filling */
      var IdSpan=document.createElement("span");
      IdSpan.id=thePerks[i].name+"_id";
      IdSpan.innerHTML=daID;
      perkID.appendChild(IdSpan);
    perkBlock.appendChild(perkID);

    /* Add the monstrosity to the main box. */
    topBox.appendChild(perkBlock);
    //topBox.innerHTML+="\n";
  }
}

function switchMe(element)
{
  var found=false;
  //var bg="WhiteSmoke";

  /* Look for the perk in the taken list. */
  for(var i=0;i<TakenPerks.length;i++)
  {
    if(TakenPerks[i]===element.id)
    {
      found=true;
    }
  }
  
  /* Remove or add it. */
  if(found)
  {
    TakenPerks.splice(TakenPerks.indexOf(element.id), 1);
  }
  else
  {
    TakenPerks.push(element.id);
  }
  HoverColor(element);
  makeScript();
}

function makeScript()
{
  /* Clear the list each time this is called. */
  var scriptText="";
  var bottomBox=document.getElementById("perkContainerBtm");
  while(bottomBox.hasChildNodes())
  {
    bottomBox.removeChild(bottomBox.lastChild);
  }


  for(var i=0;i<TakenPerks.length;i++)
  {
    /* Add each ID to the script text {ranks} time(s) */
    var id=TakenPerks[i];
    var ranks=document.getElementById(id+"_ranks").innerHTML;
    var editorId=document.getElementById(id+"_id").innerHTML;
    while(ranks--)
    {
      scriptText+="player.addperk "+editorId+"\n";
    }
    /* Make a bottom list for reference. */
    var item=document.createElement("a");
    item.innerHTML=id+"<br />";
    item.perk=id;
    item.href="#"; /* This is need for them to appear as links. */
    item.onclick=function(){document.getElementById(this.perk).scrollIntoView({behavior: "smooth"});return false;};
    /* Click functions on link tags need to be chased with a "return false;" or the browser will follow the link. */
    bottomBox.appendChild(item);
    /* TODO: Add a convient trash can button, too. */
  }
  /* Actually put the script text in the box */
  document.getElementById("output_text").innerHTML=scriptText;
}

function Perk(name="Unknown Perk",idno="Unknown",desc="",imge="Perks",rnks=1)
{
  this.name=name;
  this.imge="images/"+imge+".png";
  this.rnks=rnks;
  this.desc=desc;
  this.idno=idno;
}

function HoverColor(element)
{
  var bg="WhiteSmoke";

  /* Look for the perk in the taken list.*/
  for(var i=0;i<TakenPerks.length;i++)
  {
    if(TakenPerks[i]===element.id)
    {
      bg="DarkGreen";
    }
  }
  element.style.background=bg;
}

function NormalColor(element)
{
  var bg="White";

  /* Look for the perk in the taken list.*/
  for(var i=0;i<TakenPerks.length;i++)
  {
    if(TakenPerks[i]===element.id)
    {
      bg="Green";
    }
  }
  element.style.background=bg;
}

var thePerks=
[
  new Perk("Abominable","15eadb","Deal +3%/+6%/+10% damage to abominations.","ChallengePerk",3),
  new Perk("Action Boy","31dba","+15 Action Points.","Action Boy"),
  new Perk("Action Girl","7b202","+15 Action Points.","Action Girl"),
  new Perk("Adamantium Skeleton","94ec4","Damage taken by limbs reduced by 50%.","Adamantium Skeleton"),
  new Perk("Agility Implant","14c12a","+1 Agility","Agility Implant"),
  new Perk("Ain't Like That Now","xx00a749","Karma reset to 0, +25% AP regeneration rate, +20% attack speed, immunity to critical hits.","Ain't Like That Now"),
  new Perk("Alertness","xx00c252","+2 Perception when crouched and still.","Alertness"),
  new Perk("And Stay Back","xx00f218","Shotguns have a 10% chance, per pellet, of knocking an enemy back.","And Stay Back"),
  new Perk("Animal Control","15eae0","Deal +3%/+6%/+10% damage to mutated animals.","ChallengePerk",3),
  new Perk("Animal Friend","31db5","On 1st rank, hostile animals become friendly. On 2nd rank they come to your aid against enemies except against other animals.","Animal Friend",2),
  new Perk("Atomic!","xx008011","In irradiated areas, +25% move and attack speed, +2 DT, +2 ST. With excess rad level, AP regen scales from 1.1 times to 1.5 times normal.","Atomic!"),
  new Perk("The Bear-Slayer","xx00c25b","+1 SPECIAL point, Caesar's Legion Fame, NCR Infamy","The Bear-Slayer"),
  new Perk("Beautiful Beatdown","15eadf","AP costs for unarmed attacks are reduced by 10%.","ChallengePerk"),
  new Perk("Better Criticals","31dbb","+50% damage with critical hits.","Better Criticals"),
  new Perk("Better Healing","15c60b","Regain +20% more health from all consumable sources.","Better Healing"),
  new Perk("Big Brained","xx015bba","Head cannot be crippled, +10% resistance to chem addiction, +10% DT (min +1).","Big Brained"),
  new Perk("Black Widow","94eb8","+10% damage to the opposite sex and unique dialogue options with certain characters.","Black Widow"),
  new Perk("Bloody Mess","94eba","+5% overall damage; more violent death animations.","Bloody Mess"),
  new Perk("Brainless","xx0098be","Head can no longer be crippled, +25% resistance to chem addiction, +5% DT (min +1)","Brainless"),
  new Perk("Broad Daylight","xx00a6df","No Sneak penalty for using Pip-Boy light.","Broad Daylight"),
  new Perk("Bug Stomper","15ead7","Deal +3%/+6%/+10% damage to mutated insects.","ChallengePerk",3),
  new Perk("Burden to Bear","xx00c250","+50 carry weight.","Burden to Bear"),
  new Perk("Camarader-E","xx00a602","1. ED-E repairs 25% weapon condition; 2. ED-E produces energy or microfusion cells; 3. +2 DT; 4. +5 beam weapon damage; 5. +5% V.A.T.S. hit chance","Camarader-E",5),
  new Perk("Camel of the Mojave","167e26","Water items hydrate and heal you 15% better.","ChallengePerk"),
  new Perk("Cannibal","94ebc","When you're in Sneak mode, you gain the option to eat a human corpse to regain hit points, but lose Karma.","Cannibal"),
  new Perk("Cardiac Arrest","xx015bbb","+50% poison resistance, healing items boosted by 50%, robots have -25% crit chance.","Cardiac Arrest"),
  new Perk("Center of Mass","165182","In V.A.T.S., you do an additional 15% damage when targeting the torso.","Center of Mass"),
  new Perk("Certified Tech","xx00a6de","+25% critical hit chance against robots, 85% chance of finding an extra crafting component on destroyed robots.","Certified Tech"),
  new Perk("Charisma Implant","14c130","+1 Charisma","Charisma Implant"),
  new Perk("Chem Resistant","99827","Half as likely to get addicted.","Chem Resistant"),
  new Perk("Chemist","9982d","Chems and (in Hardcore) stimpaks last twice as long.","Chemist"),
  new Perk("Cherchez La Femme","1361b3","+10% damage to the same sex and unique dialogue options with certain characters.","Cherchez La Femme"),
  new Perk("Coin Operator","xx01039b","Adds recipe. 1 fission battery + 2 scrap metal = 50 Sierra Madre chips","Coin Operator"),
  new Perk("Commando","99828","+25% accuracy in V.A.T.S. with two-handed weapons.","Commando"),
  new Perk("Comprehension","31de1","You gain one additional skill point for reading books and double the skill points for reading magazines.","Comprehension"),
  new Perk("Computer Whiz","31dc4","Can make one extra attempt to hack a locked-down terminal.","Computer Whiz"),
  new Perk("Concentrated Fire","44caf","+5% accuracy in V.A.T.S. with every subsequent attack on a given body part queued.","Concentrated Fire"),
  new Perk("Confirmed Bachelor","1361b4","+10% damage to the same sex and unique dialogue options with certain characters.","Confirmed Bachelor"),
  new Perk("Cowboy","138562","+25% damage done by dynamite, hatchets, knives, revolvers, and lever-action guns.","Cowboy"),
  new Perk("Day Tripper","15ead8","The effects of addictive Chems last 33% longer.","ChallengePerk"),
  new Perk("Dead Man's Burden","xx00c25a","+1 SPECIAL point, Boomers and Powder Gangers Fame, Caesar's Legion and NCR Infamy","Dead Man's Burden"),
  new Perk("Demolition Expert","31dab","+20% damage with explosives.","Demolition Expert",3),
  new Perk("Dine and Dash","15eae1","Get option to take Human remains when using Cannibal.","ChallengePerk"),
  new Perk("Divide Survivor","xx00c25c","+1 SPECIAL point, Brotherhood of Steel and Followers of the Apocalypse Fame","Divide Survivor"),
  new Perk("DNAgent","xx009617","All damage done to night stalkers is increased by 10%.","DNAgent"),
  new Perk("DNAvenger","xx00da28","All the damage done to cazadores is increased cumulatively by 10% by rank.","DNAvenger",3),
  new Perk("Educated","31dd8","You gain two more skill points every time you advance in level.","Educated"),
  new Perk("Elijah's Last Words","xx00d4a8","Boosts Veronica's melee attack speed 150% & gives her a 25% chance for melee attacks to knock down enemies.","Elijah's Ramblings"),
  new Perk("Elijah's Ramblings","xx00d4a9","Boosts melee critical damage +50%.","Elijah's Ramblings"),
  new Perk("Endurance Implant","14c12e","+1 Endurance","Endurance Implant"),
  new Perk("Enhanced Sensors","15c60e","Detect enemies at a very far range, and enemies that are cloaked can also be targeted in V.A.T.S.","Enhanced Sensors"),
  new Perk("Entomologist","31dd9","You do an additional 50% damage every time you attack a mutated insect.","Entomologist"),
  new Perk("Explorer","31de5","All locations are marked on your map.","Explorer"),
  new Perk("Eye for Eye","xx00b2f4","For each crippled limb you have, you do an additional 10% damage.","Eye for Eye"),
  new Perk("Fast Metabolism","94ebf","+20% Hit Points restored with stimpaks.","Fast Metabolism"),
  new Perk("Fast Times","15ead9","Turbo's effects last +50% longer.","ChallengePerk"),
  new Perk("Ferocious Loyalty","165180","When you drop below 50% HP, companions gain +50 DR.","Ferocious Loyalty"),
  new Perk("Fight the Power!","xx00f67c","+2 Damage Threshold and +5% Critical chance against anyone wearing NCR, Legion or Brotherhood of Steel armor.","Fight the Power!"),
  new Perk("Finesse","94ec1","+5% Critical Chance.","Finesse"),
  new Perk("Fortune Finder","31de3","Considerably more bottle caps will be found in stockpiles.","Fortune Finder"),
  new Perk("Free Radical","15eada","10 additional rads removed upon each RadAway usage.","ChallengePerk"),
  new Perk("Friend of the Night","165118","Your eyes adapt quickly to low-light conditions.","Friend of the Night"),
  new Perk("Friendly Help","15eae3","Mysterious Stranger and Miss Fortune are twice as likely to appear in V.A.T.S.","ChallengePerk"),
  new Perk("Full Maintenance","15d2bc","The condition of weapons and armor decays 75% slower.","Full Maintenance"),
  new Perk("Ghastly Scavenger","135ec9","When you're in Sneak mode, you gain the option to eat a super mutant or feral ghoul corpse to regain hit points, but lose Karma.","Ghastly Scavenger"),
  new Perk("Ghost Hunter","xx01039a","Ghost people are more likely to die outright without needing to be dismembered or disintegrated.","Ghost Hunter"),
  new Perk("Grim Reaper's Sprint","99834","A kill in V.A.T.S. restores 20 AP immediately.","Grim Reaper's Sprint"),
  new Perk("Grunt","xx00f677","25% more damage with a variety of weapons.","Grunt"),
  new Perk("Gunslinger","94ebb","+25% accuracy in V.A.T.S. with one-handed weapons.","Gunslinger"),
  new Perk("Hand Loader","16581b","When using Guns, you are twice as likely to recover cases and hulls. You also have all hand load recipes unlocked at any reloading benches.","Hand Loader"),
  new Perk("Heartless","xx0098c2","Cannot be poisoned, healing items are boosted +25%, robots have -50% crit chance.","Heartless"),
  new Perk("Heave, Ho!","14609c","+50% thrown weapon velocity and range.","Heave, Ho!-NV"),
  new Perk("Heavyweight","xx011468","Weapons with a weight of more than 10 are cut in half. This does not affect weapons modded to under 10 wg.","Heavyweight"),
  new Perk("Here and Now","31dac","You instantly level up again.","Here and Now"),
  new Perk("Hit the Deck","1651b6","+25 DT against explosives.","Hit the Deck-NV"),
  new Perk("Hobbler","xx011469","Your chance to hit an opponent's legs in V.A.T.S. is increased by 25%.","Hobbler"),
  new Perk("Home on the Range","xx00b2f3","Whenever you interact with a campfire, you have the option of sleeping, with all the benefits that sleep brings.","Home on the Range"),
  new Perk("Hunter","135f18","In combat, you do 75% more critical damage against animals and mutated animals.","Hunter"),
  new Perk("Implant C-13","xx009616","Plus 10% damage to cazadores","Implants"),
  new Perk("Implant GRX","xx009d48","You gain a non-addictive subdermal turbo (chem) injector.","Implants",2),
  new Perk("Implant M-5","xx009614","Your crouched movement speed is increased by 20%.","Implants"),
  new Perk("Implant Y-3","xx009615","Removes any radiation taken from drinking an irradiated water source.","Implants"),
  new Perk("Implant Y-7","xx00961a","+5 health and +2 restored action points through the consumption of food.","Implants"),
  new Perk("In My Footsteps","xx013b26","Traps do not activate and you are given a stealth increase.","Light Step"),
  new Perk("In Shining Armor (Eyewear)","xx00f217","This perk is bugged and applies no effect. You would be granted +2 DT while wearing reflective eyewear or helmets.","In Shining Armor"),
  new Perk("In Shining Armor (Main)","xx00f216","This perk is bugged and applies no effect. You would be granted +5 DT against energy weapons while wearing metal armor.","In Shining Armor"),
  new Perk("Infiltrator","44cb0","Can make one more attempt to pick a broken lock.","Infiltrator"),
  new Perk("Intelligence Implant","14c132","+1 Intelligence","Intelligence Implant"),
  new Perk("Intense Training","44cb1","You can put a single point into any of your SPECIAL attributes.","Intense Training",10),
  new Perk("Irradiated Beauty","xx00c255","Sleep removes all Rads (Hardcore: only -100 Rads).","Irradiated Beauty"),
  new Perk("Junk Rounds","xx00fb6a","You can craft ammunition using scrap metal and tin cans.","Junk Rounds"),
  new Perk("Jury Rigging","165815","Repair any item using a roughly similar item.","Jury Rigging"),
  new Perk("Just Lucky I'm Alive","xx00c24f","+4 Luck for 3 minutes upon finishing a battle with less than 25% health; immunity to critical hits, +50% critical damage.","Just Lucky I'm Alive"),
  new Perk("Khan Trick","15b8e7","Temporarily stun opponents by throwing dust or dirt at their eyes (requires dirt or sand ground)","Khan Trick"),
  new Perk("Lady Killer","94eb9","+10% damage to the opposite sex and unique dialogue options with certain characters.","Lady Killer-NV"),
  new Perk("Laser Commander","165789","You do an extra 15% damage and have a 10% extra chance to critically hit with any laser weapon.","Laser Commander"),
  new Perk("Lead Belly","44ca9","-50% radiation taken from food and water sources.","Lead Belly"),
  new Perk("Legion Assault","15b8e9","Knock back opponents","Legion Assault"),
  new Perk("Lessons Learned","xx00c256","+1% XP gain per player level.","Lessons Learned"),
  new Perk("Life Giver","31db1","+30 hit points.","Life Giver"),
  new Perk("Light Step","31db7","Floor traps or mines will not be set off.","Light Step"),
  new Perk("Light Touch","xx00e87b","While wearing light armor you gain +5% critical hit chance and your enemies suffer a -25% critical hit chance.","Light Touch"),
  new Perk("Living Anatomy","146099","Shows health and Damage Threshold of any target. +5% bonus to damage against humans and non-feral ghouls.","Living Anatomy"),
  new Perk("Lonesome Road","xx00a6dc","+10% damage and +10% V.A.T.S. hit chance when you have no companions.","Lonesome Road"),
  new Perk("Long Haul","146098","Being over-encumbered no longer prevents you from using fast travel.","Long Haul"),
  new Perk("Lord Death","15eae4","Deal an extra +1%/+2%/+4% damage to all enemies.","ChallengePerk",3),
  new Perk("Luck Implant","14c134","+1 Luck","Luck Implant"),
  new Perk("Machine Head","15eadc","Deal +3%/+6% damage to robots.","ChallengePerk",3),
  new Perk("Mad Bomber","xx00092e"," Enables you to create special explosive recipes at any workbench.","Mad Bomber"),
  new Perk("Marked","xx00a6dd","+10% damage and +10% DT against Marked Men","Marked"),
  new Perk("Math Wrath","135ec3","Reduces all AP costs by 10%.","Math Wrath"),
  new Perk("Meat of Champions","164afb","+1 Luck, Strength, Charisma and Intelligence for 60 seconds each time a corpse is consumed.","Meat of Champions"),
  new Perk("Melee Hacker","15eade","Level 1: +5% melee weapon attack speed.","ChallengePerk",2),
  new Perk("Meltdown","14609a","Foes killed by your Energy Weapons emit a corona of harmful energy.","Meltdown"),
  new Perk("Mile in Their Shoes","xx009619","Consuming night stalker squeezin's now grants bonuses to Perception (+1 PER), Poison Resistance (+5), and Stealth (+5 Sneak).","Mile in Their Shoes"),
  new Perk("Miss Fortune","137800","10% chance that Miss Fortune will incapacitate a target in V.A.T.S.","Miss Fortune"),
  new Perk("Mister Sandman","31dad","Can instantly kill a sleeping non-player character, and earn bonus XP when doing so.","Mister Sandman"),
  new Perk("Monocyte Breeder","14cce1","Regenerate 1 health per 10 seconds","Monocyte Breeder"),
  new Perk("Mutant Massacrer","15eae2","Deal +3%/+6%/+10% damage to super mutants.","ChallengePerk",3),
  new Perk("Mysterious Stranger","31dbc","10% chance that the Stranger will finish off a target in V.A.T.S.","Mysterious Stranger"),
  new Perk("Nerd Rage!","44ca7","+15 DT and Strength increased to 10 whenever health is 20% or lower.","Nerd Rage!"),
  new Perk("Nerves of Steel","e2c49","20% faster AP regeneration.","Nerves of Steel"),
  new Perk("Night Person","94ebd","+2 Intelligence and +2 Perception between 6:00 P.M. and 6:00 A.M.","Night Person"),
  new Perk("Ninja","31dcc","x1.15 (instead of +15 luck due to a bug) critical chance with melee and unarmed weapons, +25% damage with melee/unarmed sneak attack criticals.","Ninja"),
  new Perk("Nuka Chemist","165ae6","Unlocks special Nuka-Cola recipes at the workbench.","Quantum Chemist"),
  new Perk("Old World Gourmet","xx00f96f","+25% addiction resistance. +50% health bonus from snack foods. Scotch, vodka and wine now give you health in addition to their normal effects.","Old World Gourmet"),
  new Perk("Pack Rat","14609b","Items with a weight of two pounds or less now weigh half as much.","Pack Rat"),
  new Perk("Paralyzing Palm","44caa","Can paralyze an enemy for 30 seconds with a V.A.T.S. unarmed attack.","Paralyzing Palm"),
  new Perk("Perception Implant","14c12d","+1 Perception","Perception Implant"),
  new Perk("Piercing Strike","14609f","All your unarmed and melee attacks negate 15 points of DT.","Piercing Strike"),
  new Perk("Plasma Spaz","165aef","AP costs for all plasma weapons are reduced by 20%.","Plasma Spaz"),
  new Perk("Power Armor Training","58fdf","Ability to wear all power armor variants.","Power Armor Training"),
  new Perk("The Professional","165aec","Your sneak attack criticals with revolvers, pistols, and submachine guns (guns and energy weapons) all inflict an additional 20% damage.","The Professional"),
  new Perk("Purifier","135f75","You do 50% extra damage with melee and unarmed weapons against centaurs, night stalkers, spore plants, spore carriers, deathclaws and super mutants.","Purifier"),
  new Perk("Pyromaniac","31db2","+50% damage with fire-based weapons.","Pyromaniac"),
  new Perk("Quick Draw","1377fe","Makes weapon equipping and holstering 50% faster.","Quick Draw"),
  new Perk("Quiet As The Waters","xx00b2f7","White Legs' Perception is effectively decreased by 3.","Quiet As The Waters"),
  new Perk("Rad Absorption","e2c4a","-1 Rad every 20 seconds.","Rad Absorption"),
  new Perk("Rad Child","1656fd","Regenerate 2 HP per second per 200 rads accumulated.","Rad Child"),
  new Perk("Rad Resistance","31da9","+25% radiation resistance permanently.","Rad Resistance"),
  new Perk("Ranger Takedown","15b8e8","Knock down opponents","Ranger Takedown"),
  new Perk("Rapid Reload","1377fd","All of your weapon reloads are 25% faster than normal.","Rapid Reload"),
  new Perk("Regular Maintenance","15c610","The condition of weapons and armor decays 50% slower.","Regular Maintenance"),
  new Perk("Reinforced Spine","xx015bbc","Strength+2, Damage Threshold+2","Reinforced Spine"),
  new Perk("Retention","10f09e","Skill magazines last for 3 real-time minutes.","Retention"),
  new Perk("Robotics Expert","31dc2","+25% damage to robots; can shut down robots by sneaking up on them and deactivating.","Robotics Expert"),
  new Perk("Roughin' It","xx00c251","Sleeping outside gives Well Rested benefit.","Roughin' It"),
  new Perk("Run 'n Gun","14609d","Halved spread with one-handed ranged weapons while walking or running.","Run 'n Gun"),
  new Perk("Scourge of the East","xx00c259","+1 SPECIAL point, NCR Fame, Caesar's Legion Infamy","Scourge of the East"),
  new Perk("Scribe Assistant","15c613","The player can craft workbench items through Veronica’s dialogue.","Scribe Assistant"),
  new Perk("Scribe Counter","15b8ea","Quick counter-attack after block","Scribe Counter"),
  new Perk("Scrounger","31daa","Considerably more ammunition in stockpiles.","Scrounger-NV"),
  new Perk("Search and Mark","15c611","Chems, firearms & ammunition within a short distance are highlighted when you zoom in.","Search and Mark"),
  new Perk("Set Lasers for Fun","15eadd","ALL energy weapons gain an extra +2%/+4% chance to get a critical hit.","ChallengePerk",2),
  new Perk("Shotgun Surgeon","16578b","When using shotguns, regardless of ammunition used, you ignore an additional 10 points of a target's Damage Threshold.","Shotgun Surgeon"),
  new Perk("Sierra Madre Martini","xx01039e","Adds recipe to create Sierra Madre martinis with 2 junk food, 1 tin can, and 1 jar of Cloud residue.","Sierra Madre Martini"),
  new Perk("Signal Interference","xx008a2e","+50% time to escape signals.","Signal Interference"),
  new Perk("Silent Running","31db3","Running no longer factors into a successful sneak attempt.","Silent Running"),
  new Perk("Slayer","165446","The speed of all your melee and unarmed attacks is increased by 30%.","Slayer"),
  new Perk("Sneering Imperialist","xx00f67b","+15% Damage and +25% accuracy in V.A.T.S. to various tribal and raider characters.","Sneering Imperialist"),
  new Perk("Sniper","31db4","25% more likely to hit the target's head in V.A.T.S.","Sniper"),
  new Perk("Solar Powered","31dc5","+2 Strength and +1 HP per second while outside, from 6:00 A.M. to 6:00 P.M.","Solar Powered"),
  new Perk("Spineless","xx0098bc","Strength+1, DT+1, torso can no longer be crippled.","Spineless"),
  new Perk("Splash Damage","165af0","Explosives have a 25% larger area of effect.","Splash Damage"),
  new Perk("Spotter","15c60c","Hostile targets are highlighted whenever the player is actively aiming.","Spotter"),
  new Perk("Spray and Pray","165181","Your attacks do 75% less damage to companions.","Spray and Pray"),
  new Perk("Stealth Girl","15c60f","Doubles Stealth Boy duration while also granting sneak attack criticals an extra 10% damage.","Stealth Girl"),
  new Perk("Stonewall","165449","+5 DT against melee and unarmed attacks and cannot be knocked down during combat.","Stonewall"),
  new Perk("Strength Implant","14c069","+1 Strength","Strength Implant"),
  new Perk("Strong Back","31dde","+50 Carry Weight.","Strong Back"),
  new Perk("Sub-Dermal Armor","14ccdf","+4 Damage Threshold","Sub-Dermal Armor"),
  new Perk("Super Slam!","14609e","All melee (except thrown) and unarmed attacks have a chance of knocking your target down. 15% for Unarmed or one-handed melee, 30% for two-handed melee.","Super Slam!"),
  new Perk("Swift Learner","31dd3","You gain an additional 10% whenever experience points are earned.","Swift Learner-NV",3),
  new Perk("Tag!","31dbd","Fourth\"tag\" skill: +15 points to that skill.","Tag!"),
  new Perk("Terrifying Presence","10c6cd","Can intimidate foes through dialogue; closing dialogue results in the foe fleeing for 5 seconds.","Terrifying Presence"),
  new Perk("Them's Good Eatin'","xx0098c9","Any living creature you kill has a 50% chance to have the potent healing items thin red paste or blood sausage when looted.","Them's Good Eatin'"),
  new Perk("Thought You Died","xx00c24e","+10 Health per 100 Karma; Karma reset to 0, +10% damage, immunity to critical hits.","Thought You Died"),
  new Perk("Tough Guy","15ead6","Take 20% less limb damage.","ChallengePerk"),
  new Perk("Toughness","31de0","+3 DT permanently.","Toughness-NV",2),
  new Perk("Travel Light","146096","While wearing light armor or no armor, you run 10% faster.","Travel Light"),
  new Perk("Tribal Wisdom","xx00f679","-50% limb damage from animals, mutated animals, and mutated insects, +25% to Poison resistance, ability to eat mutated insects in sneak mode.","Tribal Wisdom"),
  new Perk("Tunnel Runner","xx00c258","+25% sneaking speed when wearing light or no armor.","Tunnel Runner"),
  new Perk("Unclean Living","xx008a2f","Temporary cloud protection, take 25% less damage.","Unclean Living"),
  new Perk("Unstoppable Force","165447","x4 normal damage through enemy blocks with melee and unarmed attacks.","Unstoppable Force"),
  new Perk("Vigilant Recycler","165816","When using Energy Weapons, you are twice as likely to recover drained ammunition. You also have more efficient recycling recipes available at workbenches.","Vigilant Recycler"),
  new Perk("Voracious Reader","xx00c253","Damaged books become blank magazines; can copy existing magazines into blank magazines.","Voracious Reader"),
  new Perk("Walker Instinct","xx00c254","+1 Perception and Agility when outside.","Walker Instinct"),
  new Perk("The Way of the Canaanite","xx00b2f5","Decrease in spread and double the critical chance for .45 Auto pistols.","The Way of the Canaanite"),
  new Perk("Weapon Handling","146097","Weapon Strength requirements are now 2 points lower than normal for you.","Weapon Handling"),
  new Perk("Well-Stacked Cairns","xx00b2f6","Reaching various summits reveals nearby map markers and grants +3 Perception temporarily.","Well-Stacked Cairns"),
  new Perk("Whiskey Rose","15c60d","Eliminates negative effects of consumption and addiction to alcohol, while drinking specifically whiskey or wasteland tequila will raise player's Damage Threshold.","Whiskey Rose"),
];
