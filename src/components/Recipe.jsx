import timeIcon from "../assets/icons/time.svg";
import caloriesIcon from "../assets/icons/calories.svg";

const Recipe = ({ recipe, handleWantToCook }) => {
  return (
    <div className="border border-[#28282833] rounded-lg p-5 max-w-[320px]">
      <img
        src={recipe.recipe_image}
        alt="Recipe Image"
        className="w-full rounded-lg mb-3"
      />
      <h4 className="text-lg font-bold">{recipe.recipe_name}</h4>
      <p className="text-[#878787] font-firasans">{recipe.short_description}</p>
      <hr className="my-3" />
      <h5 className="font-semibold text-lg mb-2">
        Ingredients: {recipe.ingredients.length}
      </h5>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((item, idx) => (
          <li key={idx} className="text-[#878787] font-firasans">
            {item}
          </li>
        ))}
      </ul>

      <hr className="my-3" />
      <div className="flex justify-between mb-4">
        <p className="flex gap-1">
          <img src={timeIcon} alt="Time Icon" />
          {recipe.preparing_time}
        </p>
        <p className="flex gap-1">
          <img src={caloriesIcon} alt="Calories Icon" />
          {recipe.calories}
        </p>
      </div>

      <button
        className="bg-[#7951ff] text-white border border-[#7951ff] rounded-full py-1.5 px-4 hover:bg-black"
        onClick={() => handleWantToCook(recipe)}
      >
        Want to Cook
      </button>
    </div>
  );
};

export default Recipe;
