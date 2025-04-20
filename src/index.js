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
  // TODO: Extract all monster names into an array using Object methods
}

/**
 * Transform the data structure to organize monsters by threat level
 * @param {Object} monsters - The monsters data object
 * @return {Object} - Object with lowThreat, mediumThreat, and highThreat arrays
 */
export function organizeByThreatLevel(monsters) {
  // TODO: Transform the data structure to organize monsters by threat level
  // instead of difficulty
  // lowThreat: < 10,000
  // mediumThreat: between 10,000 and 50,000
  // highThreat: > 50,000
}

export function sum(a, b) {
  return a + b
}
