var schema = [{
    type: "row",
    content: [{
        type: "input-text",
        placeholder: "First Name",
        name: "first-name"
    }, {
        type: "input-text",
        placeholder: "Last Name",
        name: "last-name"
    }]
}, {
    type: "row",
    content: [{
        type: "input-text",
        placeholder: "Phone",
        name: "Phone"
    }, {
        type: "input-text",
        placeholder: "Email",
        name: "email"
    }]
},{
    type: "row",
    content: [{
        type: "input-text",
        placeholder: "Credit card number",
        name: "cnumber"
    }, {
        type: "input-text",
        placeholder: "CVV2 code",
        name: "cvv"
    }]
}];


var buildButtonEl = document.getElementById('build-form-button');
var formEl = document.getElementById('generated-form');


var formBuiderTypes = {
    "row": function (context) {
        console.log("render row", context.content);
        var div = document.createElement('div');
        div.classList.add("row");
        var div2 = document.createElement('div');
        div2.classList.add("input-group");

        formEl
            .appendChild(div)
            .appendChild(div2);

        if (context.content) {
            formBuilder(null, context.content);
        }

    },
    "input-text": function (context) {
        console.log("render input", context.content);
        var input = document.createElement('input');
        input.classList.add("form-control");
        for (var key in context) {
            if (key === "type") continue;
            input.setAttribute(key, context[key]);
        }
        var outerDiv = document.createElement("div");
        outerDiv.classList.add('col-md-6')


        formEl.lastChild
            .appendChild(outerDiv)
            .appendChild(input);


    }

}


var formBuilder = function (formEl, formSchema) {


    formSchema.forEach(function (schemaItem) {
        var type = schemaItem.type;

        if (typeof formBuiderTypes[type] != "indefined") {
            formBuiderTypes[type](schemaItem);
        } else {
            console.log("UNKNOWN", type);
        }

    })
}


buildButtonEl.addEventListener('click', function () {
    formBuilder(formEl, schema);
    //formEl.appendChild(formEl);
});


