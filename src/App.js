import React, { Component } from "react";
import Wrapper from "./components/wrapper/wrapper";
import Header from "./components/header/header";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footer/footer";
import FruitCard from "./components/fruitcard/fruitcard";
import Fruits from "./fruits.json";

class App extends Component {

    state = {
        Fruits,
        score: 0,
        message: ""
    };

    componentDidMount() {
        this.randomizer(this.state.Fruits);
        this.setState({ message: "Nom on a fruit to score a point, but avoid a second serving!" });
        this.render();
    };

    handleClick(fruitName) {
        var thisFruit = this.state.Fruits.filter(fruit => fruit.name === fruitName);

        if (thisFruit[0].clicked === false) {
            thisFruit[0].clicked = true;
            this.setState({ Fruits: Fruits });
            this.handleIncrement();

            if (this.state.score === 12) {
                this.setState({ message: "You Win! Refresh the page to play again." });
            } else {
                this.randomizer(this.state.Fruits);
            };
        } else {
            this.setState({ message: "Oh no! You've already eaten that fruit. Refresh the page to play again" });
        };
    };

    handleIncrement() {
        this.setState({ score: this.state.score + 1 });
    };

    randomizer(obj_arr) {
        for (let i = 0; i < obj_arr.length; i++) {
            const j = Math.floor(Math.random() * obj_arr.length);
            [obj_arr[i], obj_arr[j]] = [obj_arr[j], obj_arr[i]];
        }
        this.setState({ Fruits: obj_arr });
    };

    render() {
        return (
            <div>
                <Navbar score={this.state.score} />
                <Wrapper>
                    <Header message={this.state.message} />
                    <div className="col-8">
                        <div className="row">
                            {this.state.Fruits.map(fruit => (
                                <FruitCard
                                    id={fruit.id}
                                    key={fruit.id}
                                    name={fruit.name}
                                    image={fruit.image}
                                    clicked={fruit.clicked}
                                    onClick={() => this.handleClick(fruit.name)} />
                            ))}
                        </div>
                    </div>
                    <div className="col-4"></div>
                </Wrapper>
                <Footer />
            </div>
        );
    };
};

export default App;