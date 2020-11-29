var obj = [
  {
    name: "Pavan",
    mobile: 7013224891,
    age: 23,
  },
  {
    name: "kalyan",
    mobile: 7075023250,
    age: 26,
  },
  {
    name: "Ram",
    mobile: 09283982638,
    age: 29,
  }
];

var responce = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

var card_html = "";
var mydata = responce.data;

mydata.map(function(e){
    
    card_html+= `<div class="card">
    <div class="card_header">
        <h1>`+e.first_name+`</h1>
    </div>
    <div class="card_body">
        <p>Mobile: `+e.email+`</p>
        <p>Age: `+e.id+`</p>
    </div>
</div>`;
});

document.getElementById("demo").innerHTML = card_html;


