import { CardInterface } from './card.interfaces'
import RootMenu from './sub_components/card_menu'
import RootOption from './sub_components/card_option'
import RootCount from './sub_components/card_count'
import ContainerFigure from './sub_components/card_grid_figure'
import ContainerDefault from './sub_components/card_grid_default'
import CardHeader from './sub_components/card_header'
import CardDescription from './sub_components/card_description'
import PriceLabel from './sub_components/card_label_price'
import DefaultContent from './sub_components/grid_default_content'
import DefaultAside from './sub_components/grid_default_aside'

const Card: CardInterface = {
  RootMenu,
  RootOption,
  RootCount,
  ContainerFigure,
  ContainerDefault,
  CardHeader,
  CardDescription,
  PriceLabel,
  DefaultContent,
  DefaultAside
}

export default Card