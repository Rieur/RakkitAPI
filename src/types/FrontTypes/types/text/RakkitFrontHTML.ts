import IRakkitFrontType from '../../IRakkitFrontType'
import IRakkitFrontText from '../../IRakkitFrontText'

export default class RakkitFrontHTML implements IRakkitFrontType, IRakkitFrontText {
  TypeName: string = 'text:html'
  IsEditable: boolean
  IsInHeader: boolean
  IsSearchable: boolean
  PlaceOrder: number
  Placeholder: string

  constructor(placeholder: string, isInHeader: boolean = false, isSearchable: boolean = false, isEditable: boolean = true, placeOrder: number = 0) {
    this.Placeholder = placeholder
    this.IsEditable = isEditable
    this.IsInHeader = isInHeader
    this.IsSearchable = isSearchable
    this.PlaceOrder = placeOrder
  }
}
