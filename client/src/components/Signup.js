// import React, { Component } from "react";

// class Form extends Component {

//     $(document).ready(function() {
//         // Getting references to our form and input
//         var signUpForm = $("form.signup");
//         var emailInput = $("input#email-input");
//         var passwordInput = $("input#password-input");
      
//         // When the signup button is clicked, we validate the email and password are not blank
//         signUpForm.on("submit", function(event) {
//           event.preventDefault();
//           var userData = {
            
//             email: emailInput.val().trim(),
//             password: passwordInput.val().trim()
//           };
      
//           if (!userData.email || !userData.password) {
//             return;
//           }
//           // If we have an email and password, run the signUpUser function
//           signUpUser(userData.email, userData.password);
//           emailInput.val("");
//           passwordInput.val("");
//         });
      
//         // Does a post to the signup route. If successful, we are redirected to the members page
//         // Otherwise we log any errors
//         function signUpUser(email, password) {
//           $.post("/api/signup", {
//             email: email,
//             password: password
//           })
//             .then(function(data) {
//               window.location.replace("/dashboard");
//               // If there's an error, handle it by throwing up a bootstrap alert
//             })
//             .catch(handleLoginErr);
//         }
      
//         function handleLoginErr(err) {
//           $("#alert .msg").text(err.responseJSON);
//           $("#alert").fadeIn(500);
//         }
//       });


// }


// render () {

//     return(
// <div>

// <!-- MENU -->
// <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
//      <div class="container">

//           <div class="navbar-header">
//                <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
//                     <span class="icon icon-bar"></span>
//                     <span class="icon icon-bar"></span>
//                     <span class="icon icon-bar"></span>
//                </button>

//                 <a class="navbar-brand" href="home.html"> <img src="images/1.png" alt="logo" id="logo"> </a>
//           </div>

//      </div>
// </section>




// <!-- CONTACT -->
// <section id="contact" data-stellar-background-ratio="0.5">
//      <div class="container">
//           <div class="row">

//                <div class="col-md-offset-1 col-md-10 col-sm-12">
//                     <form class="signup" id="contact-form" role="form" action="" method="post">
//                          <div class="section-title">
//                               <h1>Progress Insight | <b>Create Account</b></h1>
//                          </div>
                      
//                          <div class="col-md-12 col-sm-12">
//                               <input type="email" class="form-control" id="email-input" placeholder="Email address" name="email" required="">
//                          </div>

//                          <div class="col-md-12 col-sm-12">
//                               <input type="password" class="form-control" id="password-input" placeholder="Password" name="email" required="">
//                          </div>
                        
                         
//                          <div class="col-md-8 col-sm-8"></div>
//                          <div class="col-md-2 col-sm-2">
//                               <input type="submit" class="form-control" name="Submit" value="Submit">
//                          </div>
//                          <div class="col-md-2 col-sm-2">
//                            <input type="submit" class="form-control" name="cancel" value="Cancel">
//                       </div>
//                     </form>
//                </div>

//           </div>
//      </div>
// </section>       


// <!-- FOOTER -->
// <footer id="footer" data-stellar-background-ratio="0.5">
//      <div class="container">
//           <div class="row">

//                <div class="copyright-text col-md-12 col-sm-12">
//                     <div class="col-md-6 col-sm-6">
//                          <p>Copyright &copy; 2020 Progress Insight
//                     </div>

//                     <div class="col-md-6 col-sm-6">
//                          <ul class="social-icon">
//                               <li><a href="#" class="fa fa-facebook-square" attr="facebook icon"></a></li>
//                               <li><a href="#" class="fa fa-twitter"></a></li>
//                               <li><a href="#" class="fa fa-instagram"></a></li>
//                          </ul>
//                     </div>
//                </div>

//           </div>
//      </div>
// </footer>



// </div>

//     );
// }