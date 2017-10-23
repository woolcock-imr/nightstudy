function UrlExists(url, cb){
	jQuery.ajax({
		url:      url,
		dataType: 'text',
		type:     'GET',
		complete:  function(xhr){
			if(xhr.status!=200)	 console.log(xhr.status+" "+url)
		}
	});
}
//--------------------------------------------------------
var N=0,E=0;
$('#panel__ID li').each(function(){
	var m=$(this).attr('module');
	if(m!=undefined){
		if($vm.module_list[group+m]==undefined){console.log(group+m +" is not in the module list");E++;} N++;
	}
})
console.log(E+"/"+N+ " modules were checked");
//--------------------------------------------------------
var N=0,E=0;
$('#panel__ID li').each(function(){
	var m=$(this).attr('module');
	if($vm.module_list[group+m]!=undefined){
		if($vm.module_list[group+m].url==undefined){console.log(group+m +" url is not set");E++;} N++;
	}
})
console.log(E+"/"+N+ " module's url were checked");
//--------------------------------------------------------
$('#panel__ID li').each(function(){
	var m=$(this).attr('module');
	if($vm.module_list[group+m]!=undefined && $vm.module_list[group+m].url!=undefined){
		var url=$vm.module_list[group+m].url;
		if(url[0]=='/') url=$vm.hosting_path+url;
		UrlExists(url)
	}
})
//--------------------------------------------------------
