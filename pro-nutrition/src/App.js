import React from 'react'
import ApplePic from './Assets/apple.jpg'
import ChocolatePic from './Assets/chocolate.jpg'
import NoodlePic from './Assets/noodle.jpg'
import FoodBox from './Components/FoodBox'
import Heading from './Components/Heading'
import SearchBox from './Components/SearchBox'
import './App.css';
import './Pizza.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      food: [
        {
          id: 1,
          name: "Pizza",
          calories: "400 cal",
          imgUrl: "https://i.imgur.com/eTmWoAN.png"
        },
        {
          id: 2,
          name: "Apple",
          calories: "81 cal",
          imgUrl: ApplePic
        },
        {
          id: 3,
          name: "Chocolate",
          calories: "208 cal",
          imgUrl: ChocolatePic
        },
        {
          id: 4,
          name: "Noodles",
          calories: "219 cal",
          imgUrl: NoodlePic
        }

      ],
      searchValue: '',
    };
  }
  handleChange(e) {
    this.setState({ searchValue: e.target.value })
    console.log('search', this.state.searchValue);
  };
  renderAll = () => {
    const foods = this.state.food;
    const mapRow = foods.map(food => (
      <React.Fragment key={food.id}>
        <FoodBox name={food.name} calorie={food.calorie} imgUrl={food.imgUrl} />
      </React.Fragment>
    ));
    return mapRow;
  }

  renderSearch = () => {
    const foods = this.state.food;
    const mapRow = foods.filter(food => food.name.startsWith(this.state.searchValue)).map(food => (
      <React.Fragment key={food.id}>
        <FoodBox name={food.name} calorie={food.calorie} imgUrl={food.imgUrl} />
      </React.Fragment>
    ));
    return mapRow;
  };
  render() {
    let list;
    if (this.state.searchValue === '') {
      list = this.renderAll();
    }
    else {
      list = this.renderSearch();
    }
    return (
      <>
        <Heading />
        <SearchBox placeholder="Enter the Food Item" handleChange={this.handleChange} />
        {/* <FoodBox name={this.state.food[0].name} calories={this.state.food[0].calories} imgUrl={this.state.food[0].imgUrl} />
        <FoodBox name={this.state.food[1].name} calories={this.state.food[1].calories} imgUrl={this.state.food[1].imgUrl} />
        <FoodBox name={this.state.food[2].name} calories={this.state.food[2].calories} imgUrl={this.state.food[2].imgUrl} />
        <FoodBox name={this.state.food[3].name} calories={this.state.food[3].calories} imgUrl={this.state.food[3].imgUrl} /> */}
      <div>
        <ul>{list}</ul>
      </div>
      </>
    )

  }
}
export default App;
