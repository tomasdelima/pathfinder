angular.module('pathfinder.services', [])
.service('CharacterService', function (SkillsService) {
  function emptyCharacter () {
    var self = {
      profile: {},
      race: {
        bonus: {},
      },
      attributes: {
        Strength: [10],
        Dexterity: [10],
        Intelligence: [10],
        Constitution: [10],
        Wisdom: [10],
        Charisma: [10]
      },
      skills: {
        "Acrobatics": [""],
        "Appraise": [""],
        "Bluff": [""],
        "Climb": [""],
        "Craft": [""],
        "Diplomacy": [""],
        "Disable Device": [""],
        "Disguise": [""],
        "Escape Artist": [""],
        "Fly": [""],
        "Handle Animal": [""],
        "Heal": [""],
        "Intimidate": [""],
        "Knowledge (arcana)": [""],
        "Knowledge (dungeoneering)": [""],
        "Knowledge (engineering)": [""],
        "Knowledge (geography)": [""],
        "Knowledge (history)": [""],
        "Knowledge (local)": [""],
        "Knowledge (nature)": [""],
        "Knowledge (nobility)": [""],
        "Knowledge (planes)": [""],
        "Knowledge (religion)": [""],
        "Linguistics": [""],
        "Perception": [""],
        "Perform": [""],
        "Profession": [""],
        "Ride": [""],
        "Sense Motive": [""],
        "Sleight of Hand": [""],
        "Spellcraft": [""],
        "Stealth": [""],
        "Survival": [""],
        "Swim": [""],
        "Use Magic Device": [""],
      },
      combat: {
        iniciative: {},
        ac: {},
        touch: {},
        flatFooted: {},
        savings: {
          will: {},
          reflex: {},
          fortitude: {},
        },
        attack: {
          bab: 2,
        },
        weapon: {
          attack: {},
          damage: {},
        },
      },
      speed: {},
    }
    return self
  }
  function save (scope) {
    localStorage.character = JSON.stringify({
      profile: scope.profile,
      race: scope.race,
      attributes: scope.attributes,
      skills: scope.skills,
      combat: scope.combat,
      speed: scope.speed,
    })
    console.log("Character saved")
  }
  function saveField (field_path, value) {
    var character = loadRawCharacter(),
        string = 'character.' + field_path + '="' + value + '"'
    eval(string)
    localStorage.character = JSON.stringify(character)
    console.log("Character saved: " + string)
  }
  function loadRawCharacter () {
    return localStorage.character ? JSON.parse(localStorage.character) : emptyCharacter()
  }
  function load (scope) {
    var character = loadRawCharacter()
    scope.profile = character.profile
    scope.race = character.race
    scope.attributes = character.attributes
    scope.skills = character.skills
    scope.combat = character.combat
    scope.speed = character.speed

    console.log("Character loaded")
  }
  function getAttributeTotal (attributeName) {
    var character = loadRawCharacter()
    return Number(character.attributes[attributeName].reduce(function (m, v) {
      return (Number(m) || 0) + (Number(v) || 0)
    })) + Number(getAttributeRacialBonus(attributeName))
  }
  function getAttributeRacialBonus (attributeName) {
    var character = loadRawCharacter(),
        racialBonus = character.race.bonus[attributeName] || ''
    return (racialBonus > 0 ? '+' : '') + racialBonus
  }
  function getAttributeModifier (attributeName) {
    var character = loadRawCharacter(),
        modifier = Math.floor((getAttributeTotal(attributeName) - 10)/2)
    return modifier
  }
  function getSkillTotal (skillName) {
    var attribute = Number(getAttributeModifier(SkillsService.skillAbility(skillName))) || 0,
        characterSkills = loadRawCharacter().skills[skillName],
        rank = Number(characterSkills[0]) || 0,
        misk = Number(characterSkills[1]) || 0
    return attribute + rank + misk
  }

  return {
    emptyCharacter: emptyCharacter,
    save: save,
    saveField: saveField,
    load: load,
    getAttributeTotal: getAttributeTotal,
    getAttributeRacialBonus: getAttributeRacialBonus,
    getAttributeModifier: getAttributeModifier,
    getSkillTotal: getSkillTotal,
  }
})

.service('SkillsService', function () {
  return {
    skillAbility: function (skillName) {
      return {
        "Acrobatics": "Dexterity",
        "Appraise": "Intelligence",
        "Bluff": "Charisma",
        "Climb": "Strength",
        "Craft": "Intelligence",
        "Diplomacy": "Charisma",
        "Disable Device": "Dexterity",
        "Disguise": "Charisma",
        "Escape Artist": "Dexterity",
        "Fly": "Dexterity",
        "Handle Animal": "Charisma",
        "Heal": "Wisdom",
        "Intimidate": "Charisma",
        "Knowledge (arcana)": "Intelligence",
        "Knowledge (dungeoneering)": "Intelligence",
        "Knowledge (engineering)": "Intelligence",
        "Knowledge (geography)": "Intelligence",
        "Knowledge (history)": "Intelligence",
        "Knowledge (local)": "Intelligence",
        "Knowledge (nature)": "Intelligence",
        "Knowledge (nobility)": "Intelligence",
        "Knowledge (planes)": "Intelligence",
        "Knowledge (religion)": "Intelligence",
        "Linguistics": "Intelligence",
        "Perception": "Wisdom",
        "Perform": "Charisma",
        "Profession": "Wisdom",
        "Ride": "Dexterity",
        "Sense Motive": "Wisdom",
        "Sleight of Hand": "Dexterity",
        "Spellcraft": "Intelligence",
        "Stealth": "Dexterity",
        "Survival": "Wisdom",
        "Swim": "Strength",
        "Use Magic Device": "Charisma",
      }[skillName]
    }
  }
})

.service('RacesService', function () {
  return {
    getRace: function (raceName) {
      return {
        "Dwarf": {
          bonus: {
            Constitution: 2,
            Wisdom: 2,
            Charisma: -2,
          },
          size: "Medium",
        },
        "Elf": {
          bonus: {
            Dexterity: 2,
            Intelligence: 2,
            Constitution: -2,
          },
          size: "Medium",
        },
        "Gnome": {
          bonus: {
            Constitution: 2,
            Charisma: 2,
            Strength: -2,
          },
          size: "Small",
        },
        "Half-orc": {
          bonus: "Any",
          size: "Medium",
        },
        "Half-elf": {
          bonus: "Any",
          size: "Medium",
        },
        "Halfling": {
          bonus: {
            Dexterity: 2,
            Charisma: 2,
            Strength: -2,
          },
          size: "Small",
        },
        "Human": {
          bonus: "Any",
          size: "Medium",
        },
      }[raceName]
    }
  }
})
