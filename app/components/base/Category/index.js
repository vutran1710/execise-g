import { Actions } from 'jumpstate'
import style from './category.scss'

const categoryClass = selected => style[selected ? 'selected' : 'standard']
const clearItem = (index, type) => () => Actions.main.setItemToRemove({ index, type })
const setCategoryToEdit = (index, type) => () => Actions.main.setCategoryToEdit({ index, type })

const Category = ({ order, category, divRef, selectedCategory, onClick, toggleModal, ...rest }) => (
  <div
    className={categoryClass(order - 1 === selectedCategory)}
    ref={divRef}
    onClick={() => onClick(order - 1)}
    role="presentation"
    {...rest}
  >
    <div className={style.info}>
      <h4>
        {order}
        .
      </h4>
      <div>
        <p>{category.title}</p>
        {order - 1 === selectedCategory && (
          <div className={style.action}>
            <p>
              <i className='material-icons'>swap_vert</i>
            </p>
            <p onClick={setCategoryToEdit(order -1, 'category')}>
              <i className='material-icons'>edit</i>
            </p>
            <p onClick={clearItem(order - 1, 'category')}><i className='material-icons'>clear</i></p>
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Category
