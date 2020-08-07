import React  from 'react';
import RightNav from './RightNav';
import '../../sass/components/layout/Burger.scss'

class Burger extends React.Component {

  constructor(){
    super();
    this.state = {
      open: true
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState(){
    this.setState({open: !this.state.open})
  }
  render(){ 
    let openBtn = this.state.open ? "Burger" : "Burger-open";

    return (
      <>
      <div className={openBtn}
      onClick={this.changeState} >
        <div />
        <div />
        <div />
      </div>
      <RightNav open={this.state.open}/>
    </>
  )
  }
}

export default Burger;
