import data from './data.js'

/**
 * Calculate the threat level (health × damage) for each monster
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of objects with name and threatLevel properties
 */
export function calculateThreatLevels(monsters) {
  // Calculate the threat level (health x damage) for each monster
  // and return an array of monsters with their threat levels

  return Object.entries(monsters)
    .filter(([difficulty, monsterArray]) => Array.isArray(monsterArray))
    .flatMap(([difficulty, monsterArray]) =>
      monsterArray.map((monster) => ({
        ...monster,
        difficulty,
        threatLevel: monster.health * monster.damage,
      })),
    )
}

/**
 * Extract all monster names into an array using Object methods
 * @param {Object} monsters - The monsters data object
 * @return {Array} - Array of all monster names
 */
export function extractMonsterNames(monsters) {
  // Extract all monster names into an array using Object methods
  return Object.values(monsters)
    .filter((category) => Array.isArray(category))
    .flatMap((category) => category.map((monster) => monster.name))
}

/**
 * Transform the data structure to organize monsters by threat level
 * @param {Object} monsters - The monsters data object
 * @return {Object} - Object with lowThreat, mediumThreat, and highThreat arrays
 */
export function organizeByThreatLevel(monsters) {
  // Transform the data structure to organize monsters by threat level
  // instead of difficulty

  // Define threat level categories
  const threatLevels = {
    lowThreat: [],
    mediumThreat: [],
    highThreat: [],
  }

  // Flatten all monsters into a single array with calculated threat levels
  const allMonsters = Object.entries(monsters)
    .filter(([category, monsterArray]) => Array.isArray(monsterArray))
    .flatMap(([category, monsterArray]) =>
      monsterArray.map((monster) => ({
        ...monster,
        category,
        threatLevel: monster.health * monster.damage,
      })),
    )

  // Organize monsters into threat level categories
  // biome-ignore lint/complexity/noForEach: <explanation>
  allMonsters.forEach((monster) => {
    if (monster.threatLevel < 10000) {
      threatLevels.lowThreat.push(monster)
    } else if (monster.threatLevel >= 10000 && monster.threatLevel <= 50000) {
      threatLevels.mediumThreat.push(monster)
    } else {
      threatLevels.highThreat.push(monster)
    }
  })

  return threatLevels
}

export function sum(a, b) {
  return a + b
}
