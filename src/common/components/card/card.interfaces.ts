export interface CardMenuInterface {
  children: React.ReactNode
  $onClick(): void
}

export interface CardHeaderInterface {
  children?: React.ReactNode
  $title: string
  $isNormal?: boolean
}

export interface CardGridFigureInterface { 
  children: React.ReactNode
  $src: string
  $alt: string
}

export interface CardPriceLabelInterface {
  $isBold?: boolean
  $altColor?: boolean
  $isSum?: boolean
  children: React.ReactNode
}

export interface CardDefaultAsideInterface {
  children: React.ReactNode
  $initTop?: boolean
}

export interface OnlyChildrenInterface {
  children: React.ReactNode
}

export interface CardInterface {
  RootMenu(props: CardMenuInterface): JSX.Element
  RootOption(props: OnlyChildrenInterface): JSX.Element
  RootCount(props: OnlyChildrenInterface): JSX.Element
  ContainerFigure(props: CardGridFigureInterface): JSX.Element
  ContainerDefault(props: OnlyChildrenInterface): JSX.Element
  CardHeader(props: CardHeaderInterface): JSX.Element
  CardDescription(props: OnlyChildrenInterface): JSX.Element
  PriceLabel(props: CardPriceLabelInterface): JSX.Element
  DefaultContent(props: OnlyChildrenInterface): JSX.Element
  DefaultAside(props: CardDefaultAsideInterface): JSX.Element
}