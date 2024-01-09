import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CardSection from "./components/CardSection/CardSection";
import Category from "./components/Category/Category";
import Products from "./components/Products/Products";
import { chairs } from "./utils/furnistore-data";
import { sofaSets } from "./utils/furnistore-data";
import { lamps } from "./utils/furnistore-data";
import { tables } from "./utils/furnistore-data";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState(chairs);
  const [selectedCategory, setSelectedCategory] = useState("Chair");

  useEffect(() => {
    switch (selectedCategory) {
      case "Chair":
        setItems(chairs);
        break;
      case "Sofa-Set":
        setItems(sofaSets);
        break;
      case "Lamp":
        setItems(lamps);
        break;
      case "Table":
        setItems(tables);
        break;
      default:
        setItems(chairs);
    }
  }, [selectedCategory]);
  const categoryChangeHandler = (val) => {
    setSelectedCategory(val);
  };
  return (
    <div>
      <Header />
      <Hero />
      <CardSection />
      <Category changeHandler={categoryChangeHandler} />
      {items.length == 0 ? <h2>Loading...</h2> : <Products items={items} />}
    </div>
  );
}

export default App;
