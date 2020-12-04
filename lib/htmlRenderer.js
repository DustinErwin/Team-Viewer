const Employee = require("./lib/Employee");
const fs = require("fs");

module.exports.renderHtml = function () {
  fs.writeFile()`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      />
  
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"
      ></script>
  
      <title>Document</title>
    </head>
    <body style="background-color: lightslategrey">
      <div class="container">
        <table class="table" style="margin-top: 2em">
          <thead>
            <tr>
              <th scope="col">Managers</th>
              <th scope="col">Name</th>
              <th scope="col">Contact Info</th>
            </tr>
          </thead>
          <tbody id='managers'> 

            <tr>
              <th scope="row"></th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>

          </tbody>
          <thead>
            <tr>
              <th scope="col">Engineers</th>
              <th scope="col">Name</th>
              <th scope="col">Contact Info</th>
            </tr>
          </thead>
          <tbody id='engineers'>
            
          </tbody>
          <thead>
            <tr>
              <th scope="col">Interns</th>
              <th scope="col">Name</th>
              <th scope="col">Contact Info</th>
            </tr>
          </thead>
          <tbody id='interns'>
            
          </tbody>
        </table>
      </div>
    </body>
  </html>
  `;
};
