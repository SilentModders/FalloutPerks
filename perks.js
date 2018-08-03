function Perk(name,imge,rnks,desc,idno)
{
  this.name=name;
  this.imge=imge;
  this.rnks=rnks;
  this.desc=desc;
  this.idno=idno;
}
var thePerks=
[
  new Perk("Abominable","",3,"Increased weapon damage against abominations (3/6/10%)","15eadb"),
  new Perk("Abominable","images/Abominable.png",3,"Deal +3%/+6%/+10% damage to abominations.","0015eadb"),
  new Perk("Action Boy","images/Action Boy.png",2,"+15 Action Points.","00031dba"),
  new Perk("Action Girl","images/Action Girl.png",2,"+15 Action Points.","7b202"),
  new Perk("Adamantium Skeleton","images/Adamantium Skeleton.png",1,"Damage taken by limbs reduced by 50%.","00094ec4"),
  new Perk("Agility Implant","images/Agility Implant.png",,"+1 Agility","0014c12a"),
  new Perk("Ain't Like That Now","images/Ain't Like That Now.png",,"Karma reset to 0, +25% AP regeneration rate, +20% attack speed, immunity to critical hits.","xx00a749"),
  new Perk("Alertness","images/Alertness.png",,"+2 Perception when crouched and still.","xx00c252"),
  new Perk("And Stay Back","images/And Stay Back.png",,"Shotguns have a 10% chance, per pellet, of knocking an enemy back.","xx00f218"),
  new Perk("Animal Control","images/Animal Control.png",3,"Deal +3%/+6%/+10% damage to mutated animals.","0015eae0"),
  new Perk("Animal Friend","images/Animal Friend.png",2,"On 1st rank, hostile animals become friendly. On 2nd rank they come to your aid against enemies except against other animals.","00031db5"),
  new Perk("Atomic!","images/Atomic!.png",,"In irradiated areas, +25% move and attack speed, +2 DT, +2 ST. With excess rad level, AP regen scales from 1.1 times to 1.5 times normal.","xx008011"),
  new Perk("Beautiful Beatdown","images/Beautiful Beatdown.png",1,"AP costs for unarmed attacks are reduced by 10%.","0015eadf"),
  new Perk("Better Criticals","images/Better Criticals.png",1,"+50% damage with critical hits.","00031dbb"),
  new Perk("Better Healing","images/Better Healing.png",,"Regain +20% more health from all consumable sources.","0015c60b"),
  new Perk("Big Brained","images/Big Brained.png",,"Head cannot be crippled, +10% resistance to chem addiction, +10% DT (min +1).","xx015bba"),
  new Perk("Black Widow","images/Black Widow.png",1,"+10% damage to the opposite sex and unique dialogue options with certain characters.","94eb8"),
  new Perk("Bloody Mess","images/Bloody Mess.png",1,"+5% overall damage; more violent death animations.","00094eba"),
  new Perk("Brainless","images/Brainless.png",,"Head can no longer be crippled, +25% resistance to chem addiction, +5% DT (min +1)","xx0098be"),
  new Perk("Broad Daylight","images/Broad Daylight.png",,"No Sneak penalty for using Pip-Boy light.","xx00a6df"),
  new Perk("Bug Stomper","images/Bug Stomper.png",3,"Deal +3%/+6%/+10% damage to mutated insects.","0015ead7"),
  new Perk("Burden to Bear","images/Burden to Bear.png",,"+50 carry weight.","xx00c250"),
  new Perk("Camarader-E","images/Camarader-E.png",5,"1. ED-E repairs 25% weapon condition; 2. ED-E produces energy or microfusion cells; 3. +2 DT; 4. +5 beam weapon damage; 5. +5% V.A.T.S. hit chance","xx00a602"),
  new Perk("Camel of the Mojave","images/Camel of the Mojave.png",1,"Water items hydrate and heal you 15% better.","167e26"),
  new Perk("Cannibal","images/Cannibal.png",1,"When you're in Sneak mode, you gain the option to eat a human corpse to regain hit points, but lose Karma.","00094ebc"),
  new Perk("Cardiac Arrest","images/Cardiac Arrest.png",,"+50% poison resistance, healing items boosted by 50%, robots have -25% crit chance.","xx015bbb"),
  new Perk("Center of Mass","images/Center of Mass.png",1,"In V.A.T.S., you do an additional 15% damage when targeting the torso.","165182"),
  new Perk("Certified Tech","images/Certified Tech.png",,"+25% critical hit chance against robots, 85% chance of finding an extra crafting component on destroyed robots.","xx00a6de"),
  new Perk("Charisma Implant","images/Charisma Implant.png",,"+1 Charisma","0014c130"),
  new Perk("Chem Resistant","images/Chem Resistant.png",1,"Half as likely to get addicted.","99827"),
  new Perk("Chemist","images/Chemist.png",1,"Chems and (in Hardcore) stimpaks last twice as long.","9982d"),
  new Perk("Cherchez La Femme","images/Cherchez La Femme.png",1,"+10% damage to the same sex and unique dialogue options with certain characters.","1361b3"),
  new Perk("Coin Operator","images/Coin Operator.png",,"Adds recipe. 1 fission battery + 2 scrap metal = 50 Sierra Madre chips","xx01039b"),
  new Perk("Commando","images/Commando.png",1,"+25% accuracy in V.A.T.S. with two-handed weapons.","99828"),
  new Perk("Comprehension","images/Comprehension.png",1,"You gain one additional skill point for reading books and double the skill points for reading magazines.","00031de1"),
  new Perk("Computer Whiz","images/Computer Whiz.png",1,"Can make one extra attempt to hack a locked-down terminal.","00031dc4"),
  new Perk("Concentrated Fire","images/Concentrated Fire.png",1,"+5% accuracy in V.A.T.S. with every subsequent attack on a given body part queued.","00044caf"),
  new Perk("Confirmed Bachelor","images/Confirmed Bachelor.png",1,"+10% damage to the same sex and unique dialogue options with certain characters.","1361b4"),
  new Perk("Cowboy","images/Cowboy.png",1,"+25% damage done by dynamite, hatchets, knives, revolvers, and lever-action guns.","138562"),
  new Perk("Day Tripper","images/Day Tripper.png",1,"The effects of addictive Chems last 33% longer.","0015ead8"),
  new Perk("Dead Man's Burden","images/Dead Man's Burden.png",,"+1 SPECIAL point, Boomers and Powder Gangers Fame, Caesar's Legion and NCR Infamy","xx00c25a"),
  new Perk("Demolition Expert","images/Demolition Expert.png",3,"+20% damage with explosives.","00031dab"),
  new Perk("Dine and Dash","images/Dine and Dash.png",1,"Get option to take Human remains when using Cannibal.","0015eae1"),
  new Perk("Divide Survivor","images/Divide Survivor.png",,"+1 SPECIAL point, Brotherhood of Steel and Followers of the Apocalypse Fame","xx00c25c"),
  new Perk("DNAgent","images/DNAgent.png",,"All damage done to night stalkers is increased by 10%.","xx009617"),
  new Perk("DNAvenger","images/DNAvenger.png",3,"All the damage done to cazadores is increased cumulatively by 10% by rank.","xx00da28"),
  new Perk("Educated","images/Educated.png",1,"You gain two more skill points every time you advance in level.","00031dd8"),
  new Perk("Elijah's Last Words","images/Elijah's Last Words.png",,"Boosts Veronica's melee attack speed 150% & gives her a 25% chance for melee attacks to knock down enemies.","xx00d4a8"),
  new Perk("Elijah's Ramblings","images/Elijah's Ramblings.png",,"Boosts melee critical damage +50%.","xx00d4a9"),
  new Perk("Endurance Implant","images/Endurance Implant.png",,"+1 Endurance","0014c12e"),
  new Perk("Enhanced Sensors","images/Enhanced Sensors.png",,"Detect enemies at a very far range, and enemies that are cloaked can also be targeted in V.A.T.S.","0015c60e"),
  new Perk("Entomologist","images/Entomologist.png",1,"You do an additional 50% damage every time you attack a mutated insect.","00031dd9"),
  new Perk("Explorer","images/Explorer.png",1,"All locations are marked on your map.","00031de5"),
  new Perk("Eye for Eye","images/Eye for Eye.png",20,"For each crippled limb you have, you do an additional 10% damage.","xx00b2f4"),
  new Perk("Fast Metabolism","images/Fast Metabolism.png",1,"+20% Hit Points restored with stimpaks.","00094ebf"),
  new Perk("Fast Times","images/Fast Times.png",1,"Turbo's effects last +50% longer.","0015ead9"),
  new Perk("Ferocious Loyalty","images/Ferocious Loyalty.png",1,"When you drop below 50% HP, companions gain +50 DR.","165180"),
  new Perk("Fight the Power!","images/Fight the Power!.png",10,"+2 Damage Threshold and +5% Critical chance against anyone wearing NCR, Legion or Brotherhood of Steel armor.","xx00f67c"),
  new Perk("Finesse","images/Finesse.png",1,"+5% Critical Chance.","00094ec1"),
  new Perk("Fortune Finder","images/Fortune Finder.png",1,"Considerably more bottle caps will be found in stockpiles.","00031de3"),
  new Perk("Free Radical","images/Free Radical.png",1,"10 additional rads removed upon each RadAway usage.","0015eada"),
  new Perk("Friend of the Night","images/Friend of the Night.png",1,"Your eyes adapt quickly to low-light conditions.","165118"),
  new Perk("Friendly Help","images/Friendly Help.png",1,"Mysterious Stranger and Miss Fortune are twice as likely to appear in V.A.T.S.","0015eae3"),
  new Perk("Full Maintenance","images/Full Maintenance.png",,"The condition of weapons and armor decays 50% slower (75% with Full Maintenance).","0015d2bc"),
  new Perk("Ghastly Scavenger","images/Ghastly Scavenger.png",1,"When you're in Sneak mode, you gain the option to eat a super mutant or feral ghoul corpse to regain hit points, but lose Karma.","00135ec9"),
  new Perk("Ghost Hunter","images/Ghost Hunter.png",,"Ghost people are more likely to die outright without needing to be dismembered or disintegrated.","xx01039a"),
  new Perk("Grim Reaper's Sprint","images/Grim Reaper's Sprint.png",1,"A kill in V.A.T.S. restores 20 AP immediately.","99834"),
  new Perk("Grunt","images/Grunt.png",8,"25% more damage with a variety of weapons.","xx00f677"),
  new Perk("Gunslinger","images/Gunslinger.png",1,"+25% accuracy in V.A.T.S. with one-handed weapons.","00094ebb"),
  new Perk("Hand Loader","images/Hand Loader.png",1,"When using Guns, you are twice as likely to recover cases and hulls. You also have all hand load recipes unlocked at any reloading benches.","0016581b"),
  new Perk("Heartless","images/Heartless.png",,"Cannot be poisoned, healing items are boosted +25%, robots have -50% crit chance.","xx0098c2"),
  new Perk("Heave, Ho!","images/Heave, Ho!.png",1,"+50% thrown weapon velocity and range.","0014609c"),
  new Perk("Heavyweight","images/Heavyweight.png",,"Weapons with a weight of more than 10 are cut in half. This does not affect weapons modded to under 10 wg.","xx011468"),
  new Perk("Here and Now","images/Here and Now.png",1,"You instantly level up again.","00031dac"),
  new Perk("Hit the Deck","images/Hit the Deck.png",1,"+25 DT against explosives.","001651b6"),
  new Perk("Hobbler","images/Hobbler.png",,"Your chance to hit an opponent's legs in V.A.T.S. is increased by 25%.","xx011469"),
  new Perk("Home on the Range","images/Home on the Range.png",8,"Whenever you interact with a campfire, you have the option of sleeping, with all the benefits that sleep brings.","xx00b2f3"),
  new Perk("Hunter","images/Hunter.png",1,"In combat, you do 75% more critical damage against animals and mutated animals.","00135f18"),
  new Perk("Implant C-13","images/Implant C-13.png",,"Plus 10% damage to cazadores","xx009616"),
  new Perk("Implant GRX","images/Implant GRX.png",2,"You gain a non-addictive subdermal turbo (chem) injector.","xx009d48"),
  new Perk("Implant M-5","images/Implant M-5.png",,"Your crouched movement speed is increased by 20%.","xx009614"),
  new Perk("Implant Y-3","images/Implant Y-3.png",,"Removes any radiation taken from drinking an irradiated water source.","xx009615"),
  new Perk("Implant Y-7","images/Implant Y-7.png",,"+5 health and +2 restored action points through the consumption of food.","xx00961a"),
  new Perk("In My Footsteps","images/In My Footsteps.png",,"Traps do not activate and you are given a stealth increase.","xx013b26"),
  new Perk("In Shining Armor (Eyewear)","images/In Shining Armor (Eyewear).png","This perk is bugged and applies no effect. You would be granted +5 DT against energy weapons while wearing metal armor.","xx00f217"),
  new Perk("In Shining Armor (Main)","images/In Shining Armor (Main).png",,"This perk is bugged and applies no effect. You would be granted +2 DT while wearing reflective eyewear or helmets.","xx00f216"),
  new Perk("Infiltrator","images/Infiltrator.png",1,"Can make one more attempt to pick a broken lock.","00044cb0"),
  new Perk("Intelligence Implant","images/Intelligence Implant.png",,"+1 Intelligence","0014c132"),
  new Perk("Intense Training","images/Intense Training.png",10,"You can put a single point into any of your SPECIAL attributes.","00044cb1"),
  new Perk("Irradiated Beauty","images/Irradiated Beauty.png",,"Sleep removes all Rads (Hardcore: only -100 Rads).","xx00c255"),
  new Perk("Junk Rounds","images/Junk Rounds.png",,"You can craft ammunition using scrap metal and tin cans.","xx00fb6a"),
  new Perk("Jury Rigging","images/Jury Rigging.png",1,"Repair any item using a roughly similar item.","165815"),
  new Perk("Just Lucky I'm Alive","images/Just Lucky I'm Alive.png",,"+4 Luck for 3 minutes upon finishing a battle with less than 25% health; immunity to critical hits, +50% critical damage.","xx00c24f"),
  new Perk("Khan Trick","images/Khan Trick.png",,"Temporarily stun opponents by throwing dust or dirt at their eyes (requires dirt or sand ground)","0015b8e7"),
  new Perk("Lady Killer","images/Lady Killer.png",1,"+10% damage to the opposite sex and unique dialogue options with certain characters.","94eb9"),
  new Perk("Laser Commander","images/Laser Commander.png",1,"You do an extra 15% damage and have a 10% extra chance to critically hit with any laser weapon.","165789"),
  new Perk("Lead Belly","images/Lead Belly.png",1,"-50% radiation taken from food and water sources.","00044ca9"),
  new Perk("Legion Assault","images/Legion Assault.png",,"Knock back opponents","0015b8e9"),
  new Perk("Lessons Learned","images/Lessons Learned.png",,"+1% XP gain per player level.","xx00c256"),
  new Perk("Life Giver","images/Life Giver.png",1,"+30 hit points.","00031db1"),
  new Perk("Light Step","images/Light Step.png",1,"Floor traps or mines will not be set off.","00031db7"),
  new Perk("Light Touch","images/Light Touch.png",,"While wearing light armor you gain +5% critical hit chance and your enemies suffer a -25% critical hit chance.","xx00e87b"),
  new Perk("Living Anatomy","images/Living Anatomy.png",1,"Shows health and Damage Threshold of any target. +5% bonus to damage against humans and non-feral ghouls.","146099"),
  new Perk("Lonesome Road","images/Lonesome Road.png",,"+10% damage and +10% V.A.T.S. hit chance when you have no companions.","xx00a6dc"),
  new Perk("Long Haul","images/Long Haul.png",1,"Being over-encumbered no longer prevents you from using fast travel.","146098"),
  new Perk("Lord Death","images/Lord Death.png",3,"Deal an extra +1%/+2%/+4% damage to all enemies.","0015eae4"),
  new Perk("Luck Implant","images/Luck Implant.png",,"+1 Luck","0014c134"),
  new Perk("Machine Head","images/Machine Head.png",3,"Deal +3%/+6% damage to robots.","0015eadc"),
  new Perk("Mad Bomber","images/Mad Bomber.png",," Enables you to create special explosive recipes at any workbench.","xx00092e"),
  new Perk("Marked","images/Marked.png",,"+10% damage and +10% DT against Marked Men","xx00a6dd"),
  new Perk("Math Wrath","images/Math Wrath.png",1,"Reduces all AP costs by 10%.","00135ec3"),
  new Perk("Meat of Champions","images/Meat of Champions.png",1,"+1 Luck, Strength, Charisma and Intelligence for 60 seconds each time a corpse is consumed.","00164afb"),
  new Perk("Melee Hacker","images/Melee Hacker.png",2,"Level 1: +5% melee weapon attack speed. Level 2: +10% melee weapon attack speed.","0015eade"),
  new Perk("Meltdown","images/Meltdown.png",1,"Foes killed by your Energy Weapons emit a corona of harmful energy.","0014609a"),
  new Perk("Mile in Their Shoes","images/Mile in Their Shoes.png",,"Consuming night stalker squeezin's now grants bonuses to Perception (+1 PER), Poison Resistance (+5), and Stealth (+5 Sneak).","xx009619"),
  new Perk("Miss Fortune","images/Miss Fortune.png",1,"10% chance that Miss Fortune will incapacitate a target in V.A.T.S.","137800"),
  new Perk("Mister Sandman","images/Mister Sandman.png",1,"Can instantly kill a sleeping non-player character, and earn bonus XP when doing so.","00031dad"),
  new Perk("Monocyte Breeder","images/Monocyte Breeder.png",,"Regenerate 1 health per 10 seconds","0014cce1"),
  new Perk("Mutant Massacrer","images/Mutant Massacrer.png",3,"Deal +3%/+6%/+10% damage to super mutants.","0015eae2"),
  new Perk("Mysterious Stranger","images/Mysterious Stranger.png",1,"10% chance that the Stranger will finish off a target in V.A.T.S.","00031dbc"),
  new Perk("Nerd Rage!","images/Nerd Rage!.png",1,"+15 DT and Strength increased to 10 whenever health is 20% or lower.","00044ca7"),
  new Perk("Nerves of Steel","images/Nerves of Steel.png",1,"20% faster AP regeneration.","000e2c49"),
  new Perk("Night Person","images/Night Person.png",1,"+2 Intelligence and +2 Perception between 6:00 P.M. and 6:00 A.M.","00094ebd"),
  new Perk("Ninja","images/Ninja.png",1,"x1.15 (instead of +15 luck due to a bug) critical chance with melee and unarmed weapons, +25% damage with melee/unarmed sneak attack criticals.","00031dcc"),
  new Perk("Nuka Chemist","images/Nuka Chemist.png",1,"Unlocks special Nuka-Cola recipes at the workbench.","00165ae6"),
  new Perk("Old World Gourmet","images/Old World Gourmet.png",,"+25% addiction resistance. +50% health bonus from snack foods. Scotch, vodka and wine now give you health in addition to their normal effects.","xx00f96f"),
  new Perk("Pack Rat","images/Pack Rat.png",1,"Items with a weight of two pounds or less now weigh half as much.","0014609b"),
  new Perk("Paralyzing Palm","images/Paralyzing Palm.png",1,"Can paralyze an enemy for 30 seconds with a V.A.T.S. unarmed attack.","00044caa"),
  new Perk("Perception Implant","images/Perception Implant.png",,"+1 Perception","0014c12d"),
  new Perk("Piercing Strike","images/Piercing Strike.png",1,"All your unarmed and melee attacks negate 15 points of DT.","0014609f"),
  new Perk("Plasma Spaz","images/Plasma Spaz.png",1,"AP costs for all plasma weapons are reduced by 20%.","00165aef"),
  new Perk("Power Armor Training","images/Power Armor Training.png",1,"Ability to wear all power armor variants.","00058fdf"),
  new Perk("Purifier","images/Purifier.png",1,"You do 50% extra damage with melee and unarmed weapons against centaurs, night stalkers, spore plants, spore carriers, deathclaws and super mutants.","00135f75"),
  new Perk("Pyromaniac","images/Pyromaniac.png",1,"+50% damage with fire-based weapons.","00031db2"),
  new Perk("Quick Draw","images/Quick Draw.png",1,"Makes weapon equipping and holstering 50% faster.","001377fe"),
  new Perk("Quiet As The Waters","images/Quiet As The Waters.png",,"White Legs' Perception is effectively decreased by 3.","xx00b2f7"),
  new Perk("Rad Absorption","images/Rad Absorption.png",1,"-1 Rad every 20 seconds.","000e2c4a"),
  new Perk("Rad Child","images/Rad Child.png",1,"Regenerate 2 HP per second per 200 rads accumulated.","001656fd"),
  new Perk("Rad Resistance","images/Rad Resistance.png",1,"+25% radiation resistance permanently.","00031da9"),
  new Perk("Ranger Takedown","images/Ranger Takedown.png",,"Knock down opponents","0015b8e8"),
  new Perk("Rapid Reload","images/Rapid Reload.png",1,"All of your weapon reloads are 25% faster than normal.","001377fd"),
  new Perk("Regular Maintenance","images/Regular Maintenance.png",,"The condition of weapons and armor decays 50% slower (75% with Full Maintenance).","0015c610"),
  new Perk("Reinforced Spine","images/Reinforced Spine.png",,"Strength+2, Damage Threshold+2","xx015bbc"),
  new Perk("Retention","images/Retention.png",1,"Skill magazines last for 3 real-time minutes.","0010f09e"),
  new Perk("Robotics Expert","images/Robotics Expert.png",1,"+25% damage to robots; can shut down robots by sneaking up on them and deactivating.","00031dc2"),
  new Perk("Roughin' It","images/Roughin' It.png",,"Sleeping outside gives Well Rested benefit.","xx00c251"),
  new Perk("Run 'n Gun","images/Run 'n Gun.png",1,"Halved spread with one-handed ranged weapons while walking or running.","0014609d"),
  new Perk("Scourge of the East","images/Scourge of the East.png",,"+1 SPECIAL point, NCR Fame, Caesar's Legion Infamy","xx00c259"),
  new Perk("Scribe Assistant","images/Scribe Assistant.png",,"The player can craft workbench items through Veronica’s dialogue.","0015c613"),
  new Perk("Scribe Counter","images/Scribe Counter.png",,"Quick counter-attack after block","0015b8ea"),
  new Perk("Scrounger","images/Scrounger.png",1,"Considerably more ammunition in stockpiles.","00031daa"),
  new Perk("Search and Mark","images/Search and Mark.png",,"Chems, firearms & ammunition within a short distance are highlighted when you zoom in.","0015c611"),
  new Perk("Set Lasers for Fun","images/Set Lasers for Fun.png",2,"ALL energy weapons gain an extra +2%/+4% chance to get a critical hit.","0015eadd"),
  new Perk("Shotgun Surgeon","images/Shotgun Surgeon.png",1,"When using shotguns, regardless of ammunition used, you ignore an additional 10 points of a target's Damage Threshold.","0016578b"),
  new Perk("Sierra Madre Martini","images/Sierra Madre Martini.png",,"Adds recipe to create Sierra Madre martinis with 2 junk food, 1 tin can, and 1 jar of Cloud residue.","xx01039e"),
  new Perk("Signal Interference","images/Signal Interference.png",,"+50% time to escape signals.","xx008a2e"),
  new Perk("Silent Running","images/Silent Running.png",1,"Running no longer factors into a successful sneak attempt.","00031db3"),
  new Perk("Slayer","images/Slayer.png",1,"The speed of all your melee and unarmed attacks is increased by 30%.","165446"),
  new Perk("Sneering Imperialist","images/Sneering Imperialist.png",8,"+15% Damage and +25% accuracy in V.A.T.S. to various tribal and raider characters.","xx00f67b"),
  new Perk("Sniper","images/Sniper.png",1,"25% more likely to hit the target's head in V.A.T.S.","00031db4"),
  new Perk("Solar Powered","images/Solar Powered.png",1,"+2 Strength and +1 HP per second while outside, from 6:00 A.M. to 6:00 P.M.","00031dc5"),
  new Perk("Spineless","images/Spineless.png",,"Strength+1, DT+1, torso can no longer be crippled.","xx0098bc"),
  new Perk("Splash Damage","images/Splash Damage.png",1,"Explosives have a 25% larger area of effect.","00165af0"),
  new Perk("Spotter","images/Spotter.png",,"Hostile targets are highlighted whenever the player is actively aiming.","0015c60c"),
  new Perk("Spray and Pray","images/Spray and Pray.png",1,"Your attacks do 75% less damage to companions.","165181"),
  new Perk("Stealth Girl","images/Stealth Girl.png",,"Doubles Stealth Boy duration while also granting sneak attack criticals an extra 10% damage.","0015c60f"),
  new Perk("Stonewall","images/Stonewall.png",1,"+5 DT against melee and unarmed attacks and cannot be knocked down during combat.","165449"),
  new Perk("Strength Implant","images/Strength Implant.png",,"+1 Strength","0014c069"),
  new Perk("Strong Back","images/Strong Back.png",1,"+50 Carry Weight.","00031dde"),
  new Perk("Sub-Dermal Armor","images/Sub-Dermal Armor.png",,"+4 Damage Threshold","0014ccdf"),
  new Perk("Super Slam!","images/Super Slam!.png",1,"All melee (except thrown) and unarmed attacks have a chance of knocking your target down. 15% for Unarmed or one-handed melee, 30% for two-handed melee.","0014609e"),
  new Perk("Swift Learner","images/Swift Learner.png",3,"You gain an additional 10% whenever experience points are earned.","00031dd3"),
  new Perk("Tag!","images/Tag!.png",1,"Fourth""tag"" skill: +15 points to that skill.","00031dbd"),
  new Perk("Terrifying Presence","images/Terrifying Presence.png",1,"Can intimidate foes through dialogue; closing dialogue results in the foe fleeing for 5 seconds.","0010c6cd"),
  new Perk("The Bear-Slayer","images/The Bear-Slayer.png",,"+1 SPECIAL point, Caesar's Legion Fame, NCR Infamy","xx00c25b"),
  new Perk("The Professional","images/The Professional.png",1,"Your sneak attack criticals with revolvers, pistols, and submachine guns (guns and energy weapons) all inflict an additional 20% damage.","00165aec"),
  new Perk("The Way of the Canaanite","images/The Way of the Canaanite.png",,"Decrease in spread and double the critical chance for .45 Auto pistols.","xx00b2f5"),
  new Perk("Them's Good Eatin'","images/Them's Good Eatin'.png",,"Any living creature you kill has a 50% chance to have the potent healing items thin red paste or blood sausage when looted.","xx0098c9"),
  new Perk("Thought You Died","images/Thought You Died.png",,"+10 Health per 100 Karma; Karma reset to 0, +10% damage, immunity to critical hits.","xx00c24e"),
  new Perk("Tough Guy","images/Tough Guy.png",1,"Take 20% less limb damage.","0015ead6"),
  new Perk("Toughness","images/Toughness.png",2,"+3 DT permanently.","00031de0"),
  new Perk("Travel Light","images/Travel Light.png",1,"While wearing light armor or no armor, you run 10% faster.","146096"),
  new Perk("Tribal Wisdom","images/Tribal Wisdom.png",8,"-50% limb damage from animals, mutated animals, and mutated insects, +25% to Poison resistance, ability to eat mutated insects in sneak mode.","xx00f679"),
  new Perk("Tunnel Runner","images/Tunnel Runner.png",,"+25% sneaking speed when wearing light or no armor.","xx00c258"),
  new Perk("Unclean Living","images/Unclean Living.png",,"Temporary cloud protection, take 25% less damage.","xx008a2f"),
  new Perk("Unstoppable Force","images/Unstoppable Force.png",1,"x4 normal damage through enemy blocks with melee and unarmed attacks.","165447"),
  new Perk("Vigilant Recycler","images/Vigilant Recycler.png",1,"When using Energy Weapons, you are twice as likely to recover drained ammunition. You also have more efficient recycling recipes available at workbenches.","165816"),
  new Perk("Voracious Reader","images/Voracious Reader.png",,"Damaged books become blank magazines; can copy existing magazines into blank magazines.","xx00c253"),
  new Perk("Walker Instinct","images/Walker Instinct.png",,"+1 Perception and Agility when outside.","xx00c254"),
  new Perk("Weapon Handling","images/Weapon Handling.png",1,"Weapon Strength requirements are now 2 points lower than normal for you.","146097"),
  new Perk("Well-Stacked Cairns","images/Well-Stacked Cairns.png",,"Reaching various summits reveals nearby map markers and grants +3 Perception temporarily.","xx00b2f6"),
  new Perk("Whiskey Rose","images/Whiskey Rose.png",,"Eliminates negative effects of consumption and addiction to alcohol, while drinking specifically whiskey or wasteland tequila will raise player's Damage Threshold.","0015c60d"),
];

