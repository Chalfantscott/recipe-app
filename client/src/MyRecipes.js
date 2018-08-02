import React, { Component } from 'react';
import axios from 'axios'

class MyRecipes extends Component {
   constructor () {
       super();
       this.state = {
           recipes: []
       }
       this.handleClick = this.handleClick.bind(this)
   }
   

   componentDidMount() {
       axios.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?number=1&tags=vegetarian%2Cdessert", 
       { headers: {
        'X-Mashape-Key': 'ap8G36dpBcmshgicwH4BqkCd5xOPp16uGpKjsnrhtzJVZWrOyK'
       }
    })
         .then(res => {
           const recipes = res.data.recipes;
           this.setState({ recipes });
         })
   }
   handleClick () {
       console.log('Success!')
   }

     render() {
         console.log(this.state.recipes[0]);
       return (
           <div>
               <ul>
                   { this.state.recipes.map(recipe => <li><a href={recipe.sourceUrl}>{recipe.title}</a></li>)}
               </ul>

               <div className='button__container'>
                   <button className='button' onClick={this.handleClick}>
                   Click Me
                   </button>
               </div>
           </div>
       )
     }
}

export default MyRecipes;
//{"recipes":[
    //{"vegetarian":true,"vegan":false,"glutenFree":false,"dairyFree":false,
    //"veryHealthy":false,"cheap":false,"veryPopular":false,"sustainable":false,
    //"weightWatcherSmartPoints":24,"gaps":"no","lowFodmap":false,"ketogenic":false,
    //"whole30":false,"preparationMinutes":10,"cookingMinutes":55,
    //"sourceUrl":"https://brooklynsupper.com/seckel-pear-bread-pudding/","spoonacularSourceUrl"
    //:"https://spoonacular.com/brown-butter-seckel-pear-bread-pudding-947618","aggregateLikes":62,
    //"spoonacularScore":27.0,"healthScore":2.0,"creditText":"Brooklyn Supper","sourceName":"Brooklyn Supper",
    //"pricePerServing":145.73,"extendedIngredients":[{"id":93730,"aisle":"Baking","image":"brioche.png",
    //"consitency":"solid","name":"brioche","original":"1 loaf stale brioche loaf crusts removed and cut into 1/2-inch thick slices",
    //"originalString":"1 loaf stale brioche loaf crusts removed and cut into 1/2-inch thick slices","originalName":null,"amount":1.0,"unit":"loaf",
    //"meta":["stale","cut into 1/ slices"],"metaInformation":["stale","cut into 1/ slices"],
    //"measures":{"us":{"amount":1.0,"unitShort":"loaf","unitLong":"loaf"},"metric":{"amount":1.0,"unitShort":
    //"loaf","unitLong":"loaf"}}},{"id":19334,"aisle":"Baking","image":"brown-sugar-light.jpg",
    //"consitency":"solid","name":"brown sugar","original":"1/2 cup brown sugar plus 2 tablespoons for topping 
    //divided","originalString":"1/2 cup brown sugar plus 2 tablespoons for topping divided","originalName":null,
    //"amount":0.5,"unit":"cup","meta":["divided","for topping "],"metaInformation":["divided","for topping "],
    //"measures":{"us":{"amount":0.5,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":118.294,
    //"unitShort":"g","unitLong":"grams"}}},{"id":1123,"aisle":"Milk, Eggs, Other Dairy","image":"egg.jpg",
    //"consitency":"solid","name":"eggs","original":"4 large eggs","originalString":"4 large eggs","originalName":null,"amount":4.0,"unit":"","meta":["large"],"metaInformation":["large"],"measures":{"us":{"amount":4.0,"unitShort":"","unitLong":""},"metric":{"amount":4.0,"unitShort":"","unitLong":""}}},{"id":2001,"aisle":"Spices and Seasonings","image":"allspice-ground.jpg","consitency":"solid","name":"ground allspice","original":"1/2 teaspoon ground allspice","originalString":"1/2 teaspoon ground allspice","originalName":null,"amount":0.5,"unit":"teaspoon","meta":[],"metaInformation":[],"measures":{"us":{"amount":0.5,"unitShort":"tsps","unitLong":"teaspoons"},"metric":{"amount":0.5,"unitShort":"tsps","unitLong":"teaspoons"}}},{"id":2010,"aisle":"Spices and Seasonings","image":"cinnamon.jpg","consitency":"solid","name":"ground cinnamon","original":"2 teaspoons ground cinnamon","originalString":"2 teaspoons ground cinnamon","originalName":null,"amount":2.0,"unit":"teaspoons","meta":[],"metaInformation":[],"measures":{"us":{"amount":2.0,"unitShort":"tsps","unitLong":"teaspoons"},"metric":{"amount":2.0,"unitShort":"tsps","unitLong":"teaspoons"}}},{"id":93814,"aisle":"Milk, Eggs, Other Dairy","image":"whipped-cream.jpg","consitency":"solid","name":"lightly sweetened whipped cream","original":"lightly sweetened whipped cream for serving","originalString":"lightly sweetened whipped cream for serving","originalName":null,"amount":6.0,"unit":"servings","meta":["sweetened","for serving"],"metaInformation":["sweetened","for serving"],"measures":{"us":{"amount":6.0,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":6.0,"unitShort":"servings","unitLong":"servings"}}},{"id":9252,"aisle":"Produce","image":"pears-bosc.jpg","consitency":"solid","name":"pears","original":"2 cups sliced seckel pears","originalString":"2 cups sliced seckel pears","originalName":null,"amount":2.0,"unit":"cups","meta":["sliced"],"metaInformation":["sliced"],"measures":{"us":{"amount":2.0,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":473.176,"unitShort":"g","unitLong":"grams"}}},{"id":1012047,"aisle":"Spices and Seasonings","image":"salt.jpg","consitency":"solid","name":"sea salt","original":"1/4 teaspoon sea salt","originalString":"1/4 teaspoon sea salt","originalName":null,"amount":0.25,"unit":"teaspoon","meta":[],"metaInformation":[],"measures":{"us":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"},"metric":{"amount":0.25,"unitShort":"tsps","unitLong":"teaspoons"}}},{"id":1145,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consitency":"solid","name":"unsalted butter","original":"6 tablespoons room temperature unsalted butter divided","originalString":"6 tablespoons room temperature unsalted butter divided","originalName":null,"amount":6.0,"unit":"tablespoons","meta":["unsalted","divided","room temperature"],"metaInformation":["unsalted","divided","room temperature"],"measures":{"us":{"amount":6.0,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":6.0,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1077,"aisle":"Milk, Eggs, Other Dairy","image":"milk.jpg","consitency":"liquid","name":"whole milk","original":"2 1/4 cups whole milk","originalString":"2 1/4 cups whole milk","originalName":null,"amount":2.25,"unit":"cups","meta":["whole"],"metaInformation":["whole"],"measures":{"us":{"amount":2.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":532.323,"unitShort":"g","unitLong":"grams"}}}],"id":947618,"title":"brown butter seckel pear bread pudding","readyInMinutes":65,"servings":6,"image":"https://spoonacular.com/recipeImages/947618-556x370.jpg","imageType":"jpg","cuisines":[],"dishTypes":["dessert"],"diets":["lacto ovo vegetarian"],"occasions":[],"winePairing":{"pairedWines":["madeira","pedro ximenez"],"pairingText":"Bread Pudding works really well with Madeiran and Pedro Ximénez. Pedro Ximénez's sweet, nutty flavor with notes of figs and caramel pair so well with bread pudding.","productMatches":[]},"instructions":"InstructionsSet a wide skillet over medium heat. Add 2 tablespoons butter, allow it to melt and than cook to a golden brown hue, about 5 minutes. Add pears and saut until pears are tender and butter turns into a thick, deep golden sauce, 5 minutes more. Fold in 1/4 cup sugar brown sugar; cook until sugar is dissolved, 3 - 4 minutes. Remove from heat and set aside.In a shallow dish, combine remaining 1/4 cup brown sugar, cinnamon, and allspice. Spread remaining 4 tablespoons butter on both sides of sliced bread. Press each side into cinnamon and sugar mixture, enough to lightly coat each slice. Arrange in 8 x 8-inch baking pan.In a small bowl, whisk to combine eggs and milk. Carefully pour egg and milk mixture over bread. Set in fridge overnight (or a minimum of 2 hours).Preheat oven to 350 degrees F. Bake 40 - 50 minutes or bread pudding is set and starts to pull away from the sides. Cool 30 minutes.Dust with powdered sugar and serve with a dollop of lightly sweetened whipped cream.","analyzedInstructions":[{"name":"","steps":[{"number":1,"step":"Set a wide skillet over medium heat.","ingredients":[],"equipment":[{"id":404645,"name":"frying pan","image":"pan.png"}]},{"number":2,"step":"Add 2 tablespoons butter, allow it to melt and than cook to a golden brown hue, about 5 minutes.","ingredients":[],"equipment":[],"length":{"number":5,"unit":"minutes"}},{"number":3,"step":"Add pears and saut until pears are tender and butter turns into a thick, deep golden sauce, 5 minutes more. Fold in 1/4 cup sugar brown sugar; cook until sugar is dissolved, 3 - 4 minutes.","ingredients":[{"id":19334,"name":"brown sugar","image":"brown-sugar-dark.jpg"},{"id":9252,"name":"pear","image":"pears-bosc.jpg"}],"equipment":[],"length":{"number":9,"unit":"minutes"}},{"number":4,"step":"Remove from heat and set aside.In a shallow dish, combine remaining 1/4 cup brown sugar, cinnamon, and allspice.","ingredients":[{"id":19334,"name":"brown sugar","image":"brown-sugar-dark.jpg"},{"id":2001,"name":"allspice","image":"allspice-ground.jpg"},{"id":2010,"name":"cinnamon","image":"cinnamon.jpg"}],"equipment":[]},{"number":5,"step":"Spread remaining 4 tablespoons butter on both sides of sliced bread. Press each side into cinnamon and sugar mixture, enough to lightly coat each slice. Arrange in 8 x 8-inch baking pan.In a small bowl, whisk to combine eggs and milk. Carefully pour egg and milk mixture over bread. Set in fridge overnight (or a minimum of 2 hours).Preheat oven to 350 degrees F.","ingredients":[{"id":2010,"name":"cinnamon","image":"cinnamon.jpg"},{"id":1123,"name":"egg","image":"egg.jpg"},{"id":1077,"name":"milk","image":"milk.jpg"}],"equipment":[{"id":404646,"name":"baking pan","image":"roasting-pan.jpg"},{"id":404661,"name":"whisk","image":"whisk.png"},{"id":404783,"name":"bowl","image":"bowl.jpg"},{"id":404784,"name":"oven","image":"oven.jpg","temperature":{"number":350.0,"unit":"Fahrenheit"}}]},{"number":6,"step":"Bake 40 - 50 minutes or bread pudding is set and starts to pull away from the sides. Cool 30 minutes.Dust with powdered sugar and serve with a dollop of lightly sweetened whipped cream.","ingredients":[{"id":93814,"name":"lightly sweetened whipped cream","image":"whipped-cream.jpg"}],"equipment":[],"length":{"number":80,"unit":"minutes"}}]}],"creditsText":"Brooklyn Supper"}]}