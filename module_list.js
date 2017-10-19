var module_list__ID=function(){
    //---------------------------------------------
    var L=$vm.module_list,A=_app_id,B=$vm.hosting_path+'/woolcock-imr/CRC-Stream-B';
    var v={ app_id:_app_id }
    //---------------------------------------------
    //database table:
    //---------------------------------------------
    //variables:
    //---------------------------------------------
    L[A+'data_entry_by_staff']=         {table_id:'--------',var:v,url:B+'/modules/navigation/data_entry_by_staff.html'};
    L[A+'data_entry_by_participant']=   {table_id:'--------',var:v,url:B+'/modules/navigation/data_entry_by_participant.html'};
    //---------------------------------------------
}
module_list__ID();
