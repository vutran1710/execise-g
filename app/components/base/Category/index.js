import { Actions } from 'jumpstate';
import Button from '../Button';
import style from './category.scss';

export default class Category extends React.Component {
  state = { showMoveto: false };

  componentDidUpdate() {
    const { showMoveto } = this.state;
    if (showMoveto) {
      this.moveToInput.focus();
    }
  }

  toggleMoveTo = e => {
    e.preventDefault();
    const { showMoveto } = this.state;
    this.setState({ showMoveto: !showMoveto });
  };

  render() {
    const categoryClass = selected => style[selected ? 'selected' : 'standard'];
    const clearItem = (index, type) => () => Actions.main.setItemToRemove({ index, type });
    const setCategoryToEdit = (index, type) => () => Actions.main.setCategoryToEdit({ index, type });
    const moveItem = e => {
      e.preventDefault();
      this.setState({ showMoveto: false });
      const value = parseInt(e.target.firstChild.value, 10);
      Actions.main.moveItem(value - 1);
    };
    const {
      order,
      category,
      divRef,
      selectedCategory,
      onClick,
      toggleModal,
      handleSubmit,
      ...rest
    } = this.props;
    return (
      <div
        className={categoryClass(order - 1 === selectedCategory)}
        ref={divRef}
        onClick={onClick(order - 1)}
        role="presentation"
        {...rest}
      >
        <div className={style.info}>
          <h4>{`${order}.`}</h4>
          <div>
            <p>{category.title}</p>
            {order - 1 === selectedCategory && (
              <div className={style.action}>
                <a onClick={this.toggleMoveTo}>
                  <i className="material-icons">swap_vert</i>
                </a>
                <a onClick={setCategoryToEdit(order - 1, 'category')}>
                  <i className="material-icons">edit</i>
                </a>
                <a onClick={clearItem(order - 1, 'category')}>
                  <i className="material-icons">clear</i>
                </a>
                {this.state.showMoveto && (
                  <div className={style.formWrapper}>
                    <form onSubmit={moveItem} className="form">
                      <input
                        type="number"
                        min="1"
                        ref={el => {
                          this.moveToInput = el;
                        }}
                      />
                      <Button type="submit" title="Go" btn="primary-bg" />
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
