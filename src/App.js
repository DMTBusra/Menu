import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import data from "./components/Data"
import  './App.css'

const allCategories= ["all",...new Set(data.map((item)=>item.category))]
console.log(allCategories);

function App() {
  const [menuItems, setmenuItems] = useState(data)
  const [categories, setCategories] = useState(allCategories);

  const filterItems=(category)=>{
    if(category==="all"){
      setmenuItems(data);
      return;
    }
      const newItems = data.filter((item)=> item.category===category)
      setmenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories categories={categories} filterItems={filterItems}/>
          <Menu menuItems={menuItems}/>
        </div>

      </section>
    </main>
  );
}

export default App;
