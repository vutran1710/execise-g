import { Actions } from 'jumpstate';
import Button from '../Button';
import style from './reward.scss';

// = ({ order, reward, divRef, ...rest }) => (
export default class Reward extends React.Component {
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
    const fallBackLogo = 'http://torchesdesignstudio.com/wp-content/uploads/2016/04/dummy-post-square-1-thegem-blog-masonry.jpg';
    const clearItem = (index, type) => () => Actions.main.setItemToRemove({ index, type });
    const setRewardToEdit = (index, type) => () => Actions.main.setRewardToEdit({ index, type });
    const { order, reward, divRef, ...rest } = this.props;
    const moveReward = e => {
      e.preventDefault();
      this.setState({ showMoveto: false });
      const value = parseInt(e.target.firstChild.value, 10);
      if (value) {
        Actions.main.moveReward({ oldIndex: order - 1, newIndex: value - 1 });
      }
    };
    return (
      <div className={style.reward} ref={divRef} {...rest}>
        <div className={style.info}>
          <h4>{`${order}.`}</h4>
          <div className="img-wrapper">
            <img
              alt="reward_logo"
              src={reward.brand_logo || fallBackLogo}
              onError={e => {
                e.target.src = fallBackLogo;
              }}
            />
          </div>
          <p>{reward.title}</p>
          <p>{reward.expiring}</p>
          <div className={style.action}>
            {this.state.showMoveto && (
              <div className={style.formWrapper}>
                <form onSubmit={moveReward} className="form">
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
            <a onClick={this.toggleMoveTo}>
              <i className="material-icons">swap_vert</i>
            </a>
            <a onClick={setRewardToEdit(order - 1, 'reward')}>
              <i className="material-icons">edit</i>
            </a>
            <a onClick={clearItem(order - 1, 'reward')}>
              <i className="material-icons">clear</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
