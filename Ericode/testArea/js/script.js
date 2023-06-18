const test = document.getElementById('test');
const restaurant = {
  name: 'Zur Henkersmahlzeit',
  location: 'Schmutzgasse 13, Stragele, Baden-Würggemberg',
  categories: ['Deutsch', 'Hausmannskost', 'Fleisch', 'Eigener Stall'],
  lastMeal: ['Blutwurst', 'Pellkartoffeln', 'Wurstsalat', 'Altbier'],
  dessert: ['schlimme Augenwurst', 'kalter Hund', 'falscher Hase'],
  openingHours: {
    do: {
      von: 12,
      bis: 22
    },
    fr: {
      von: 12,
      bis: 24
    },
    sa: {
      von: 0,
      bis: 24
    }
  },
  order: function(lastMealIdx, dessertIdx) {
    return [this.lastMeal[lastMealIdx], this.dessert[dessertIdx]];
  }
}
const {fr} = restaurant.openingHours;
console.log(fr);
test.innerText = `von:${fr.von} bis:${fr.bis}`;