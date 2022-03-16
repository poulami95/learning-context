
import { Component } from 'react';
import './App.css';
import { ThemeContext, themes } from './components/theme-context';
import Introduction from './contents/Introduction';

function Toolbar(props) {
  return (
    <button onClick={props.changeTheme}>
      Change Theme
    </button>
  );
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      theme: themes.light,
    }
  
  this.toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  }
};
  render(){
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state.theme}>
          <Introduction/>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
