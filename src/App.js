import { Component } from "react";
import Display from "./Components/Display";
import Search from "./Components/Search";
import "bootstrap/dist/css/bootstrap.min.css";

const apiKey = "AIzaSyAg4ghOgmXwoP-xCgYlG1xvh-Jx86_iozk";

export default class App extends Component {
  state = {
    items: [],
  };
  getResult = async (e) => {
    e.preventDefault();
    let search = e.target.elements.search.value;
    let api = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&type=video&q=${search}&maxResults=10`
    );
    let data = await api.json();
    this.setState({ items: data.items });
  };
  render() {
    return (
      <>
        <Search getResult={this.getResult} />
        <Display items={this.state.items} />
      </>
    );
  }
}
