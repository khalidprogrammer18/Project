// add
// localStorage.clear()
if (document.body.classList.contains("index")) {
    let add = document.querySelector("#add");

    function dBlock(id) {
        document.querySelector(`#${id}`).style.display = "block";
    }
    function dNone(id) {
        document.querySelector(`#${id}`).style.display = "none";
    }

    add.onclick = function () {
        dBlock("hid-add");
        let close = document.querySelector(".close");
        close.onclick = function () {
            dNone("hid-add");
        };
    };

    if (localStorage.getItem("parts")) {
        var parts = localStorage.getItem("parts").split(",").sort((a, b) => a.localeCompare(b, "ar"));
        console.log(parts)
    } else {
        var parts = [];
    };

    document.querySelector("#submit").onclick = function (e) {
        e.preventDefault()
        let name = document.querySelector("#name").value;
        try {
            parts.push(name);
            localStorage.setItem("parts", parts);
            let sure = document.createElement("p");
            sure.style.color = "var(--green)";
            sure.innerHTML = "تم إدخال الإسم بنجاح";
            sure.className = "done";
            if (!document.querySelector(".done")) {
                document.querySelector("#add-one").append(sure)
            }
        } catch {
            console.log("Error");
        };
        setTimeout(() => location.reload(), 1000)
    };

    let reset = document.querySelector("#reset");
    reset.onclick = function () {
        document.querySelector("#name").focus()
    }
    }

if (document.body.classList.contains("part")) {
    var parts = localStorage.getItem("parts").split(",").sort((a, b) => a.localeCompare(b, "ar"));
    let table = document.querySelector("#table").querySelector("tbody");
    console.log(parts)
    for (let i = 0; i < parts.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        td1.innerHTML = i + 1;
        td2.innerHTML = parts[i];
        td3.innerHTML = 0;
        td4.innerHTML = 0;
        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        table.append(tr)
    };
}

if (document.body.classList.contains("table")) {
    let year = new Date().getFullYear();
    for (let i = 2022; i <= year; i++) {
        let oneYear = document.createElement("option");
        oneYear.innerHTML = i;
        document.querySelector("#years-list").append(oneYear);
    }
    document.querySelector(".first").innerHTML = `متابعة القطية الشهرية للمجلس للعام ${year}م`;
    // let choosenYear = document.querySelector("#years-list");
    // choosenYear.onclick = function () {
    //     if (typeof choosenYear.value !== Number) {
    //         document.querySelector(".first").innerHTML = `متابعة القطية الشهرية للمجلس للعام ${year}م`;
    //     } else {
    //     }
    // }

}