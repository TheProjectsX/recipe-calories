const CookingList = ({ wishList, cookingList, handlePreparing }) => {
  return (
    <div className="border border-[#28282833] rounded-lg py-5">
      <div className="mb-5">
        <h4 className="text-center text-lg font-bold pb-2 border-b-2">
          Want to Cook: {wishList.length}
        </h4>
        <table className="font-firasans w-full">
          <thead>
            <tr className="text-[#878787] font-semibold">
              <th className="py-3">&nbsp;&nbsp;</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {wishList.map((recipe, idx) => (
              <tr
                key={idx}
                className={`text-[#282828B3] text-center ${
                  idx % 2 === 0 && "bg-[#28282808]"
                }`}
              >
                <td className="pl-3 py-5">{idx + 1}</td>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td className="mr-3">
                  <button
                    className="bg-[#7951ff] text-white border border-[#7951ff] rounded-full py-1.5 px-2.5 hover:bg-black text-sm"
                    onClick={() => handlePreparing(recipe)}
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h4 className="text-center text-lg font-bold pb-2 border-b-2">
          Currently Cooking: {cookingList.length}
        </h4>
        <table className="font-firasans w-full">
          <thead>
            <tr className="text-[#878787] font-semibold">
              <th className="py-3">&nbsp;&nbsp;</th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookingList.map((recipe, idx) => (
              <tr
                key={idx}
                className={`text-[#282828B3] text-center ${
                  idx % 2 === 0 && "bg-[#28282808]"
                }`}
              >
                <td className="pl-3 py-5">{idx + 1}</td>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            {cookingList.length > 0 && (
              <tr className="text-[#282828B3] text-center font-semibold">
                <td></td>
                <td></td>
                <td className="py-3">
                  Total Time: <br />{" "}
                  {cookingList.reduce(
                    (total, value) =>
                      total + parseInt(value.preparing_time.split(" ")[0]),
                    0
                  )}{" "}
                  Minutes
                </td>
                <td>
                  Total Calories: <br />{" "}
                  {cookingList.reduce(
                    (total, value) =>
                      total + parseInt(value.calories.split(" ")[0]),
                    0
                  )}{" "}
                  Calories
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CookingList;
