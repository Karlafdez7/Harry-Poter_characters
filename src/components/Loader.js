import loader from "../images/giphy.gif";
import '../styles/App.scss'


const Loading = () => {
  return (
    <div className="loader__container">
      <div className="load__ellipsis">
        <img
          src={loader}
          className="animation"
          alt="Loader with animation"
          title="Loader with animation"
        />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;