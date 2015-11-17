angular.module('characterCreator')
    .constant('SPECIALS', {
        "strength":{
            "order":0,
            "perks":{
                "Iron Fist":{
                    "order":0,
                    "picUrl":"https://vignette4.wikia.nocookie.net/fallout/images/4/4d/Fo4_Iron_Fist.png/revision/latest?cb=20151001203710",
                    "specialLevelRequired":1,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Channel your chi to unleash devastating fury! Punching attacks do 20% more damage to your opponent."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 9,
                            "description": "Punching attacks now do 40% more damage and can disarm your opponent."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 18,
                            "description": "Punching attacks now do 60% more damage. Unarmed Power Attacks have a chance to cripple one of your opponent's limbs."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 31,
                            "description": "Punching attacks now do 80% more damage. Unarmed Power Attacks have an increased chance to cripple one of your opponent's limbs."
                        },
                        {
                            "order": 5,
                            "playerLevelRequired": 46,
                            "description": "Punching attacks now do double damage. Criticals in V.A.T.S. will paralyze your opponent."
                        }
                    ]
                },
                "Big Leagues":{
                    "order":1,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/0/0f/Fo4_Big_Leagues.png/revision/latest?cb=20151001203923",
                    "specialLevelRequired":2,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Swing for the fences! Do 20% more melee weapon damage."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 7,
                            "description": "You now do 40% more melee weapon damage and gain a chance to disarm your opponent."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 15,
                            "description": "You now do 60% more melee weapon damage and gain an increased chance to disarm your opponent."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 27,
                            "description": "You now do 80% more melee weapon damage and hit all targets in front of you."
                        },
                        {
                            "order": 5,
                            "playerLevelRequired": 42,
                            "description": "You now do double damage with a melee weapon, and gain a chance to cripple your opponent, or grand slam their head clean off!"
                        }
                    ]
                },
                "Armorer":{
                    "order":2,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/b/b3/Fo4_Armorer.png/revision/latest?cb=20151102185103",
                    "specialLevelRequired":3,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Protect yourself from the dangers of the Wasteland with access to base level and Rank 1 armor mods."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 13,
                            "description": "You gain access to Rank 2 armor mods."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 25,
                            "description": "You gain access to Rank 3 armor mods."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 39,
                            "description": "You gain access to Rank 4 armor mods."
                        }
                    ]
                },
                "Blacksmith":{
                    "order":3,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/f/f9/Fo4_Blacksmith.png/revision/latest?cb=20151102185104",
                    "specialLevelRequired":4,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Fire up the forge and gain access to base level and Rank 1 melee weapon mods."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 16,
                            "description": "You gain access to Rank 2 melee weapon mods."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 29,
                            "description": "You gain access to Rank 3 melee weapon mods."
                        }
                    ]
                },
                "Heavy Gunner":{
                    "order":4,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/a/a5/Fo4_Heavy_Gunner.png/revision/latest?cb=20151102185130",
                    "specialLevelRequired":5,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Thanks to practice and conditioning, heavy guns do 20% more damage."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 11,
                            "description": "Heavy guns now do 40% more damage, and have improved hip fire accuracy."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 21,
                            "description": "Heavy guns now do 60% more damage. Hip fire accuracy is increased even more."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 35,
                            "description": "Heavy guns now do 80% more damage and have a chance to stagger your opponent."
                        },
                        {
                            "order": 5,
                            "playerLevelRequired": 47,
                            "description": "Heavy guns now do double damage."
                        }
                    ]
                },
                "Strong Back":{
                    "order":5,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/f/f0/Fo4_Strong_Back.png/revision/latest?cb=20151001204529",
                    "specialLevelRequired":6,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "What are you, part pack mule? Gain +25 to carry weight."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 10,
                            "description": "You now have +50 to carry weight."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 20,
                            "description": "When overencumbered, you can use Action Points to run."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 30,
                            "description": "When overencumbered, you can fast travel."
                        }
                    ]
                },
                "Steady Aim":{
                    "order":6,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/5/59/Fo4_Steady_Aim.png/revision/latest?cb=20151102185104",
                    "specialLevelRequired":7,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Stay on target! Hip-fire accuracy is improved when firing any gun."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 28,
                            "description": "Hip-fire accuracy is improved even more when firing any gun."
                        }
                    ]
                },
                "Basher":{
                    "order":7,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/a/a5/Fo4_Heavy_Gunner.png/revision/latest?cb=20151102185130",
                    "specialLevelRequired":8,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Get up close and personal! Gun bashing does 25% more damage."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 5,
                            "description": "Gun bashing now does 50% more damage and possibly cripples your opponent."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 14,
                            "description": "Gun bashing now does 75% more damage and has an increased chance to cripple your opponent."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 26,
                            "description": "Gun bashing does double damage and has an increased chance to cripple your opponent. It may also inflict a Critical Hit."
                        }
                    ]
                },
                "Rooted":{
                    "order":8,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/1/19/Fo4_Rooted.png/revision/latest?cb=20151102184341",
                    "specialLevelRequired":9,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You're part tree! While standing still, you gain +25 Damage Resistance and your melee and unarmed attacks deal 25% more damage."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 22,
                            "description": "While standing still, you now gain +50 Damage Resistance and your melee and unarmed attacks deal 50% more damage."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 43,
                            "description": "While standing still, you may automatically disarm enemies that use melee weapons against you."
                        }
                    ]
                },
                "Pain Train":{
                    "order":9,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/2/23/Fo4_Pain_Train.png/revision/latest?cb=20151102184341",
                    "specialLevelRequired":10,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Choo Choo! All aboard! While wearing Power Armor,sprinting into enemies hurts and staggers them. (Robots and oversized enemies are immune to the stagger.)"
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 24,
                            "description": "Sprinting into enemies while wearing Power Armor now causes severe damage and a more powerful stagger. (Robots and oversized enemies are immune to the stagger.)"
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 50,
                            "description": "Sprinting into enemies while wearing Power Armor now causes massive damage and knocks them down. Impact landing near enemies inflicts even more damage."
                        }
                    ]
                }
            }
        },
        "perception":{
            "order":1,
            "perks":{
                "Pickpocket":{
                    "order":0,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/7/7a/Fo4_Pickpocket.png/revision/latest?cb=20151102184340",
                    "specialLevelRequired":1,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Your quick hands and sticky fingers make picking pockets 25% easier."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 6,
                            "description": "Picking pockets is now 50% easier. You can place a live grenade in a person's inventory."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 17,
                            "description": "Picking pockets is now 75% easier, and you can steal equipped weapons."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 30,
                            "description": "Picking pockets is now twice as easy, and you can steal equipped items."
                        }
                    ]
                },
                "Rifleman":{
                    "order":1,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/4/4a/Fo4_Rifleman.png/revision/latest?cb=20151001213324",
                    "specialLevelRequired":2,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Keep your distance long and your kill-count high. Attacks with non-automatic rifles do 20% more damage."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 9,
                            "description": "Attacks with non-automatic rifles do 40% more damage and ignore 15% of a target's armor."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 18,
                            "description": "Attacks with non-automatic rifles do 60% more damage and ignore 20% of a target's armor."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 31,
                            "description": "You now do 80% more melee weapon damage and hit all targets in front of you."
                        },
                        {
                            "order": 5,
                            "playerLevelRequired": 46,
                            "description": "Attacks with non-automatic rifles do double damage and ignore 30% of a target's armor. They also have a slightly higher chance of crippling a limb."
                        }
                    ]
                },
                "Awareness":{
                    "order":2,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/5/54/Fo4_Awareness.png/revision/latest?cb=20151102184340",
                    "specialLevelRequired":3,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "To defeat your enemies, know their weaknesses! You can view a target's specific damage resistances in V.A.T.S."
                        }
                    ]
                },
                "Locksmith":{
                    "order":3,
                    "picUrl":"https://vignette4.wikia.nocookie.net/fallout/images/8/86/Fo4_Locksmith.png/revision/latest?cb=20151102184341",
                    "specialLevelRequired":4,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Your nimble fingers allow you to pick advanced locks."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 7,
                            "description": "You can pick Expert locks."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 18,
                            "description": "You can pick Master locks."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 41,
                            "description": "Your bobby pins never break during lockpicking."
                        }
                    ]
                },
                "Demolition Expert":{
                    "order":4,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/d/d8/Fo4_Demolition_Expert.png/revision/latest?cb=20151001213510",
                    "specialLevelRequired":5,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "The bigger the boom, the better! Your explosives do 25% more damage, and you can craft explosives at any Chemistry Station."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 10,
                            "description": "Your explosives do 50% more damage, and grenades gain a throwing arc."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 22,
                            "description": "Your explosives do 75% more damage and affect a larger area."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 34,
                            "description": "Heavy guns now do 80% more damage and have a chance to stagger your opponent."
                        },
                        {
                            "order": 5,
                            "playerLevelRequired": 47,
                            "description": "Your explosives now do double damage. Mines and grenades shot in V.A.T.S explode for double damage, too."
                        }
                    ]
                },
                "Night Person":{
                    "order":5,
                    "picUrl":"https://vignette4.wikia.nocookie.net/fallout/images/9/98/Fo4_Night_Person.png/revision/latest?cb=20151107003009",
                    "specialLevelRequired":6,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You are a creature of the night! Gain +2 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 25,
                            "description": "You now have +3 to Intelligence and Perception between the hours of 6:00 p.m. and 6:00 a.m., and night vision when sneaking."
                        }
                    ]
                },
                "Refractor":{
                    "order":6,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/a/aa/Fo4_Refractor.png/revision/latest?cb=20151102184340",
                    "specialLevelRequired":7,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You must be part mirror! Instantly gain +10 Energy Resistance."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 11,
                            "description": "You now have +20 Energy Resistance."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 21,
                            "description": "You now have +30 Energy Resistance."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 35,
                            "description": "You now have +40 Energy Resistance."
                        },
                        {
                            "order": 5,
                            "playerLevelRequired": 42,
                            "description": "You now have +50 Energy Resistance."
                        }
                    ]
                },
                "Sniper":{
                    "order":7,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/8/8b/Fo4_Sniper.png/revision/latest?cb=20151001213600",
                    "specialLevelRequired":8,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "It's all about focus. You have improved control and can hold your breath longer when aiming with scopes."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 13,
                            "description": "Non-automatic, scoped rifles have a chance of knocking down your target."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 26,
                            "description": "Non-automatic, scoped rifles gain +25% accuracy to head shot in V.A.T.S."
                        }
                    ]
                },
                "Penetrator":{
                    "order":8,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/f/f7/Fo4_Penetrator.png/revision/latest?cb=20151102184339",
                    "specialLevelRequired":9,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "There's no place to hide! In V.A.T.S you can target an enemy's body parts that are blocked by cover, with a decrease in accuracy."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 28,
                            "description": "In V.A.T.S when you target an enemy's body parts that are blocked by cover, there is no decrease in accuracy."
                        }
                    ]
                },
                "Concentrated Fire":{
                    "order":9,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/9/94/Fo4_Concentrated_Fire.png/revision/latest?cb=20151001213650",
                    "specialLevelRequired":10,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Stay Focused! In V.A.T.S every attack on the same body part gains +10% accuracy."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 24,
                            "description": "In V.A.T.S every attack on the same body part gains +15% accuracy."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 50,
                            "description": "In V.A.T.S every attack on the same body part gains +20% accuracy and does 20% more damage."
                        }
                    ]
                }
            }
        },
        "endurance":{
            "order":2,
            "perks":{
                "Toughness":{
                    "order":0,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/3/34/Fo4_Toughness.png/revision/latest?cb=20151002162154",
                    "specialLevelRequired":1,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "If nothing else, you can take a beating! Instantly gain +10 Damage Resistance."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 9,
                            "description": "You now have +20 damage resistance."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 18,
                            "description": "You now have +30 damage resistance."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 31,
                            "description": "You now have +40 damage resistance."
                        },
                        {
                            "order": 5,
                            "playerLevelRequired": 46,
                            "description": "You now have +50 damage resistance."
                        }
                    ]
                },
                "Lead Belly":{
                    "order":1,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/0/09/Fo4_Lead_Belly.png/revision/latest?cb=20151001213914",
                    "specialLevelRequired":2,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Your digestive tract has adjusted to the weirdness of the Wasteland! Take less radiation from eating or drinking."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 6,
                            "description": "You take even less radiation from eating or drinking."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 17,
                            "description": "You take no radiation from eating or drinking."
                        }
                    ]
                },
                "Lifegiver":{
                    "order":2,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/6/65/Fo4_Life_Giver.png/revision/latest?cb=20151002181424",
                    "specialLevelRequired":3,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You embody wellness! Instantly gain +20 maximum Health."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 8,
                            "description": "You instantly gain another +20 maximum Health."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 20,
                            "description": "You instantly gain another +20 maximum Health, and slowly regenerate lost Health."
                        }
                    ]
                },
                "Chem Resistant":{
                    "order":3,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/1/19/Fo4_Chem_Resistant.png/revision/latest?cb=20151002181424",
                    "specialLevelRequired":4,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "All the rush without the hassle! You're 50% less likely to get addicted when consuming Chems."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 22,
                            "description": "You gain complete immunity to chem addiction."
                        }
                    ]
                },
                "Aquaboy":{
                    "order":4,
                    "picUrl":"https://vignette4.wikia.nocookie.net/fallout/images/2/27/Fo4_Aquaboy.png/revision/latest?cb=20151102184339",
                    "specialLevelRequired":5,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Water is your ally. You no longer take radiation damage from swimming, and can breathe underwater."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 21,
                            "description": "You become totally undetectable while submerged."
                        }
                    ]
                },
                "Rad Resistant":{
                    "order":5,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/a/a6/Fo4_Rad_Resistant.png/revision/latest?cb=20151109001216",
                    "specialLevelRequired":6,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Exposure to the Wasteland has made you more resilient, instantly granting +10 Radiation Resistance."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 13,
                            "description": "You now have +20 Radiation Resistance."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 26,
                            "description": "You now have +30 Radiation Resistance."
                        }
                    ]
                },
                "Adamantium Skeleton":{
                    "order":6,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/6/6f/Fo4_Adamantium_Skeleton.png/revision/latest?cb=20151003161918",
                    "specialLevelRequired":7,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Your skeleton has been infused with indestructible metal, reducing limb damage by 30%."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 13,
                            "description": "Your limb damage is now reduced by 60%."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 26,
                            "description": "Your limb damage is completely eliminated."
                        }
                    ]
                },
                "Cannibal":{
                    "order":7,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/d/d9/Fo4_Cannibal.png/revision/latest?cb=20151002163210",
                    "specialLevelRequired":8,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Feast on mortal flesh to heal your wounds! Eating human corpses restores Health."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 19,
                            "description": "Eating Ghoul or Super Mutant corpses restores Health."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 38,
                            "description": "Eating human, Ghoul or Super Mutant corpses now restores a significant amount of Health."
                        }
                    ]
                },
                "Ghoulish":{
                    "order":8,
                    "picUrl":"https://vignette4.wikia.nocookie.net/fallout/images/6/64/Fo4_Ghoulish.png/revision/latest?cb=20151102184339",
                    "specialLevelRequired":9,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Sure, you're still human - on the outside! Radiation now regenerates your lost Health."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 24,
                            "description": "Radiation now regenerates even more of your lost Health."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 48,
                            "description": "Radiation now regenerates even more of your lost Health, and some Feral Ghouls will randomly become friendly."
                        }
                    ]
                },
                "Solar Powered":{
                    "order":9,
                    "picUrl":"https://vignette4.wikia.nocookie.net/fallout/images/d/de/Fo4_Solar_Powered.png/revision/latest?cb=20151003161047",
                    "specialLevelRequired":10,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Catch some rays! Gain +2 to Strength and Endurance between the hours of 6:00a.m. and 6:00p.m."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 27,
                            "description": "Sunlight slowly heals your radiation damage."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 50,
                            "description": "Sunlight slowly regenerates your lost Health."
                        }
                    ]
                }
            }
        },
        "charisma":{
            "order":3,
            "perks":{
                "Cap Collector":{
                    "order":0,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/4/42/Fo4_Cap_Collector.png/revision/latest?cb=20151002164005",
                    "specialLevelRequired":1,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You've mastered the art of the deal! Buying and selling prices at vendors are better."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 20,
                            "description": "Buying and selling prices of vendors are now much better."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 41,
                            "description": "You can now invest a total of 500 caps to raise a store's buying capacity."
                        }
                    ]
                },
                "Lady Killer":{
                    "order":1,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/1/1a/Fo4_Lady_Killer.png/revision/latest?cb=20151002164345",
                    "specialLevelRequired":2,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You're charming... and dangerous. Men/Women suffer +5% damage in combat, and are easier to persuade in dialogue."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 7,
                            "description": "Men/Women now suffer +10% damage in combat, and are even easier to persuade in dialogue. They are also easier to pacify with the Intimidation perk."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 16,
                            "description": "Men/Women now suffer +15% damage in combat, and are much easier to persuade in dialogue. They are now even easier to pacify with the Intimidation perk."
                        }
                    ]
                },
                "Lone Wanderer":{
                    "order":2,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/d/d4/Fo4_Lone_Wanderer.png/revision/latest?cb=20151002164543",
                    "specialLevelRequired":3,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Who needs friends, anyway? When adventuring without a companion, you take 15% less damage and carry weight increases by 50."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 17,
                            "description": "When adventuring without a companion, you take 20% less damage and carry weight increases by 100."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 40,
                            "description": "When adventuring without a companion, you do 25% more damage."
                        }
                    ]
                },
                "Attack Dog":{
                    "order":3,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/f/f6/Fo4_Attack_Dog.png/revision/latest?cb=20151002164721",
                    "specialLevelRequired":4,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Your faithful canine companion can hold an enemy, giving you a greater chance to hit them in V.A.T.S."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 9,
                            "description": "When your dog holds an enemy, there's a chance he'll cripple the limb he's biting."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 25,
                            "description": "When your dog holds an enemy, there's a chance he'll cause them to bleed."
                        }
                    ]
                },
                "Animal Friend":{
                    "order":4,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/5/56/Fo4_Animal_Friend.png/revision/latest?cb=20151002164944",
                    "specialLevelRequired":5,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Commune with beasts! With your gun, aim at any animal below your level and gain a chance to pacify it."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 12,
                            "description": "When you successfully pacify an animal, you can incite it to attack."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 28,
                            "description": "When you successfully pacify an animal, you can give it specific commands."
                        }
                    ]
                },
                "Local Leader":{
                    "order":5,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/f/fd/Fo4_Local_Leader.png/revision/latest?cb=20151002165126",
                    "specialLevelRequired":6,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "As the ruler everyone turns to, you are able to establish supply lines between your workshop settlements."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 14,
                            "description": "You can build stores and workstations at workshop settlements."
                        }
                    ]
                },
                "Party Boy":{
                    "order":6,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/3/3c/Fo4_Party_Boy.png/revision/latest?cb=20151002212554",
                    "specialLevelRequired":7,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Nobody has a good time like you! There's no chance you'll get addicted to alcohol."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 15,
                            "description": "The effects of alcohol are doubled."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 37,
                            "description": "Your Luck is increased by 3 while you're under the influence of alcohol."
                        }
                    ]
                },
                "Inspirational":{
                    "order":7,
                    "picUrl":"https://vignette4.wikia.nocookie.net/fallout/images/3/38/Fo4_Inspirational.png/revision/latest?cb=20151002212622",
                    "specialLevelRequired":8,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Because you lead by example, your companion does more damage in combat, and cannot hurt you."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 19,
                            "description": "Your companion resists more damage in combat, and can't be harmed by your attacks."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 43,
                            "description": "Your companion can carry more items."
                        }
                    ]
                },
                "Wasteland Whisperer":{
                    "order":8,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/3/34/Fo4_Wasteland_Whisperer.png/revision/latest?cb=20151002212723",
                    "specialLevelRequired":9,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Master the post-apocalypse! With your gun, aim at any Wasteland creature below your level and gain a chance to pacify it."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 21,
                            "description": "When you successfully pacify a creature, you can incite it to attack."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 49,
                            "description": "When you successfully pacify a creature, you can give it specific commands."
                        }
                    ]
                },
                "Intimidation":{
                    "order":9,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/e/ef/Fo4_Intimidation.png/revision/latest?cb=20151002212846",
                    "specialLevelRequired":10,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Time to show everyone who's boss! With your gun, aim at any human opponent below your level and gain a chance to pacify them."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 23,
                            "description": "When you successfully pacify someone, you can incite them to attack."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 50,
                            "description": "When you successfully pacify someone, you can give them specific commands."
                        }
                    ]
                }
            }
        },
        "intelligenece":{
            "order":4,
            "perks":{
                "VANS":{
                    "order":0,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/a/ad/Fo4_VANS_perk.png/revision/latest?cb=20151002213553",
                    "specialLevelRequired":1,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Let Vault-Tec guide you! The path to your closest quest target is displayed in V.A.T.S."
                        }
                    ]
                },
                "Medic":{
                    "order":1,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/4/42/Fo4_Medic.png/revision/latest?cb=20151002213630",
                    "specialLevelRequired":2,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Is there a doctor in the house? Stimpaks restore 40% of lost Health, and RadAway removes 40% of radiation."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 18,
                            "description": "Stimpaks restore 60% of lost Health, and RadAway removes 60% of radiation."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 30,
                            "description": "Stimpaks restore 80% of lost Health, and RadAway removes 80% of radiation."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 49,
                            "description": "Stimpaks and RadAway restore all lost health and radiation, and work much more quickly."
                        }
                    ]
                },
                "Gun Nut":{
                    "order":2,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/6/63/Fo4_Gun_Nut.png/revision/latest?cb=20151002213805",
                    "specialLevelRequired":3,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You gain access to base level and Rank 1 gun mods."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 13,
                            "description": "You gain access to Rank 2 gun mods."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 25,
                            "description": "You gain access to Rank 3 gun mods."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 39,
                            "description": "You gain access to Rank 4 gun mods."
                        }
                    ]
                },
                "Hacker":{
                    "order":3,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/e/ec/Fo4_Hacker.png/revision/latest?cb=20151002213924",
                    "specialLevelRequired":4,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Knowledge of cutting-edge computer encryption allows you to hack Advanced terminals."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 9,
                            "description": "You can hack Expert terminals."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 21,
                            "description": "You can hack Master terminals."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 33,
                            "description": "When hacking, you never get locked out of a terminal when things go wrong."
                        }
                    ]
                },
                "Scrapper":{
                    "order":4,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/e/ea/Fo4_Scrapper.png/revision/latest?cb=20151102184339",
                    "specialLevelRequired":5,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Waste not, want not! You can salvage uncommon components like screws, aluminum, and copper when scrapping weapons and armor."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 23,
                            "description": "You can salvage rare components like circuitry, nuclear material, and fiber optics when scrapping weapons and armor. Items with favorited components are highlighted."
                        }
                    ]
                },
                "Science!":{
                    "order":5,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/f/f5/Fo4_Science%21.png/revision/latest?cb=20151002214132",
                    "specialLevelRequired":6,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Take full advantage of advanced technology with access to base level and Rank 1 high-tech mods."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 17,
                            "description": "You gain access to Rank 2 high-tech mods."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 28,
                            "description": "You gain access to Rank 3 high-tech mods."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 41,
                            "description": "You gain access to Rank 4 high-tech mods."
                        }
                    ]
                },
                "Chemist":{
                    "order":6,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/e/e8/Fo4_Chemist.png/revision/latest?cb=20151102184338",
                    "specialLevelRequired":7,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Any chems you take last 50% longer. Far out."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 16,
                            "description": "Any chems you take now last twice as long."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 32,
                            "description": "Any chems you take now last an additional 150% longer."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 45,
                            "description": "Any chems you take now last an additional 200% longer."
                        }
                    ]
                },
                "Robotics Expert":{
                    "order":7,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/e/eb/Fo4_Robotics_Expert.png/revision/latest?cb=20151002214717",
                    "specialLevelRequired":8,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Machines will always serve humans, if you have anything to say about it. Hack a robot, and gain a chance to power it on or off, or initiate a self-destruct."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 19,
                            "description": "When you successfully hack a robot, you can incite it to attack."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 44,
                            "description": "When you successfully hack a robot, you can give it specific commands."
                        }
                    ]
                },
                "Nuclear Physicist":{
                    "order":8,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/f/f7/Fo4_Nuclear_Physicist.png/revision/latest?cb=20151102184338",
                    "specialLevelRequired":9,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You've learned to split the atom... and command it. Radiation weapons do 50% more damage and Fusion Cores last an extra 25% longer."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 14,
                            "description": "Radiation weapons now do double damage and Fusion Cores last an extra 50% longer."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 26,
                            "description": "Fusion Cores can be ejected from Power Armor like devastating grenades and Fusion Cores last twice as long."
                        }
                    ]
                },
                "Nerg Rage!":{
                    "order":9,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/0/02/Fo4_Nerd_Rage%21.png/revision/latest?cb=20151002215117",
                    "specialLevelRequired":10,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Genius. Is. ANGRY! When your Health drops below 20%, time slows and you gain +20 Damage resistance and do 20% more damage while the effect lasts."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 31,
                            "description": "You now gain 30 more Damage Resistance and do 30% more damage while Nerd Rage is in effect."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 50,
                            "description": "You now gain 40 more Damage Resistance and do 40% more damage while Nerd Rage is in effect. Kills you make while enraged restore some lost Health."
                        }
                    ]
                }
            }
        },
        "agility":{
            "order":5,
            "perks":{
                "Gunslinger":{
                    "order":0,
                    "picUrl":"https://vignette4.wikia.nocookie.net/fallout/images/e/e0/Fo4_Gunslinger.png/revision/latest?cb=20151003154712",
                    "specialLevelRequired":1,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Channel the spirit of the old west! Non-automatic pistols do 20% more damage."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 7,
                            "description": "Non-automatic pistols now do 40% more damage and have increased range."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 15,
                            "description": "Non-automatic pistols now do 60% more damage and range is increased even further."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 27,
                            "description": "Non-automatic pistols now do 80% more damage and their attacks can disarm opponents."
                        },
                        {
                            "order": 5,
                            "playerLevelRequired": 42,
                            "description": "Non-automatic pistols now do double damage. Their attacks have a much better chance to disarm opponents, and may even cripple a limb."
                        }
                    ]
                },
                "Commando":{
                    "order":1,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/8/8d/Fo4_Commando.png/revision/latest?cb=20151003154739",
                    "specialLevelRequired":2,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Rigorous combat training means automatic weapons do 20% more damage."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 11,
                            "description": "Attacks with automatic weapons do 40% more damage, with improved hip fire accuracy."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 21,
                            "description": "Attacks with automatic weapons do 60% more damage. Hip fire accuracy is improved even more."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 35,
                            "description": "Attacks with automatic weapons do 80% more damage and gain a chance to stagger opponents."
                        },
                        {
                            "order": 5,
                            "playerLevelRequired": 49,
                            "description": "Your automatic weapons now do double damage and have a greater chance to stagger opponents."
                        }
                    ]
                },
                "Sneak":{
                    "order":2,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/e/e4/Fo4_Sneak_perk.png/revision/latest?cb=20151003154931",
                    "specialLevelRequired":3,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Become whisper, become shadow. You are 20% harder to detect while sneaking."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 5,
                            "description": "You are now 30% harder to detect while sneaking, and no longer trigger floor-based traps."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 12,
                            "description": "You are now 40% harder to detect while sneaking, and no longer trigger enemy mines."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 23,
                            "description": "You are now 50% harder to detect while sneaking, and running no longer adversely affects stealth."
                        },
                        {
                            "order": 5,
                            "playerLevelRequired": 38,
                            "description": "Engaging stealth causes distant enemies to lose you."
                        }
                    ]
                },
                "Mister Sandman":{
                    "order":3,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/7/79/Fo4_Mister_Sandman.png/revision/latest?cb=20151003155154",
                    "specialLevelRequired":4,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "As an agent of death, you can instantly kill a sleeping person. Your silenced weapons do an additional 15% sneak attack damage."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 17,
                            "description": "Your silenced weapons do an additional 30% sneak attack damage."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 30,
                            "description": "Your silenced weapons now do 50% more sneak attack damage."
                        }
                    ]
                },
                "Action Boy":{
                    "order":4,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/0/03/Fo4_Action_Boy.png/revision/latest?cb=20151002162338",
                    "specialLevelRequired":5,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "There's no time to waste! Action Points regenerate 25% faster."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 18,
                            "description": "Your Action Points now regenerate 50% faster."
                        }
                    ]
                },
                "Moving Target":{
                    "order":5,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/5/58/Fo4_Moving_Target.png/revision/latest?cb=20151102184338",
                    "specialLevelRequired":6,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "They can't hurt what they can't hit! Get 25+ Damage Resistance and 25+ Energy Resistance when you're sprinting."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 24,
                            "description": "You now get +50 Damage Resistance and +50 Energy Resistance when you're sprinting."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 44,
                            "description": "Sprinting costs 50% fewer Action Points."
                        }
                    ]
                },
                "Ninja":{
                    "order":6,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/b/ba/Fo4_Ninja.png/revision/latest?cb=20151003155305",
                    "specialLevelRequired":7,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Trained as a shadow warrior, your ranged sneak attack do 2.5x normal damage and your melee attacks do 4x normal damage."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 16,
                            "description": "Your ranged sneak attacks do 3x normal damage and your melee sneak attacks do 5x normal damage."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 33,
                            "description": "Your ranged sneak attacks do 3.5x normal damage and your melee sneak attacks do 10x normal damage."
                        }
                    ]
                },
                "Quick Hands":{
                    "order":7,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/f/f4/Fo4_Quick_Hands.png/revision/latest?cb=20151102184338",
                    "specialLevelRequired":8,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "In combat, there's no time to hesitate. You can reload all guns faster."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 28,
                            "description": "Reloading guns costs no Action Points in V.A.T.S."
                        }
                    ]
                },
                "Blitz":{
                    "order":8,
                    "picUrl":"https://vignette4.wikia.nocookie.net/fallout/images/f/f2/Fo4_Blitz.png/revision/latest?cb=20151102184337",
                    "specialLevelRequired":9,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Find the gap and make the tackle! V.A.T.S. melee distance is increased significantly."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 29,
                            "description": "V.A.T.S. melee distance is increased even more, and the farther the Blitz distance, the greater the damage."
                        }
                    ]
                },
                "Gun Fu":{
                    "order":9,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/3/37/Fo4_Gun_Fu.png/revision/latest?cb=20151003155419",
                    "specialLevelRequired":10,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You've learned to apply ancient martial arts to gunplay! Do 25% more damage to your second V.A.T.S. target and beyond."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 26,
                            "description": "In V.A.T.S. you do 50% more damage to your third target and beyond."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 50,
                            "description": "In V.A.T.S. you instantly do a Critical Hit against your fourth target and beyond."
                        }
                    ]
                }
            }
        },
        "luck":{
            "order":6,
            "perks":{
                "Fortune Finder":{
                    "order":0,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/e/e6/Fo4_Fortune_Finder.png/revision/latest?cb=20151003155633",
                    "specialLevelRequired":1,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You find more bottle caps in containers."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 5,
                            "description": "You find even more bottle caps in containers."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 25,
                            "description": "You find even more bottle caps in containers."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 40,
                            "description": "You find even more bottle caps in containers, and there is a chance of enemies exploding into a shower of caps when you kill them."
                        }
                    ]
                },
                "Scrounger":{
                    "order":1,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/e/e7/Fo4_Scrounger.png/revision/latest?cb=20151003155655",
                    "specialLevelRequired":2,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You find more ammunition in containers."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 7,
                            "description": "You find even more ammunition in containers."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 24,
                            "description": "You find even more ammunition in containers."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 37,
                            "description": "You find even more ammunition in containers."
                        }
                    ]
                },
                "Bloody Mess":{
                    "order":2,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/5/5d/Fo4_Bloody_Mess.png/revision/latest?cb=20151003155854",
                    "specialLevelRequired":3,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "+5% bonus damage means enemies will sometimes explode into a gory red paste. Watch out for flying eyeballs!"
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 9,
                            "description": "You now inflict +10% damage in combat."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 31,
                            "description": "You now inflict +15% damage in combat."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 47,
                            "description": "When an enemy explodes, nearby enemies may suffer the same fate."
                        }
                    ]
                },
                "Mysterious Stranger":{
                    "order":3,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/e/ef/Fo4_Mysterious_Stranger_perk.png/revision/latest?cb=20151003155917",
                    "specialLevelRequired":4,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Who is he? Why does he help? Who cares! The Mysterious Stranger will appear occasionally in V.A.T.S. to lend a hand, with deadly efficiency..."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 22,
                            "description": "The Mysterious Stranger appears more often in V.A.T.S."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 41,
                            "description": "The Mysterious Stranger appears more often in V.A.T.S. When he kills an opponent, there is a chance your Critical meter gets filled."
                        }
                    ]
                },
                "Idiot Savant":{
                    "order":4,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/9/90/Fo4_Idiot_Savant.png/revision/latest?cb=20151102184337",
                    "specialLevelRequired":5,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You're not stupid! Just... different. Randomly receive 3x XP from any action, and the lower your Intelligence, the greater the chance."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 11,
                            "description": "You now randomly receive 5x XP from any action. The lower your Intelligence, the greater the chance."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 34,
                            "description": "Randomly receiving bonus XP from any action may trigger 3x XP for all kills for a short period of time. The lower your Intelligence, the greater the chance."
                        }
                    ]
                },
                "Better Criticals":{
                    "order":5,
                    "picUrl":"https://vignette2.wikia.nocookie.net/fallout/images/b/b6/Fo4_Better_Criticals.png/revision/latest?cb=20151003160057",
                    "specialLevelRequired":6,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Advanced training for enhanced combat effectiveness! Criticals do 50% more extra damage."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 15,
                            "description": "Your criticals now do twice as much extra damage."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 40,
                            "description": "Your criticals now do 2.5x as much extra damage."
                        }
                    ]
                },
                "Critical Banker":{
                    "order":6,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/0/01/Fo4_Critical_Banker.png/revision/latest?cb=20151102184337",
                    "specialLevelRequired":7,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "You're a patient battlefield tactician, and can save a Critical Hit, to be used in V.A.T.S. when you need it most."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 17,
                            "description": "You can now save 2 Critical Hits, to be used in V.A.T.S. when you need them the most."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 43,
                            "description": "You can now save 3 Critical Hits, to be used in V.A.T.S. when you need them the most. Banking a Critical has a chance to save an additional Critical."
                        }
                    ]
                },
                "Grim Reaper's Sprint":{
                    "order":7,
                    "picUrl":"https://vignette3.wikia.nocookie.net/fallout/images/e/e1/Fo4_Grim_Reapers_Sprint.png/revision/latest?cb=20151003160231",
                    "specialLevelRequired":8,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Death becomes you! Any kill in V.A.T.S. has a 15% chance to restore all Action Points."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 19,
                            "description": "Any kill in V.A.T.S. now has a 25% chance to restore all Action Points."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 46,
                            "description": "Any kill in V.A.T.S. has a 35% chance to restore all Action Points and refill your Critical meter."
                        }
                    ]
                },
                "Four Leaf Clover":{
                    "order":8,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/9/9a/Fo4_Four_Leaf_Clover.png/revision/latest?cb=20151102184336",
                    "specialLevelRequired":9,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "Feeling Lucky? You should! Each hit in V.A.T.S. has a chance of filling your Critical meter."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 13,
                            "description": "Each hit in V.A.T.S. now has an even better chance of filling your Critical meter."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 32,
                            "description": "Each hit in V.A.T.S. now has a very good chance of filling your Critical meter."
                        },
                        {
                            "order": 4,
                            "playerLevelRequired": 48,
                            "description": "Each hit in V.A.T.S. now has an excellent chance of filling your Critical meter."
                        }
                    ]
                },
                "Ricochet":{
                    "order":9,
                    "picUrl":"https://vignette1.wikia.nocookie.net/fallout/images/d/da/Fo4_Ricochet.png/revision/latest?cb=20151102184335",
                    "specialLevelRequired":10,
                    "ranks": [
                        {
                            "order": 1,
                            "playerLevelRequired": 1,
                            "description": "What goes around comes around! Any enemy's ranged attacks will sometimes ricochet back and instantly kill them. The closer you are to death, the higher the chance."
                        },
                        {
                            "order": 2,
                            "playerLevelRequired": 29,
                            "description": "There's an increased chance that an enemy's shot will ricochet back and kill them."
                        },
                        {
                            "order": 3,
                            "playerLevelRequired": 50,
                            "description": "When an enemy's shot ricochets back and kills them, there is a chance your Critical meter gets filled."
                        }
                    ]
                }
            }
        }
    });
