var clinical_trials_common__ID=function(){
    //---------------------------------------------
    var L=$vm.module_list,A=_app_id,B=$vm.hosting_path+'/vmiis/module-library';
    var v={ app_id:_app_id }
    //---------------------------------------------
    //database table:
    var notes_tid      ='20005164';
    var participant_tid='20005167';
    var site_filter_tid='20005165';
    var login_setup_tid='20005166';
    //---------------------------------------------
    //variables:
    var sql_participant="@('Subject_Initials')+' '+@('DOB')";
    //---------------------------------------------
    L[A+'clinical_trials_notes']    ={table_id:notes_tid,       var:v,url:B+'/clinical-trials/modules/notes/notes.html',participant_tid:participant_tid};
    L[A+'site_filter']              ={table_id:site_filter_tid, var:v,url:B+'/clinical-trials/modules/participant/site_filter.html'};
    //quest_list must be include before this include
    L[A+'participant_login_setup']  ={table_id:login_setup_tid, var:v,url:B+'/clinical-trials/modules/participant/participant_login_setup.html',participant_tid:participant_tid,sql_participant:sql_participant,quest_list:quest_list};
    //---------------------------------------------
}
clinical_trials_common__ID();
