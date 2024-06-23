export interface StoreModalInterface {
  showModal: boolean
  keyCarte: number
  keyOption: number
  type: 'option' | 'basket'
}

export type stateModal = { storeModal: StoreModalInterface }

export interface UseStoreModalInterface {
  dataModal: StoreModalInterface
  openModal(keyCarte: number, keyOption: number): void
  openModalBasket(): void
  closeModal(): void
}