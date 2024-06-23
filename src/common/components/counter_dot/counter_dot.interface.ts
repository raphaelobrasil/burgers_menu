export interface CounterRootInterface {
  children: React.ReactNode
  $isLarge?: boolean
}

export interface CounterButtonInterface {
  $disable?: boolean
  $isLarge?: boolean
  $isUpButton?: boolean
  $actionClick(): void
}

export interface CounterLabelInterface {
  children: React.ReactNode
  $isLarge?: boolean
}

export interface CounterDotInterface {
  Root(props: CounterRootInterface): JSX.Element
  Button(props: CounterButtonInterface): JSX.Element
  Label(props: CounterLabelInterface): JSX.Element
}