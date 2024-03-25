import { useLoaderData } from "react-router-dom";
import SingleMeal from "./SingleMeal";

const Meal = () => {
    const mealData = useLoaderData()
    const mealss = mealData.meals;
    
    return (
       
        <div className="">
            <h1 className="text-3xl font-bold py-12 text-center ">MAKE YOUR <span className="text-secondary">RECIPE</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-1">
            {
                mealss.map(meal=>
                     <SingleMeal key={meal.idMeal} meal={meal}></SingleMeal>
                    )
            }
        </div>
        </div>
    );
};

export default Meal;