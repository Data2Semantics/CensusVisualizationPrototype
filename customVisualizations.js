sgvizler.visualization.orderedTable = function(container) {
	this.container = container
};
sgvizler.visualization.orderedTable.prototype = {
		id : "orderedTable",
		name : "orderedTable",
		draw : function(data, chartOpt) {
			var noRows = data.getNumberOfRows();
			var colNumToSort = 1;
			var limit = 10;
			data.sort([ {
				column : colNumToSort,
				desc : true
			} ]);
			if (noRows > limit) {
				data.removeRows(limit, noRows - limit);
			}
			chart = new google.visualization.Table(this.container), chart.draw(data, chartOpt);
		}
};
sgvizler.visualization.orderedPieChart = function(container) {
	this.container = container
};
sgvizler.visualization.orderedPieChart.prototype = {
		id : "orderedPieChart",
		name : "orderedPieChart",
		draw : function(data, chartOpt) {
			var noRows = data.getNumberOfRows();
			var colNumToSort = 1;
			var limit = 10;
			data.sort([ {
				column : colNumToSort,
				desc : true
			} ]);
			if (noRows > limit) {
				data.removeRows(limit, noRows - limit);
			}
			chart = new google.visualization.PieChart(this.container), chart.draw(data, chartOpt);
		}
};