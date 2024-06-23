interface TitleMenuInterface {
  $titleMenu: string
  $changeTitle(title: string): void 
}

export interface MenuTopInterface extends Pick<TitleMenuInterface, '$titleMenu'> {
  $showSideBar(): void 
  children: React.ReactNode
}

export interface MenuSiderBarInterface {
  $openSideBar: boolean
  children: React.ReactNode
}

export interface MenuOptionsInterface extends Pick<TitleMenuInterface, '$changeTitle'> {
}