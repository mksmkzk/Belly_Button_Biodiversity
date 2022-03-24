function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}

  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
        
      console.log(result);
      // Initialize an empty string
      let demographicInfo = '' 

      Object.entries(result).forEach(entry => {
        const [key, value] = entry;
        console.log(key, value);
        demographicInfo = demographicInfo.concat(key.toUpperCase() + " : " + value + "\n")
      });
      PANEL.html("");
      PANEL.append("h6").text(demographicInfo);
    });
  }
  
  init();