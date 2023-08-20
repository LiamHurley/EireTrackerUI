import { OverallStatsDto } from "./player-with-stats-and-performances"

export interface Player {
  playerId: number
  name: string
  dateOfBirth: string
  club: string
  position: string
  overallStatsDto: OverallStatsDto
}
