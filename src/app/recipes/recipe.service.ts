import {Recipe} from './recipe.model'
export class RecipeService{

    recipes:Recipe[]=[
        new Recipe('Pasta','Heat oil in a pan over medium flame and add minced garlic along with chopped red chilli and red chilli flakes in it.','https://www.simplyrecipes.com/wp-content/uploads/2019/04/EYF-Chicken-Piccata-Penne-LEAD-5-600x840.jpg'),
        new Recipe('Shakshuka Recipe','Shakshuka is a North African and Middle Eastern meal of poached eggs in a simmering tomato sauce ...','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg')
      
      ];    

      getRecipes(){
          return this.recipes.slice();
      }
}