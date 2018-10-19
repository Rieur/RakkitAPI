import IRakkitFrontType from '../../IRakkitFrontType'
import IRakkitFrontText from '../../IRakkitFrontText'

export default class RakkitFrontMD implements IRakkitFrontType, IRakkitFrontText {
  TypeName: string = 'text:md'
  IsEditable: boolean
  IsInHeader: boolean
  IsSearchable: boolean
  PlaceOrder: number
  Placeholder: string

  constructor(placeholder: string = null, isInHeader: boolean = false, isSearchable: boolean = false, isEditable: boolean = true, placeOrder: number = 0) {
    this.Placeholder = placeholder
    this.IsEditable = isEditable
    this.IsInHeader = isInHeader
    this.IsSearchable = isSearchable
    this.PlaceOrder = placeOrder
  }
}
