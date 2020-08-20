var baseurl = "https://work-samples.swishersolutions.com/";

var current_imageset = {};
current_imageset["Swisher"] = {};
current_imageset["Heroes"] = {};

var selected_imageset = 'Swisher'

var current_zoom = 30;

$(document).ready(function() {
	
	$(document).on("click", ".cast_vote", function() {
		 castvote();		
	});	
	
	$(".btn_image_sets").on("click", function() {
		var lbl = $(this).data("key");
		
		if (lbl == "Heroes") {
			$(this).html("Show Swisher");
			$(this).data("key", "Swisher");
			selected_imageset = 'Heroes';
		}
		else {
			$(this).html("Show Heroes");
			$(this).data("key", "Heroes");
			selected_imageset = 'Swisher';
		};
		
		getimages(lbl);
		
	});
	
	$(".zoom").on("click", function() {
		let direction = $(this).data("direction");
		zoom(direction);
	});
		
	getimages(selected_imageset);
	
});

function zoom(direction) {
		
	if (direction == 'minus') {
		if (current_zoom == 10) {
			return;
		};
		current_zoom = current_zoom - 10;
	} else {
		if (current_zoom == 50) {
			return;
		};
		current_zoom = current_zoom + 10;
	};
	
	getimages(selected_imageset);
		
};


function castvote() {
	
	let arr = Array();
		
	$(".photo-grid-item").each(function(key, val) {		
		let filename = $(this).data("filename");
		arr.push(filename);
	});
	
	return $.post(baseurl + "api/api.php", {rtype: selected_imageset, json: JSON.stringify(arr)},
	function(data) {		
		$("#modal_success").modal("show");		
	});
	
};

function getimages(imageset) {
		
	if (!imageset) {
		return false;
	};
	
	$(".btn_image_sets").prop("disabled", true);
	$(".btn_image_sets").addClass("waithand");
	
	$(".item_container").hide();
	
	let d;
	
	let isEmpty = $.isEmptyObject(current_imageset[imageset] );

	if (!isEmpty) {		
		drawgrid(current_imageset[imageset], imageset);
		return false;
	};	
		
	return $.get(baseurl + "api/api.php?f=" + imageset, 
	function(data) {		
		let d = $.parseJSON(data);				
		drawgrid(d, imageset);
	});
	
};

function drawgrid(griddata, imageset) {
	
	let gridhtml = "";
		
	let vw = 'vw'+current_zoom;
	
	$.each(griddata, function(key, val) {
		gridhtml += 
		'<div class="photo-grid-item test ' + vw + '" data-filename="' + val + '">' +
			'<img src="' + baseurl + '/api/img/' + val + '" />' +
		'</div>';		
	});	

	gridhtml = '<div class="photo-grid-container">' + gridhtml + '</div>';	
		
	$(".item_container").html(gridhtml);
	
	$('.photo-grid-container').sortablePhotos({
		selector: '> *',
		sortable: true,
		padding: 10,
		afterDrop: function (event, element) {								
			$(".photo-grid-item").each(function(key, val) {				
				var filename = $(this).data("filename");				
				current_imageset[imageset][key] = filename;
			});			
		}
	});		
	
	$(".item_container").fadeIn(100, function() {
		$(".btn_image_sets").prop("disabled", false);
		$(".btn_image_sets").removeClass("waithand");
	});
	
};
