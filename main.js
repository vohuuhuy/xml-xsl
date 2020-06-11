var xml = new ActiveXObject("Microsoft.XMLDOM")
xml.async = false
xml.load("QLTH.xml")
var xsl = new ActiveXObject("Microsoft.XMLDOM")
xsl.async = false
xsl.load("QLTH.xsl")
document.write(xml.transformNode(xsl))