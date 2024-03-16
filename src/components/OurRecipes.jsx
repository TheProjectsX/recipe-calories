import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import CookingList from "./Cookinglist";

// React Toastify
import { toast, Bounce } from "react-toastify";

const OurRecipes = () => {
  const [recipesData, setRecipesData] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [cookingList, setCookingList] = useState([]);

  // Load Recipe Data
  useEffect(() => {
    fetch("recipe-data.json")
      .then((res) => res.json())
      .then((data) => setRecipesData(data));
  }, []);

  // Functions to Execute!
  // Add Recipe to Want To Cook only if it does not exists
  const handleWantToCook = (recipe) => {
    const existing = wishList.find(
      (item) => item.recipe_id === recipe.recipe_id
    );
    if (existing) {
      toast.error("Recipe Already Added to List!", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      return;
    }
    setWishList([...wishList, recipe]);
  };

  // Add Recipe to Currently Cooking from Want to Cook
  const handlePreparing = (recipe) => {
    setCookingList([...cookingList, recipe]);
    setWishList(wishList.filter((item) => item.recipe_id !== recipe.recipe_id));
  };

  return (
    <div className="mb-10">
      <h3 className="text-3xl font-bold mb-3 text-center">Our Recipes</h3>
      <p className="text-[#150B2B99] max-w-lg mx-auto text-center">
        Dive into a treasure trove of culinary delights spanning global
        cuisines, from traditional favorites to innovative creations
      </p>

      <div className="flex flex-col-reverse lg:flex-row gap-4 mt-7">
        <div className="lg:w-[calc((320px*2)+12px)] flex flex-wrap gap-3 justify-center">
          {recipesData.map((recipe, idx) => (
            <Recipe
              key={idx}
              recipe={recipe}
              handleWantToCook={handleWantToCook}
            />
          ))}
        </div>
        <div className="flex-1 ">
          <CookingList
            wishList={wishList}
            cookingList={cookingList}
            handlePreparing={handlePreparing}
          />
        </div>
      </div>
    </div>
  );
};

export default OurRecipes;
