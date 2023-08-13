export interface Player {
  playerId: number
  name: string
  dateOfBirth: string
  club: string
  position: string
  overallStatsDto: OverallStatsDto
}

export interface OverallStatsDto {
  matchesPlayed: number
  savedShotsFromInsideTheBox: number
  saves: number
  punches: number
  totalKeeperSweeper: number
  accurateKeeperSweeper: number
  cleanSheets: number
  errorLeadToAShot: number
  totalClearance: number
  totalAerialDuels: number
  aerialLost: number
  aerialWon: number
  totalDuels: number
  duelLost: number
  duelWon: number
  interceptionWon: number
  totalTackle: number
  outfielderBlock: number
  totalPass: number
  goalAssist: number
  accuratePass: number
  totalLongBalls: number
  accurateLongBalls: number
  totalCross: number
  accurateCross: number
  bigChanceCreated: number
  possessionLostCtrl: number
  keyPass: number
  goals: number
  bigChanceMissed: number
  totalShotsTaken: number
  shotOffTarget: number
  onTargetScoringAttempt: number
  blockedScoringAttempt: number
  averageRating: number
  wasFouled: number
  fouls: number
  minutesPlayed: number
  touches: number
  rating: number
  totalOffside: number
  substitute: number
  captain: number
}
