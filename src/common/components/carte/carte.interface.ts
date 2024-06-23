export interface CarteInterface {
  $titleGroup: string
  children: React.ReactNode
  $open: boolean
  $close(): void  
}