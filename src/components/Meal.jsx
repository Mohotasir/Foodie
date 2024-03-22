import { useLoaderData } from "react-router-dom";
import SingleMeal from "./SingleMeal";

const Meal = () => {
    const mealData = useLoaderData()
    const meals = mealData.categories;
    
    return (
       
        <div className="">
            <h1 className="text-3xl font-bold py-12 ">CHOOSE <span className="text-secondary">YOUR MEAL</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
            {
                meals.map(meal=>
                     <SingleMeal key={meal.id} meal={meal}></SingleMeal>
                    )
            }
        </div>
        </div>
    );
};

export default Meal;