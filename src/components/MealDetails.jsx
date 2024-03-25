import { useLoaderData } from "react-router-dom";


const MealDetails = () => {
   const Details = useLoaderData();
   const detail = Details.meals;
   console.log(detail)
   const {strCategory} = detail;
    return (
        <div>
            <h1>{strCategory}</h1>
            <h1>hi</h1>
        </div>
    );
};

export default MealDetails;