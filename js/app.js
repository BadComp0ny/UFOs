// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a table
function buildTable(data) {
    tbody.html("");
}

//loop through each object in the data and append a row and cells for each value in the row
data.foreach((dataRow) => {
    
    // Append a row to the table body
    let row = tbody.append("tr");
    
    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});

// build a function for data click
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;


// Build a filter for the rows
if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
};

// build a table using filtered data if filter exist
buildTable(filteredData);
}

// listen for the click
d3.seletAll("#filter-btn").on("click", handleClick);

// build original code for initial load
buildTable(tableData);