function makeScript()
{
  var scriptText="";
  var elements=document.getElementById("perkContainerBtm").childNodes;
  for(var i=1;i<elements.length;i++)
  {
    var id=elements[i].id;
    var ranks=document.getElementById(id+"_ranks").innerHTML;
    var editorId=document.getElementById(id+"_id").innerHTML;
    while(ranks--)
    {
      scriptText+="player.addperk "+editorId+"\n";
    }
  }
  document.getElementById("output_text").innerHTML=scriptText;
}

function switchMe(element)
{
  if(element.parentElement.id=="perkContainerTop")
  {
    document.getElementById("perkContainerBtm").appendChild(element);
  }
  else
  {
    document.getElementById("perkContainerTop").appendChild(element);
  }
  makeScript();
}

window.onload=function()
{
  var bigHTML="";
  for(var i=0;i<thePerks.length;i++)
  {
    if(thePerks[i].imge=="")
    {
      thePerks[i].imge="images/ChallengePerk.png";
    }
    if(thePerks[i].rnks==NaN)
    {
      thePerks[i].rnks=1;
    }
    bigHTML+=`<div class=perkBlock id=${thePerks[i].name} onClick=\"switchMe(this);\">\n`;
    bigHTML+=`<div class=perkName>${thePerks[i].name}</div>\n`;
    bigHTML+=`<img class=perkImage src=${thePerks[i].imge}>\n`;
    bigHTML+="<div class=perkRanksContainer><span class=perkRanks>"+
      `Ranks: <span id=${thePerks[i].name}_ranks>`+
      `${thePerks[i].rnks}</span></span></div>\n`;
    bigHTML+=`<div class=perkDesc>\n${thePerks[i].desc}\n</div>\n`;
    bigHTML+="<div class=perkID>Editor ID: <span id="+
      `${thePerks[i].name}_id>${thePerks[i].idno}</span></div>\n`;
    bigHTML+="</div>\n\n";
  }
  document.getElementById("perkContainerTop").innerHTML=bigHTML;
}
