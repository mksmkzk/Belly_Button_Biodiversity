var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

console.log(sortedCities)

var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar"
};
var data = [trace];
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: {title: "City" },
  yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

var citiesPop = cityGrowths.sort((a,b) => parseInt(b.population) - parseInt(a.population));
var topSevenCityNames = citiesPop.map(city => city.City).slice(0,7);
var topSevenPop = citiesPop.map(city => parseInt(city.population)).slice(0,7);

var trace2 = {
  x: topSevenCityNames,
  y: topSevenPop,
  type: "bar"
};
var data2 = [trace2];
var layout2 = {
  title: "Most Rapidly Growing Cities",
  xaxis: {title: "City" },
  yaxis: {title: "Population"}
};
Plotly.newPlot("bar-plot2", data2, layout2);