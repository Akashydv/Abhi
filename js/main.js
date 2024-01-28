function toggleCollapsible(node){
  debugger
  node.classList.toggle("active");
    var content = node.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
}