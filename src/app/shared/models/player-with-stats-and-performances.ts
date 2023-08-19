export interface PlayerWithStatsAndPerformances {
    playerId: number
    name: string
    dateOfBirth: string
    club: string
    position: string
    overallStats: OverallStats
    performances: Performance[]
  }
  
  export interface OverallStats {
    overallStatsId: number
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
    wasFouled: number
    fouls: number
    minutesPlayed: number
    touches: number
    rating: number
    averageRating: number
    totalOffside: number
    substitute: number
    captain: number
    playerId: number
  }
  
  export interface Performance {
    performanceId: number
    matchDate: string
    substitute: boolean
    captain: boolean
    savedShotsFromInsideTheBox: number
    saves: number
    punches: number
    totalKeeperSweeper: number
    accurateKeeperSweeper: number
    cleanSheet: boolean
    errorLeadToAShot: number
    totalClearance: number
    aerialLost: number
    aerialWon: number
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
    shotOffTarget: number
    onTargetScoringAttempt: number
    blockedScoringAttempt: number
    wasFouled: number
    fouls: number
    minutesPlayed: number
    touches: number
    rating: number
    totalOffside: number
    homeTeam: string
    awayTeam: string
    homeScore: number
    awayScore: number
    homeAway: string
    playerId: number
  }
  