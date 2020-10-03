<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "test@digitalmediametrics.com";
    $email_subject = "Digital Media Metrics - Hello from user!";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['first_name']) ||
        !isset($_POST['last_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['comments']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
 
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
<!doctype html>
<html lang="en">

<head>
    
    <title>Contact | Digital Media Metrics</title>
   
    <!-- Required meta tags for Bootstrap -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- end of meta tags for Bootstrap -->
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110570219-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-110570219-1');
    </script>
    <!-- End of Google Analytics -->
      
    <meta name="description" content="The go-to resource for any digital marketing jargon, definitions or calculators. If you need to know how to calculate metrics such as CTR or CPC, this is the resource for you. Made by digital marketers, for digital marketers.">
    <meta name="keywords" content="digital media, digital marketing, digital advertising, marketing, media, advertising, digital media metrics, marketing metrics, media agency metrics, media metrics, CTR, click through rate, brand metrics, dr metrics, performance metrics, CPC, cost per click, PPC, pay per click, display, social, programmatic, dsp, calculator, ctr calculator, cpc calculator, ctr equation, ctr formula, cpc equation, cpc formula">
    <meta name="application-name" content="Digital Media Metrics">
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <!-- end of Bootstrap CSS -->
    
    <!-- site CSS -->
    <script src="https://use.fontawesome.com/6ce55c6d09.js"></script>  
    <link rel="stylesheet" href="../css/stylesheet.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet">
    <!-- end of site CSS -->
    
</head>

<body>
  <div class="jumbotron">
    <h1>Digital Media Metrics</h1>
  </div>

<!-- NAV BAR BEGINS -->              
<div class="navMargin"><nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/index.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/brand/index.html">Brand Metrics</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/performance/index.html">Performance Metrics</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/contact/index.html">Contact</a>
      </li> 
    </ul>
  </div>
</nav>
</div>
<!-- NAV BAR ENDS -->
          
    
<!-- CONTENT BEGINS -->
    
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <h1>Contact</h1>

            Thank you for contacting us. We will reply to your email as soon as we are able to.
    </div>

</div>      

<!-- CONTENT ENDS -->
    
    
<!-- FOOTER BEGINS -->
    
<div class="container-fluid footer bg-secondary footer-top">
    <div class="row">
        <div class="col-md-6 text-left footer-nav-pad">
        <ul>
            <li><h4>Navigation</h4></li>
            <li><a href="/brand/index.html">Brand Metrics</a></li>
            <li><a href="/performance/index.html">Performance Metrics</a></li>
            <li><a href="/contact/index.html">Contact</a></li>
        </ul>
        </div>
        <div class="col-md-6 text-center footer-top"><h5>Digital Media Metrics &copy; 2018</h5></div>
    </div>
</div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

<!-- FOOTER ENDS -->
    
  </body>
    
</html> 
<?php
 
}
?>