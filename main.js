var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        insertNewRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["inlineFormInput"] = document.getElementById("inlineFormInput").value;
    formData["inputEmail"] = document.getElementById("inputEmail").value;
    formData["money"] = document.getElementById("money").value;
    formData["inlineFormCustomSelect"] = document.getElementById("inlineFormCustomSelect").value;



    return formData;
}





function insertNewRecord(data) {
    var table = document.getElementById("gambleList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.lenght);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.inlineFormInput;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.inputEmail;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.money;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.inlineFormCustomSelect;
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                        <a onClick="onDelete(this)">Borrar</a>`
}

function resetForm() {
    document.getElementById("inlineFormInput").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("money").value = "";
    document.getElementById("inlineFormCustomSelect").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("inlineFormInput").value = selectedRow.cells[0].innerHTML;
    document.getElementById("inputEmail").value = selectedRow.cells[1].innerHTML;
    document.getElementById("money").value = selectedRow.cells[2].innerHTML;
    document.getElementById("InlineFormCustomSelect").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.inlineFormInput;
    selectedRow.cells[1].innerHTML = formData.inputEmail;
    selectedRow.cells[2].innerHTML = formData.money;
    selectedRow.cells[3].innerHTML = formData.inlineFormCustomSelect;
}

function onDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementById("gambleList").deleteRow(row.rowIndex);
    resetForm();
}

function validate() {
    isValid = true;
    if (document.getElementById("inlineFormInput").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
// inlineFormInput NAME
// inputEmail EMAIL
// money PLATA
// InlineFormCustomSelect SELECT 1,2,3
