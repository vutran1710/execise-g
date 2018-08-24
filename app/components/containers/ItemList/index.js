import SingleColumnList from './SingleColumnList'
import MultiColumnList from './MultiColumnList'

const ItemList = ({ multi = false, ...rest }) => !multi
  ? <SingleColumnList {...rest} />
  : <MultiColumnList {...rest} />

export default ItemList
