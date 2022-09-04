var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};
ready(() => {
  document.querySelector(".header").style.height = window.innerHeight + "px";
  //for beta only
document.body.innerHTML += ```
<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
  <div id="warnToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Warning!</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
    This is the beta! Go <a href="https://jdjgbot.com">here</a> for the release version.
    </div>
</div>
```;
var toastWarning = document.getElementById('warnToast');     
if (window.location.href != "https://jdjgbot.com") {
  var toast = new bootstrap.Toast(toastWarning);
  toast.show();
};
// end beta only section

});
