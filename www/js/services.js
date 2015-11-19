angular.module('pathfinder.services', [])
.factory('CharacterFactory', function () {
  return {
    emptyCharacter: function () {
      return {
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
        }
      }
    }
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
            Strength: 1,
            Dexterity: 2,
            Intelligence: 3,
            Constitution: 4,
            Wisdom: 5,
            Charisma: 6
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