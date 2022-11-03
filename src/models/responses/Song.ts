type SongResponse = {
  layout: string
  type: string
  key: string
  title: string
  subtitle: string
  share: any
  images: Images
  hub: Hub
  artist: any
  url: string
  higlighturls: {}
  properties: {}
}
type Images = {
  background: string
  coverart: string
  coverarthq: string
  joecolor: string
}
type Hub = {
  type: string
  image: string
  actions: Action[]
  options: any
  explicit: boolean
  displayname: string
}
type Action = {
  name: string
  type: string
  id?: string
  uri?: string
}
export default SongResponse