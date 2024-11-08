import React from "react";
import ReactDom from "react-dom/client";
import './index.css'

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "/pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "/pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "/pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "/pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "/pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "/pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return(
        <div className="container">
            <Header />
            <Menu />
            <Footer />

        </div>
    )
}

function Menu() {
return (
    <main className="menu">
        <h2>Our Menu</h2>
        <p>
        <Pizza name = "Pizza Spinachi" ingredients = "bla bla bla" photoName = "/pizzas/spinaci.jpg" price = {10}/>
        <Pizza name = "Pizza Spinachi" ingredients = "bla bla bla" photoName = "/pizzas/spinaci.jpg" price = {10}/>
        <Pizza name = "Pizza Spinachi" ingredients = "bla bla bla" photoName = "/pizzas/spinaci.jpg" price = {10}/>
        <Pizza name = "Pizza Spinachi" ingredients = "bla bla bla" photoName = "/pizzas/spinaci.jpg" price = {10}/>
        </p>

    </main>
)
}

function Pizza(props) {
    return(
        <div className="pizza">
            <img src= {props.photoName} alt={props.name}></img>
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price}</span>
            </div>
            
        </div>
    )
}

function Header() {
    return <header className="header">
       <h1>
        Pizzas React Jack's
        </h1> 
        </header>
}


function Footer() {
const hour =    new Date().getHours()
const openHour = 9
const closeHour = 23 
const isOpen = hour >= openHour && hour < closeHour

console.log(isOpen);

    return <main className="footer">I'm the footer</main>
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);