const paper = require("paper");
const fs = require("fs");

module.exports = {
  renderLine: function () {
    var size = new paper.Size(300, 300);
    paper.setup(size);

    var path = new paper.Path();
    path.strokeColor = "#348BF0";

    var start = new paper.Point(100, 100);
    var end = new paper.Point(200, 200);

    path.moveTo(start);
    path.lineTo(end);

    const svg = paper.project.exportSVG({ asString: true });

    const fileName = `${Date.now()}-renderLine.svg`;
    fs.writeFileSync(fileName, svg);
    console.log(`'${fileName}' file created.`);

    return svg;
  },
};
