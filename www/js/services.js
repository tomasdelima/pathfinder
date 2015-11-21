angular.module('pathfinder.services', [])
.service('CharacterService', function () {
  function emptyCharacter () {
    return {
      basicInfo: {},
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
    }
  }
  function save (scope) {
    localStorage.character = JSON.stringify({
      basicInfo: scope.basicInfo,
      attributes: scope.attributes,
      skills: scope.skills,
    })
    console.log("Character saved")
  }
  function load (scope) {
    var character = localStorage.character ? JSON.parse(localStorage.character) : emptyCharacter()
    scope.basicInfo = character.basicInfo
    scope.attributes = character.attributes
    scope.skills = character.skills
    console.log("Character loaded")
  }

  return {
    emptyCharacter: emptyCharacter,
    save: save,
    load: load,
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
        "Half Orc": {
          bonus: {
            Strength: 2,
          }
        },
        "Elf": {
          bonus: {
            Strength: 2
          }
        },
        "Half Elf": {
          bonus: {
            Strength: 2
          }
        },
        "Human": {
          bonus: {
            Strength: 2
          }
        },
        "Gnome": {
          bonus: {
            Strength: 2
          }
        },
        "Halfling": {
          bonus: {
            Strength: 2
          }
        },
        "Human": {
          bonus: {
            Strength: 2
          }
        },
        "Dwarf": {
          bonus: {
            Constitution: 2
          }
        },
      }[raceName]
    }
  }
})