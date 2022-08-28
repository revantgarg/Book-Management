const body = document.querySelector("body");

const table = document.createElement('table')
table.style.border = "1px solid red";
table.style.borderCollapse = "collapse";
table.style.width = "80%";
table.style.textAlign = "center";
table.style.marginLeft = "10%"

const data = [
    {
        "id": "1",
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "J.K Rowling",
        "year": "1997",
        "rating": "96"
    },
    {
        "id": "2",
        "title": "Harry Potter and the Chamber of Secrets",
        "author": "J.K Rowling",
        "year": "1998",
        "rating": "97"
    }
    , {
        "id": "3",
        "title": "Harry Potter and the Prisoner of Azkaban",
        "author": "J.K Rowling",
        "year": "1999",
        "rating": "99"
    },
    {
        "id": "4",
        "title": "Harry Potter and the Goblet of Fire",
        "author": "J.K Rowling",
        "year": "2000",
        "rating": "90"
    }
    ,
    {
        "id": "5",
        "title": "Harry Potter and the Order of Phoenix",
        "author": "J.K Rowling",
        "year": "2003",
        "rating": "94"
    },
    {
        "id": "6",
        "title": "Harry Potter and the Half Blood Prince",
        "author": "J.K Rowling",
        "year": "2005",
        "rating": "97"
    }
    ,
    {
        "id": "7",
        "title": "Harry Potter and the Deathly Hallows",
        "author": "J.K Rowling",
        "year": "2007",
        "rating": "97"
    }];


addHeaderRow();
createDataRows();

body.appendChild(table)

createButton();

function addHeaderRow() {
    const headerRow = document.createElement('tr')

    const headerCol1 = document.createElement('th')
    headerCol1.innerHTML = "Book ID"
    headerCol1.style.border = "1px solid red"
    headerCol1.style.backgroundColor = "yellow"

    const headerCol2 = document.createElement('th')
    headerCol2.innerHTML = "Book Title"
    headerCol2.style.border = "1px solid red"
    headerCol2.style.backgroundColor = "yellow"

    const headerCol3 = document.createElement('th')
    headerCol3.innerHTML = "Author"
    headerCol3.style.border = "1px solid red"
    headerCol3.style.backgroundColor = "yellow"

    const headerCol4 = document.createElement('th')
    headerCol4.innerHTML = "Book Year"
    headerCol4.style.border = "1px solid red"
    headerCol4.style.backgroundColor = "yellow"

    const headerCol5 = document.createElement('th')
    headerCol5.innerHTML = "Rating"
    headerCol5.style.border = "1px solid red"
    headerCol5.style.backgroundColor = "yellow"

    const headerCol6 = document.createElement('th')
    headerCol6.innerHTML = "Action"
    headerCol6.style.border = "1px solid red"
    headerCol6.style.backgroundColor = "yellow"

    headerRow.appendChild(headerCol1);
    headerRow.appendChild(headerCol2);
    headerRow.appendChild(headerCol3);
    headerRow.appendChild(headerCol4);
    headerRow.appendChild(headerCol5);
    headerRow.appendChild(headerCol6);


    table.appendChild(headerRow);
}

function createDataRows() {

    for (book of data) {
        const dataRow = document.createElement('tr')
        dataRow.className = 'dataRow';

        const col1 = document.createElement('td')
        col1.innerHTML = book.id;
        col1.style.border = "1px solid red"

        const col2 = document.createElement('td')
        col2.innerHTML = book.title;
        col2.style.border = "1px solid red"

        const col3 = document.createElement('td')
        col3.innerHTML = book.author;
        col3.style.border = "1px solid red"

        const col4 = document.createElement('td')
        col4.innerHTML = book.year;
        col4.style.border = "1px solid red"

        const col5 = document.createElement('td')
        col5.innerHTML = book.rating;
        col5.style.border = "1px solid red";

        const btn = document.createElement('button');
        btn.innerHTML = 'Delete';
        btn.style.backgroundColor = "red";
        // btn.onclick = table.remove(dataRow)

        dataRow.appendChild(col1);
        dataRow.appendChild(col2);
        dataRow.appendChild(col3);
        dataRow.appendChild(col4);
        dataRow.appendChild(col5);
        dataRow.appendChild(btn);


        table.appendChild(dataRow);
    }

}

function createButton() {

    const btn = document.createElement('button');
    btn.innerHTML = 'Add Row';
    btn.style.backgroundColor = "mediumaquamarine";
    btn.style.alignItems = "center";
    btn.style.marginLeft = "47%"

    btn.onclick = addRow;

    body.appendChild(document.createElement('br'))
    body.appendChild(btn)
}

function addRow() {
    const obj = {
        "id": "8",
        "title": "Harry Potter and the Cursed Child",
        "author": "J.K Rowling",
        "year": "2016",
        "rating": "87"
    }

    clearAllDataRows();
    data.push(obj);
    createDataRows();

}

function clearAllDataRows() {
    const allRows = table.querySelectorAll('.dataRow');
    for (row of allRows) {
        table.removeChild(row);
    }
}