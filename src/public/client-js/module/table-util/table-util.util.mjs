export class TableUtil {

    /**
     * Makes a table from data array and header array.
     * @param {*} array 
     * @param {*} header 
     * @returns 
     */
    static makeTable(array, header) {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        for (let i = 0; i < header.length; i++) {
            const headerCell = document.createElement("th");
            headerCell.textContent = header[i];
            thead.appendChild(headerCell);
        }
        table.appendChild(thead);

        const tbody = document.createElement("tbody");
        for (let i = 0; i < array.length; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < array[i].length; j++) {
                const cell = document.createElement("td");
                cell.textContent = array[i][j];
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        return table;
    }
}