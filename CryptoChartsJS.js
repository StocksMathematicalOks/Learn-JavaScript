var allCharts = new Array( tickerSymbols.length ) ;
var allContexts = new Array( tickerSymbols.length );
function createAllNewCharts(){
    for ( var i = 0; i < tickerSymbols.length; i++ ){
        allContexts[ i ] = 
        document.getElementById(getTheRightChart(tickerSymbols[i])).getContext('2d');
        allCharts[ i ] = createNewChart( i );    
    }
}
function createNewChart( i )
{
    return new Chart(allContexts[i], {
    type: 'line',
    data: {
        datasets: [{           label: 'Price of ' + tickerLabels[i],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgb(255,99,132)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
                y: {
                beginAtZero: true
              }
            }   
        }
    }
);  
}
    var prices = [ [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0],[0, 0, 0, 0, 0]];
    var timestamps = [0,0, 0, 0, 0];
function getApiEndpoint(tickerSymbol){
    return 'YOUR-API-URL'.replace('xxx', tickerSymbol.toLowerCase());
} 
function getTheRightChart(rightChart){
    return 'myChartxxx'.replace('xxx', rightChart);
}
function ethereumGetData( tickerSymbol ) {
     var request = ethereumHttpObject();
      request.open('GET', getApiEndpoint( tickerSymbol ), false);  
      request.send(null);
      console.log(request.responseText);
      return request.responseText;
   }
function loader(){
    createAllNewCharts();
    window.setInterval(updateAllTickers,2000);  
}
function updateAllTickers(){
    for ( var i = 0; i < tickerSymbols.length; i++ )
        {
            var tickerSymbol = tickerSymbols[i];   
            var jsonString = ethereumGetData( tickerSymbol );
            var pricePoint = JSON.parse( jsonString );
            console.log( pricePoint.ticker.price );
            for (var j = 1; j < prices.length ; j++)
            {
                prices[ i ][ j-1 ] = prices[ i ][ j ];
                timestamps[ j - 1 ] = timestamps[j];
            }
            prices[ i ][prices[ i ].length - 1] = pricePoint.ticker.price;
            timestamps[timestamps.length - 1] = new Date().toLocaleTimeString();
            allCharts[i].data.labels = timestamps;
            allCharts[i].config.data.datasets[0].data = prices[i];
            allCharts[i].update();
        }
}
function ethereumHttpObject() {
    try{
         return new XMLHttpRequest();
    }
    catch (error) {
        console.log( error.message );
    } 
}
