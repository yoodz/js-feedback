(function (global) {
  function JsFeedback() {
    // console.log(global);
  }

  JsFeedback.prototype.function1 = function (params) {
    document.getElementById("inputContent").style.display = 'block'
    document.getElementById("mainContent").style.display = 'none'
  };

  JsFeedback.prototype.submit = function (params) {
    const text = document.getElementById("inputValue").value
    alert(text)
  };



  function addFeedbackDom() {
    // const bodyDom = document.getElementsByTagName("body")[0];
    // bodyDom.innerText = "3333";

    var mainDiv = document.createElement("div");
    mainDiv.id = "mainContent";
    mainDiv.style.cssText =
      "position: fixed; bottom: 200px; right: 50px; cursor: pointer; width: 100px; height: 100px; border: 1px solid;text-align: center;line-height: 100px; border-radius: 50%;";
    mainDiv.innerHTML =
      '<div onclick="$$.function1()">反馈</div>';
    //把div元素节点添加到body元素节点中成为其子节点，但是放在body的现有子节点的最后
    document.body.appendChild(mainDiv);
    // 插入到最前面
    // document.body.insertBefore(mainDiv, document.body.firstElementChild);

    var inputContent = document.createElement("div");
    inputContent.style.cssText =
    "position: fixed; bottom: 200px; right: 50px; display: none";
    inputContent.id = "inputContent";
    inputContent.innerHTML = "<div><textarea id='inputValue' style='text-indent: 5px; resize: none' name='' id='' cols='30' rows='10' maxlength='100' placeholder='请输入...'></textarea> <button onClick='$$.submit()' style='display: block'>提交</button></div>"
    document.body.appendChild(inputContent);
  }
  addFeedbackDom();

  window.$$ = window.jsFeedback = new JsFeedback();
})(window);
