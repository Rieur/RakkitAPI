import { IType, IText } from '../..'

export class RHtml implements IType, IText {
  TypeName: string = 'text:html'
  IsEditable: boolean
  IsInHeader: boolean
  IsSearchable: boolean
  PlaceOrder: number
  Placeholder?: string

  constructor(
    placeholder: string = null, 
    isInHeader: boolean = false, 
    isSearchable: boolean = false, 
    isEditable: boolean = true, 
    placeOrder: number = 0
  ) {
    this.Placeholder = placeholder
    this.IsEditable = isEditable
    this.IsInHeader = isInHeader
    this.IsSearchable = isSearchable
    this.PlaceOrder = placeOrder
  }
}
