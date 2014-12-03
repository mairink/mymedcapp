function cookieNotification(message, cookieName, cookiePolicyUrl) {
  if ($.cookie("accept_pcrs_cookies_" + cookieName) === null) {
    var inputAccept = ' <input type="submit" id="epdsubmit" value="Accept"/>';
    var linkToPolicy = ' <a href="' + cookiePolicyUrl + '" class="link">Cookie Policy</a>';
    var divText = message + linkToPolicy + inputAccept;
    var opts = {
      text : divText,
      hide : false,
      addclass : "eucookie",
      width : "100%",
      animation : 'fade',
      sticker : false,
      icon : false,
      stack : {
        "dir1" : "up",
        "dir2" : "right",
        "spacing1" : 0,
        "spacing2" : 0
      }
    };
    $.pnotify(opts);
    $("#epdsubmit").on("click", function() {
      acceptCookie(cookieName);
    });
  }
}

function acceptCookie(cookieName) {
  $.cookie("accept_pcrs_cookies_" + cookieName, "true", {
    path : '/',
    expires : 365
  });
  $(".eucookie").fadeOut();
}

function systemMessages(systemMessages, cookieName) {
  if (systemMessages !== null && systemMessages !== undefined) {
    for ( var int = 0; int < systemMessages.length; int++) {
      systemMessage(systemMessages[int], cookieName);
    }
  }
}

function systemMessage(systemMessage, cookieNam) {
  var cookieName = "system_messages_" + cookieNam;
  var cookie = $.cookie(cookieName);
  if (cookie !== null && cookie !== undefined) {
    var cookieSplit = cookie.split(",");
    var index = $.inArray(systemMessage.id.toString(), cookieSplit);
    if (index === -1) {
      createSystemNotification(systemMessage, cookieNam);
    }
  } else {
    createSystemNotification(systemMessage, cookieNam);
  }
}

function createSystemNotification(systemMessage, cookieName) {
  var opts = {
    title : 'System Notification',
    text : systemMessage.msg,
    hide : false,
    sticker : false,
    idMessage : systemMessage.id,
    cookieName : cookieName,
    type : 'info',
    after_close : function(pnotify) {
      storeMessage(pnotify.opts.idMessage, pnotify.opts.cookieName);
    }
  };
  $.pnotify(opts);
}

function storeMessage(idMessage, cookieNam) {
  var cookieName = "system_messages_" + cookieNam;
  var cookie = $.cookie(cookieName);
  if (cookie === null  || cookie === undefined) {
    $.cookie(cookieName, idMessage, {
      path : '/',
      expires : 365
    });
  } else {
    var cookieSplit = cookie.split(",");
    cookieSplit.push(idMessage);
    $.cookie(cookieName, cookieSplit, {
      path : '/',
      expires : 365
    });
  }
}