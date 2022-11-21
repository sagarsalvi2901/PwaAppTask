
	$(document).ready(function () {	
    //var floorData;
	$('#flatNumber').empty();
	$('#nameTextbox').val('');
	console.log(" you are inside document dot ready ");
	//var url = "/my_pwa/ownerdata.json";
		$.getJSON('/my_pwa/ownerdata.json', function (data) {
			//console.log(" you are inside get json ", data);
    		$.each(data, function (index, value) {
            $('#floorsList').append('<option value="' + value.floorId + '">' + value.floorName + '</option>');
            });
			//console.log(data);
		});
	});	
	
	
	$(document).on('change', '#floorsList', function(){
		console.log(" inside change ready ");
		$('#flatNumber').empty();
		$('#nameTextbox').val('');
 	 	var floor_index = $(this).val();
  		console.log(floor_index , "index");	
		//var floor_id =  parseInt(floor_index) + 1;
		var floor_id =  parseInt(floor_index);
  		//console.log(floor_id , "revised index");
		$.getJSON('/my_pwa/flatdatabase.json', function (data) {
  			$.each(data, function(i, v) {
			//console.log(floor_id);
    			if (v.floorIdRef == floor_id) {
        		console.log("success");
				$('#flatNumber').append('<option value="' + v.floorIdRef + '" >' + v.flatId + '</option>');
				}
			});	
	    }); 
	});
	
 
 
 	//$('#flatNumber').on('click', function(){
	$(document).on('click', '#flatNumber', function(){	
		$('#nameTextbox').val('');
		//var flat_id = $(this).val();
		//var flat_id = $('#flatNumber').find('option:selected').val();
		var flat_id = $("#flatNumber option:selected").text();
		console.log(flat_id , "new flat id");
		$.getJSON('/my_pwa/flatdatabase.json', function (data) {
			$.each(data, function(i, valueThree) {
				if (valueThree.flatId == flat_id) {
        		console.log(flat_id, "flat id in loop success");
				$('#nameTextbox').val(valueThree.ownerName);
				}
			});
		});		
	});

		 

