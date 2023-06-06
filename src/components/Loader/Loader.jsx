import css from './Loader.module.css';
import { Component } from 'react';
import { ThreeDots, TailSpin } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <ThreeDots
        className={css.threeDots}
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
}

const Spin = () => {
  return (
    <TailSpin
      height="20"
      width="20"
      color="black"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{ display: 'inline' }}
      wrapperClass=""
      visible={true}
    />
  );
};

export { Spin };
export default Loader;
