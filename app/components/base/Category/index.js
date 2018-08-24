import style from './category.scss'

const categoryClass = selected => style[selected ? 'selected' : 'standard']

const Category = ({ order, category, divRef, selectedCategory, onClick, ...rest }) => (
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
            <p><i className='material-icons'>swap_vert</i></p>
            <p><i className='material-icons'>edit</i></p>
            <p><i className='material-icons'>clear</i></p>
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Category
