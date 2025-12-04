function showSources1() {
    let html = "";

    html += "<a href='https://sdgs.un.org/goals/goal11' target='_blank'>source1</a><br>";
    html += "<a href='https://afres.architexturez.net/system/files/afres-2010-full-non-refereed-21.pdf' target='_blank'>source2</a><br>";
    html += "<a href='https://hinesvillehousingauthority.org/the-importance-and-benefits-of-affordable-housing/' target='_blank'>source3</a><br>";

    document.getElementById("source").innerHTML = html;
}

function showSources2() {
    let html = "";

    html += "<a href='https://sdgs.un.org/goals/goal11#progress_and_info' target='_blank'>source1</a><br>";
    html += "<a href='https://unstats.un.org/sdgs/report/2025/extended-report/Extended-Report-2025_Goal-11.pdf' target='_blank'>sources2</a><br>";

    document.getElementById("source").innerHTML = html;
}
