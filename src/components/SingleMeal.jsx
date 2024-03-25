import { Link } from "react-router-dom";

const SingleMeal = ({ meal }) => {
    const { strCategory,idMeal, strYoutube, strTags, strMeal, strMealThumb, strInstructions } = meal;
    return (
        <div className="p-4 rounded-xl border m-4 items-center justify-center flex flex-col md:gap-8  lg:flex-row hover:shadow-xl ">
            <div className="md:w-[30%]"><img className="py-3 md:py-0 w-[100%] rounded-lg " src={strMealThumb} alt="" /></div>
            <div className="flex-1">
                <h2 className="text-3xl font-bold mulish py-3 ">{strMeal}</h2>
                <h1 className="text-secondary font-semibold text-lg">#{strCategory}</h1>
                <p className="text-gray-500 flex-1">{strInstructions}</p>
                 <Link className="btn w-[30%]  md:mr-4 btn-secondary py-2 mt-3" to={`/meal/${idMeal}`}>Show Details</Link>
                 <Link className="btn w-[30%]  border border-secondary py-2 mt-3 bg-white hover:bg-secondary hover:transition" to={strYoutube}>See recipe in Youtube</Link>
            </div>
        </div>
    );
};

export default SingleMeal;