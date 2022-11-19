type ArtistResponse = {
  type: string
  id: string
  name: string
  shareUrl: string
  visuals: {
    avatar: Avatar[]
  }
  chartData: ChartData
}

type Avatar = {
  url: string
  width: number | null
  height: null | null
}

type ChartData = {
  currentRank: number
  previousRank: number
  peakRank: number
  peakDate: string
  entryRank: number
  entryDate: string
  appereancesOnChart: number
  consecutiveAppearancesOnChart: number
}
export default ArtistResponse
