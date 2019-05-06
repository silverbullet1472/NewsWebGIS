    //确定画布的大小
    var width = 600;
    var height = 600;
    //在 body 里添加一个 SVG 画布 
    var svg = d3.select("#d3map")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    //定义画布周围空白的地方
    var padding = {left: 5, right: 50, top: 40, bottom: 40};
    //定义一个数组
    var dataset = [2549, 2102, 1258, 1114, 705, 424, 364, 357, 322, 312, 295, 203, 192, 163, 162, 149, 142, 137, 116, 103, 100, 90, 85, 83, 73, 71, 68, 67, 65, 65, 64, 59, 48, 47, 44, 43, 41, 40, 40, 39, 38, 34, 34, 34, 34, 31, 31, 31, 28, 28, 28, 28, 22, 22, 22, 22, 21, 20, 19, 18, 17, 16, 16, 16, 16, 15, 15, 15, 14, 14, 14, 13, 13, 13, 12, 12, 11, 11, 11, 11, 11, 11, 11, 10, 10, 10, 10, 10];
    //x轴的比例尺
    var xScale = d3.scale.ordinal()
      .domain(d3.range(dataset.length))
      .rangeRoundBands([0, width - padding.left - padding.right]);
    //y轴的比例尺
    var yScale = d3.scale.linear()
      .domain([0, d3.max(dataset)])
      .range([height - padding.top - padding.bottom, 0]);
    //定义x轴
    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient("bottom");
    //定义y轴
    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left");
    //矩形之间的空白
    var rectPadding = 5;
    //添加矩形元素
    var rects = svg.selectAll(".MyRect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("class", "MyRect")
      .attr("fill", "steelblue")
      .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
      .attr("x", function (d, i) {
       return xScale(i) + rectPadding / 2;
      })
      .attr("y", function (d) {
       return yScale(d);
      })
      .attr("width", xScale.rangeBand() - rectPadding)
      .attr("height", function (d) {
       return height - padding.top - padding.bottom - yScale(d);
      });
    //添加x轴
    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + padding.left + "," + (height - padding.bottom) + ")")
      .call(xAxis);
    //添加y轴
    svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
      .call(yAxis); 