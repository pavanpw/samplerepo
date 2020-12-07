$(document).ready(function () {
  var api_url = "http://dummy.restapiexample.com/api/v1/employees";
  var card_html ="";
  $.ajax({
    method: "GET",
    url: api_url,
    success: function (e) {
      var responce = e.data;
      responce.map(function (val) {
        console.log(val.employee_name);
        card_html +=
          `<div class="card">
    <div class="card_header">
        <h1>` +
          val.employee_name +
          `</h1>
    </div>
    <div class="card_body">
        <p>Salary: ` +
          val.employee_salary +
          `</p>
        <p>Age: ` +
          val.employee_age +
          `</p>
    </div>
</div>`;
      });
      
      $(".card_list").html(card_html);

    },
  });
});
