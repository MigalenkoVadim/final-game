import {start} from './start.js';
let user = {};

login();

export function login() {
    $(".battlefield").html(`
      <section class='registration-wrapper'>
          <table class='registration'>
            <tr class='first-name-box'>
                <td>First Name:</td>
                <td><input type="text" id ='first-name' name="first-name"></td>
            </tr>
            <tr class='last-name-box'>
                <td>Last Name:</label></td>
                <td><input type="text" id ='last-name' name="last-name"></td>
            </tr>
            <tr class='email-box'>
                <td>Email:</td>
                <td><input **type="email"** id = 'email' name="email"></td>
            </tr>
            <tr class='submit'>
                <td>
                <input type="button" id='submit' value="Submit!">
                </td>
            </tr>
          </table>
          <div class='hello'></div>
      </section>
      <div class='start'>Start!</div>
    `);
    
    if (localStorage.getItem('first-name') !== null) {
        user.firstName = localStorage.getItem('first-name');
        user.lastName = localStorage.getItem('last-name');
        user.email = localStorage.getItem('email');
        document.getElementById('first-name').value = localStorage.getItem('first-name');
        document.getElementById('last-name').value = localStorage.getItem('last-name');
        document.getElementById('email').value = localStorage.getItem('email');
    }
   
    $('#submit').click(function() {
        user.firstName = $('#first-name').val();
        user.lastName = $('#last-name').val();
        user.email = $('#email').val();
        $('.hello').html(`<div class = 'hello'>Hello, ${user.firstName}!</div>`);
        localStorage.setItem('first-name', user.firstName);
        localStorage.setItem('last-name', user.lastName);
        localStorage.setItem('email', user.email);
    });

    $('.start').click(function() {
        start();
    });
}
export {user};