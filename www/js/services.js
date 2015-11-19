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
          "Acrobatics": [0],
          "Appraise": [0],
          "Bluff": [0],
          "Climb": [0],
          "Craft": [0],
          "Diplomacy": [0],
          "Disable Device": [0],
          "Disguise": [0],
          "Escape Artist": [0],
          "Fly": [0],
          "Handle Animal": [0],
          "Heal": [0],
          "Intimidate": [0],
          "Knowledge (arcana)": [0],
          "Knowledge (dungeoneering)": [0],
          "Knowledge (engineering)": [0],
          "Knowledge (geography)": [0],
          "Knowledge (history)": [0],
          "Knowledge (local)": [0],
          "Knowledge (nature)": [0],
          "Knowledge (nobility)": [0],
          "Knowledge (planes)": [0],
          "Knowledge (religion)": [0],
          "Linguistics": [0],
          "Perception": [0],
          "Perform": [0],
          "Profession": [0],
          "Ride": [0],
          "Sense Motive": [0],
          "Sleight of Hand": [0],
          "Spellcraft": [0],
          "Stealth": [0],
          "Survival": [0],
          "Swim": [0],
          "Use Magic Device": [0],
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
