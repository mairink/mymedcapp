






<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html>
<head>
<title>Choose the type of application</title>
<style type="text/css" media="all">
@import "/portal/medapponline/inc/css/real.css";
@import "/portal/medapponline/inc/css/calendar.css";
@import "/portal/medapponline/inc/css/navbar.css";
@import "/portal/medapponline/inc/css/tabber.css";
@import "/portal/medapponline/inc/css/displaytag.css";
@import "/portal/medapponline/inc/css/dk.css";
</style>
<script type="text/javascript" src="/portal/medapponline/inc/javascript/tabber.js"></script>
<script type="text/javascript" src="/portal/medapponline/inc/javascript/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="/portal/medapponline/inc/javascript/jquery-migrate-1.2.1.js"></script>
<script type="text/javascript" src="/portal/medapponline/inc/javascript/dk.js"></script>
<script type="text/javascript" src="/portal/medapponline/inc/javascript/jquery.cookie.js"></script>
<script type="text/javascript" src="/portal/medapponline/inc/javascript/jquery.pnotify.min.js"></script>
<script type="text/javascript" src="/portal/medapponline/inc/javascript/systemnotification.js"></script>
<script type="text/javascript">
                function autoLogout(){
                    document.location = "/portal/medapponline/pub/logout.do?timeout=true"
                }
                
                jQuery(document).ready(function() {
                  $.pnotify.defaults.styling = "jqueryui";
                  $.pnotify.defaults.history = false;
                  var jsCookieMessage = 'By using this website you consent to our use of cookies. For more information on cookies see our';
                  if(jsCookieMessage != null){
                    cookieNotification(jsCookieMessage, 'anonymous', '/portal/pub/cookiepolicy');                
                  };
                });   
                
               
        </script>
<link rel="Shortcut icon" href="/inc/images/favicon.ico" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

</head>

<body onload="setTimeout('autoLogout()', 3550000)">

  <div class="wrapper">
    <div class="head">
      



<div class="header">
  <span class="left"> <img src="/portal/medapponline/inc/images/hsenew.png"
    alt="Health Services Executive" />
  </span>
  <div>
    <div class="MainHeaderWhite">
      Medical Card Application
    </div>
  </div>
</div>
<script type="text/javascript">
        function stopRKey(evt) {
            var evt = (evt) ? evt : ((event) ? event : null);
            var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
            if ((evt.keyCode == 13) && (node.type=="text"))  {return false;}
            if ((evt.keyCode == 13) && (node.type=="radio"))  {return false;}
          }

        document.onkeypress = stopRKey;
        if (self != top) {
            if (document.images)
                top.location.replace(window.location.href);
            else
                top.location.href = window.location.href;
        }
   </script>




      <div class="space"></div>
      



<div id="nav-menu">
  <ul>
    <li><a href="/portal/medapponline/pub/welcome.do" class="nav">Welcome</a></li>
    <li><img src="/portal/medapponline/inc/images/red_bullet.gif" width="7" height="6" alt="Red Dot" /></li>
    <li><a href="/portal/medapponline/pub/choicePage.do" class="nav">Application</a></li>

    <li class="rightLogout"><a href="http://www.medicalcard.ie" id="l104" class="nav">MedicalCard.ie</a></li>
  </ul>
</div>



    </div>
    <div class="content">
      <div></div>
      




<b class="b1h"></b>
<b class="b2h"></b>
<b class="b3h"></b>
<b class="b4h"></b>
<div class="headh">
  <h3>
    Quick Assessment Guide
  </h3>
</div>
<div class="contenth">
  <div class="subContenth">
    <div class="successPage">
      <p>
        You should apply online if you believe you are within the income guidelines. Choose from these three options.
      </p>
      <p>
        The online application process will determine if you are eligible on the basis of an assessment of your income only. If you are over the income guidelines you will know immediately and the HSE will send you written confirmation showing you the assessment based on the details you have provided. You may still be eligible on a discretionary basis and you should contact your local health office in that case. If you are unsure whether you are within the income guidelines then please apply online.
        <br />
        <a href="/portal/medapponline/pub/guidelines.do">Click here to see the current income guidelines.</a>
      </p>
      <table>
        <tr>
          <td class="formChoiceLink"><a href="/portal/medapponline/pub/page1.do?pagenum=showPage1&formChoice=gross">Apply for Over 70s Scheme</a></td>
          <td>i.e. medical card application under the new scheme for persons aged 70 and over.</td>
        </tr>
        <tr>
          <td><br /></td>
        </tr>
        <tr>
          <td class="formChoiceLink"><a href="/portal/medapponline/pub/page1.do?pagenum=showPage1&formChoice=net">Apply for Means Tested / Under 70s Scheme</a></td>
          <td>i.e. medical card application for persons aged 70 and over who do not qualify under the new scheme and all other applicants</td>
        </tr>
        <tr>
          <td><br /></td>
        </tr>

        <tr>
          <td class="formChoiceLink"><a href="/portal/medapponline/pub/verifyPage.do">Renew Existing Card</a></td>
          <td>i.e existing card holders who have been notified that their card is due to expire</td>
        </tr>

      </table>



    </div>
  </div>
</div>
<b class="b4bh"></b>
<b class="b3bh"></b>
<b class="b2bh"></b>
<b class="b1h"></b>





    </div>
    


<!--start footer-->
<div class="copyright">
  &copy;
  Copyright HSE, Primary Care Reimbursement Service
</div>

<!--end footer-->
  </div>


</body>
</html>