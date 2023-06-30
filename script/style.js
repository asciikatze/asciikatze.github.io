function getStylesheet() {
  var currentTime = new Date().getHours();
  if (0 <= currentTime&&currentTime < 8) {document.write("<link rel='stylesheet' href='/style/nacht.css' type='text/css'>");}
  if (8 <= currentTime&&currentTime < 20) {document.write("<link rel='stylesheet' href='/style/tag.css' type='text/css'>");}
  if (20 <= currentTime&&currentTime < 24) {document.write("<link rel='stylesheet' href='/style/nacht.css' type='text/css'>");}
}
getStylesheet();
