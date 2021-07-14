(function (global) {
  function jsFeedback() {
    // console.log(global);
  }

  function addFeedbackDom() {
    // const bodyDom = document.getElementsByTagName("body")[0];
    // bodyDom.innerText = "3333";

    var div = document.createElement("div");
    div.style.cssText="position: fixed; bottom: 0; right: 0;"
    div.innerHTML="<p>啥也不是</p>"
    //把div元素节点添加到body元素节点中成为其子节点，但是放在body的现有子节点的最后
    document.body.appendChild(div);
    //插入到最前面
    document.body.insertBefore(div, document.body.firstElementChild);
  }
  addFeedbackDom();
  window.$ = window.jsFeedback = jsFeedback;
})(window);
