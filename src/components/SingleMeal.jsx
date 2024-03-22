
const SingleMeal = ({meal}) => {
    const{strCategory,strCategoryThumb,strCategoryDescription} = meal;
    return (
        <div className="p-4 rounded-xl border m-4 items-center justify-center flex flex-col  hover:shadow-xl ">
             <img className="py-3 " src={strCategoryThumb}  alt="" />
             <div className="flex-1 flex items-center justify-center  flex-col">
             <h2 className="text-3xl font-bold mulish py-3 ">{strCategory}</h2>
             <p className="text-gray-500 flex-1">{strCategoryDescription}</p>
             <button className="btn w-[50%]  btn-secondary py-2 mt-3">Add to Cart</button>
             </div>
        </div>
    );
};

export default SingleMeal;