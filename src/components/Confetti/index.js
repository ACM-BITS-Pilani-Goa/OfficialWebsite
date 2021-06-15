import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

export default class Confetti extends React.Component {
  constructor() {
    super();

    this.state = {
      fire: false,
      reset: false,
    };
    this.onClickFire = this.onClickFire.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
    this.onFire = this.onFire.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onDecay = this.onDecay.bind(this);
  }

  onClickFire() {
    // set any value that is cast to the logical true and will differ from the previous one.
    this.setState({ fire: {} });
  }

  onClickReset() {
    // set any value that is cast to the logical true and will differ from the previous one.
    this.setState({ reset: {} });
  }

  onFire() {
    console.log("do something after fire");
  }

  onReset() {
    console.log("do something after reset");
  }

  onDecay() {
    console.log("do something after animation");
  }

  render() {
    const style = {
      position: "fixed",
      width: "100vw",
      height: "100vh",
      zIndex: 10,
    };

    return (
      <>
        <ReactCanvasConfetti
          // set the styles as for a usual react component
          style={style}
          // set the class name as for a usual react component
          // if value in this.state.fire cast to the logical true and will differ from the previous, then will be called new animation
          fire={this.state.fire}
          // if value in this.state.reset cast to the logical true and will differ from the previous, then will be cleared canvas
          reset={this.state.reset}
          // set the callback on new animation
          onFire={this.onFire}
          // set the callback on decay animation
          onDecay={this.onDecay}
          // set the callback on reset canvas
          onReset={this.onReset}
        />

        <button onClick={this.onClickFire}>Fire</button>
        <button onClick={this.onClickReset}>Reset</button>
      </>
    );
  }
}
