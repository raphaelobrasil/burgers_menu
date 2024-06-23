export interface ButtonInterface {
  children: React.ReactNode
  $disable?: boolean
  $action(): void
}