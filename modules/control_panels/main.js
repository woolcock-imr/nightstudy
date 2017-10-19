//---------------------------------------------
_app_id='woolcock_CRC_Powersleep_Laboratory_';
//---------------------------------------------
var main__ID=function(){
    //---------------------------------------------
    var L=$vm.module_list,
    A=_app_id,
    B=$vm.hosting_path+'/woolcock-imr/CRC_Powersleep_Laboratory/modules',
    T=$vm.hosting_path+'/woolcock-imr/CRC_Powersleep_Laboratory/modules/tasks',
    M=$vm.hosting_path+'/vmiis/module-library',
    Q=$vm.hosting_path+'/vmiis/module-library/clinical_trials_questionnaire',
    E=$vm.hosting_path+'/vmiis/module-library/clinical_trials_ecrf';
    F=$vm.hosting_path+'/vmiis/module-library/clinical_trials_flash';
    //---------------------------------------------
    //database table:
    var participant_tid     ='20010469';
    var task_notes_tid      ='20010470';
    var login_setup_tid     ='20010471';
    var visit_booking_tid   ='20010472';
    var site_filter_tid     ='20010473';
    //---------------------------------------------
    //variables used inside modules
    var v={
        app_id:_app_id,
        participant_tid:participant_tid,
        clinical_trials_notes_tid:task_notes_tid,
        site_filter_tid:site_filter_tid,
        login_setup_tid:login_setup_tid,
        sql_participant:"@('Study_ID')",
        booking_record_module:      A+'booking_record',
        booking_daily_module:       A+'daily',
        booking_weekly_module:      A+'weekly',
        booking_monthly_module:     A+'monthly',
        participant_login_setup:    A+'participant_login_setup',
        data_entry_by_staff:        A+'data_entry_by_staff',
        data_entry_by_participant:  A+'data_entry_by_participant',
    }
    //---------------------------------------------
    //panels
    L[A+'data_entry_by_staff']=         {table_id:'',var:v,url:B+'/control_panels/data_entry_by_staff.html'};
    L[A+'data_entry_by_participant']=   {table_id:'',var:v,url:B+'/control_panels/data_entry_by_participant.html'};
    //---------------------------------------------
    //links library
    L[A+'participant']=                 {table_id:participant_tid,      var:v,  url:M+'/clinical_trials/participant/participant_with_study_id.html'};
    L[A+'clinical_trials_notes']    =   {table_id:task_notes_tid,       var:v,  url:M+'/clinical_trials/task_notes/notes.html'};
    L[A+'site_filter']              =   {table_id:site_filter_tid,      var:v,  url:M+'/clinical_trials/participant/site_filter.html'};
    L[A+'participant_login_setup']  =   {table_id:login_setup_tid,      var:v,  url:M+'/clinical_trials/participant/participant_login_setup.html'};
    L[A+'booking_record']=              {table_id:visit_booking_tid,    var:v,  url:M+'/medical_research_participant_visit_booking/booking/booking_record.html'};
    L[A+'daily']=                       {table_id:visit_booking_tid,    var:v,  url:M+'/medical_research_participant_visit_booking/calendar/daily.html'};
    L[A+'weekly']=                      {table_id:visit_booking_tid,    var:v,  url:M+'/medical_research_participant_visit_booking/calendar/weekly.html'};
    L[A+'monthly']=                     {table_id:visit_booking_tid,    var:v,  url:M+'/medical_research_participant_visit_booking/calendar/monthly.html'};
    //---------------------------------------------
    L[A+'Adverse_Event_Adverse']=    {table_id:'20010475',var:v,url:T+'/Adverse_Event.html',notes:' Adverse Event_Adverse'};
    L[A+'Adverse_Event_Form']=       {table_id:'20010476',var:v,url:T+'/File_upload.html',notes:' Adverse Event_Form'}
    L[A+'Concom_Medication']=   {table_id:'20010476',var:v,url:T+'/concom_medication.html',notes:'Concomitant Medication'};
    L[A+'File_Notes_File']=          {table_id:'20010474',var:v,url:T+'/File_Notes.html',notes:'File Notes_File'};

    //Screening
    L[A+'Screening_Visit_Date']={table_id:'20010478',var:v,url:T+'/Visit_date.html',notes:'Screening Visit Date'};
    L[A+'Screening_Anthro']=    {table_id:'20010479',var:v,url:T+'/Anthro.html',notes:'Screening Anthropometry'};

    //Sleep Diary At Home Testing
    L[A+'At_Home_Testing_Sleep_diary_1']=     {table_id:'20010483',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 1'};
    L[A+'At_Home_Testing_Sleep_diary_2']=     {table_id:'20010485',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 2'};
    L[A+'At_Home_Testing_Sleep_diary_3']=     {table_id:'20010747',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 3'};
    L[A+'At_Home_Testing_Sleep_diary_4']=     {table_id:'20010748',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 4'};
    L[A+'At_Home_Testing_Sleep_diary_5']=     {table_id:'20010749',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 5'};
    L[A+'At_Home_Testing_Sleep_diary_6']=     {table_id:'20010750',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 6'};
    L[A+'At_Home_Testing_Sleep_diary_7']=     {table_id:'20010751',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 7'};
    L[A+'At_Home_Testing_upload_Wk1']=     {table_id:'20010641',var:v,url:T+'/File_upload.html',notes:'Week 1'};

    L[A+'At_Home_Testing_Sleep_diary_11']=    {table_id:'20010752',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 11'};
    L[A+'At_Home_Testing_Sleep_diary_12']=    {table_id:'20010753',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 12'};
    L[A+'At_Home_Testing_Sleep_diary_13']=    {table_id:'20010754',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 13'};
    L[A+'At_Home_Testing_Sleep_diary_14']=    {table_id:'20010755',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 14'};
    L[A+'At_Home_Testing_Sleep_diary_15']=    {table_id:'20010756',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 15'};
    L[A+'At_Home_Testing_Sleep_diary_16']=    {table_id:'20010757',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 16'};
    L[A+'At_Home_Testing_Sleep_diary_17']=    {table_id:'20010758',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 17'};
    L[A+'At_Home_Testing_upload_Wk2']=     {table_id:'20010642',var:v,url:T+'/File_upload.html',notes:'Week 2'};

    //Sleep Diary In Lab Testing
    L[A+'In_Lab_Sleep_diary_8']=     {table_id:'20010759',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 8'};
    L[A+'In_Lab_Sleep_diary_9']=     {table_id:'20010760',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 9'};
    L[A+'In_Lab_Sleep_diary_10']=    {table_id:'20010761',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 10'};
    L[A+'In_Lab_upload_V1']=         {table_id:'20010643',var:v,url:T+'/File_upload.html',notes:'Sleep diary PDF'};

    L[A+'In_Lab_Sleep_diary_18']=    {table_id:'20010762',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 18'};
    L[A+'In_Lab_Sleep_diary_19']=    {table_id:'20010763',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 19'};
    L[A+'In_Lab_Sleep_diary_20']=    {table_id:'20010764',var:v,url:T+'/At_Home_Sleep_Diary.html',notes:'Day 20'};
    L[A+'In_Lab_upload_V2']=         {table_id:'20010644',var:v,url:T+'/File_upload.html',notes:'Sleep diary PDF'};

    //Actigraphy At Home Testing
    L[A+'At_Home_Testing_Actigraphy_1']=      {table_id:'20010484',var:v,url:T+'/At_Home_Testing_Actigraphy.html',notes:'At Home Testing Actigraphy Week 1'};
    L[A+'At_Home_Testing_Actigraphy_2']=      {table_id:'20010486',var:v,url:T+'/At_Home_Testing_Actigraphy.html',notes:'At Home Testing Actigraphy Week 2'};

    //AusEd Data Upload
    L[A+'v1s1_T6_Aused']=        {table_id:'20010611',var:v,url:T+'/Aused_30m.html',notes:'AusEd Shift 1'};
    L[A+'v1s2_T6_Aused']=        {table_id:'20010685',var:v,url:T+'/Aused_30m.html',notes:'AusEd Shift 2'};
    L[A+'v1s3_T6_Aused']=        {table_id:'20010686',var:v,url:T+'/Aused_30m.html',notes:'AusEd Shift 3'};
    L[A+'v2s4_T6_Aused']=        {table_id:'20010612',var:v,url:T+'/Aused_30m.html',notes:'AusEd Shift 4'};
    L[A+'v2s5_T6_Aused']=        {table_id:'20010687',var:v,url:T+'/Aused_30m.html',notes:'AusEd Shift 5'};
    L[A+'v2s6_T6_Aused']=        {table_id:'20010688',var:v,url:T+'/Aused_30m.html',notes:'AusEd Shift 6'};

    //Balance Board Measurement
      L[A+'v1s1_T5_Balance']=        {table_id:'20010765',var:v,url:T+'/File_upload.html',notes:'v1s1_T1_Balance'};
      L[A+'v1s2_T5_Balance']=        {table_id:'20010767',var:v,url:T+'/File_upload.html',notes:'v1s2_T1_Balance'};
      L[A+'v1s3_T5_Balance']=        {table_id:'20010769',var:v,url:T+'/File_upload.html',notes:'v1s3_T1_Balance'};
      L[A+'v2s4_T5_Balance']=        {table_id:'20010771',var:v,url:T+'/File_upload.html',notes:'v2s4_T1_Balance'};
      L[A+'v2s5_T5_Balance']=        {table_id:'20010773',var:v,url:T+'/File_upload.html',notes:'v2s5_T1_Balance'};
      L[A+'v2s6_T5_Balance']=        {table_id:'20010775',var:v,url:T+'/File_upload.html',notes:'v2s6_T1_Balance'};
      //KDT
      L[A+'v1s1_T1_KDT']=        {table_id:'20010613',var:v,url:T+'/File_upload.html',notes:'v1s1_T1_KDT'};
      L[A+'v1s1_T2_KDT']=        {table_id:'20010614',var:v,url:T+'/File_upload.html',notes:'v1s1_T2_KDT'};
      L[A+'v1s1_T3_KDT']=        {table_id:'20010600',var:v,url:T+'/File_upload.html',notes:'v1s1_T3_KDT'};
      L[A+'v1s1_T4_KDT']=        {table_id:'20010601',var:v,url:T+'/File_upload.html',notes:'v1s1_T4_KDT'};
      L[A+'v1s1_T5_KDT']=        {table_id:'20010602',var:v,url:T+'/File_upload.html',notes:'v1s1_T5_KDT'};
      L[A+'v1s1_T6_KDT']=        {table_id:'20010603',var:v,url:T+'/File_upload.html',notes:'v1s1_T6_KDT'};
      L[A+'v1s2_T1_KDT']=        {table_id:'20010604',var:v,url:T+'/File_upload.html',notes:'v1s2_T1_KDT'};
      L[A+'v1s2_T2_KDT']=        {table_id:'20010605',var:v,url:T+'/File_upload.html',notes:'v1s2_T2_KDT'};
      L[A+'v1s2_T3_KDT']=        {table_id:'20010551',var:v,url:T+'/File_upload.html',notes:'v1s2_T3_KDT'};
      L[A+'v1s2_T4_KDT']=        {table_id:'20010552',var:v,url:T+'/File_upload.html',notes:'v1s2_T4_KDT'};
      L[A+'v1s2_T5_KDT']=        {table_id:'20010553',var:v,url:T+'/File_upload.html',notes:'v1s2_T5_KDT'};
      L[A+'v1s2_T6_KDT']=        {table_id:'20010554',var:v,url:T+'/File_upload.html',notes:'v1s2_T6_KDT'};
      L[A+'v1s3_T1_KDT']=        {table_id:'20010521',var:v,url:T+'/File_upload.html',notes:'v1s3_T1_KDT'};
      L[A+'v1s3_T2_KDT']=        {table_id:'20010522',var:v,url:T+'/File_upload.html',notes:'v1s3_T2_KDT'};
      L[A+'v1s3_T3_KDT']=        {table_id:'20010523',var:v,url:T+'/File_upload.html',notes:'v1s3_T3_KDT'};
      L[A+'v1s3_T4_KDT']=        {table_id:'20010524',var:v,url:T+'/File_upload.html',notes:'v1s3_T4_KDT'};
      L[A+'v1s3_T5_KDT']=        {table_id:'20010516',var:v,url:T+'/File_upload.html',notes:'v1s3_T5_KDT'};
      L[A+'v1s3_T6_KDT']=        {table_id:'20010513',var:v,url:T+'/File_upload.html',notes:'v1s3_T6_KDT'};
      L[A+'v2s4_T1_KDT']=        {table_id:'20010514',var:v,url:T+'/File_upload.html',notes:'v2s4_T1_KDT'};
      L[A+'v2s4_T2_KDT']=        {table_id:'20010515',var:v,url:T+'/File_upload.html',notes:'v2s4_T2_KDT'};
      L[A+'v2s4_T3_KDT']=        {table_id:'20010510',var:v,url:T+'/File_upload.html',notes:'v2s4_T3_KDT'};
      L[A+'v2s4_T4_KDT']=        {table_id:'20010511',var:v,url:T+'/File_upload.html',notes:'v2s4_T4_KDT'};
      L[A+'v2s4_T5_KDT']=        {table_id:'20010512',var:v,url:T+'/File_upload.html',notes:'v2s4_T5_KDT'};
      L[A+'v2s4_T6_KDT']=        {table_id:'20009746',var:v,url:T+'/File_upload.html',notes:'v2s4_T6_KDT'};
      L[A+'v2s5_T1_KDT']=        {table_id:'20009747',var:v,url:T+'/File_upload.html',notes:'v2s5_T1_KDT'};
      L[A+'v2s5_T2_KDT']=        {table_id:'20009736',var:v,url:T+'/File_upload.html',notes:'v2s5_T2_KDT'};
      L[A+'v2s5_T3_KDT']=        {table_id:'20010766',var:v,url:T+'/File_upload.html',notes:'v2s5_T3_KDT'};
      L[A+'v2s5_T4_KDT']=        {table_id:'20010768',var:v,url:T+'/File_upload.html',notes:'v2s5_T4_KDT'};
      L[A+'v2s5_T5_KDT']=        {table_id:'20010770',var:v,url:T+'/File_upload.html',notes:'v2s5_T5_KDT'};
      L[A+'v2s5_T6_KDT']=        {table_id:'20010772',var:v,url:T+'/File_upload.html',notes:'v2s5_T6_KDT'};
      L[A+'v2s6_T1_KDT']=        {table_id:'20010774',var:v,url:T+'/File_upload.html',notes:'v2s6_T1_KDT'};
      L[A+'v2s6_T2_KDT']=        {table_id:'20010776',var:v,url:T+'/File_upload.html',notes:'v2s6_T2_KDT'};
      L[A+'v2s6_T3_KDT']=        {table_id:'20011313',var:v,url:T+'/File_upload.html',notes:'v2s6_T3_KDT'};
      L[A+'v2s6_T4_KDT']=        {table_id:'20011314',var:v,url:T+'/File_upload.html',notes:'v2s6_T4_KDT'};
      L[A+'v2s6_T5_KDT']=        {table_id:'20011315',var:v,url:T+'/File_upload.html',notes:'v2s6_T5_KDT'};
      L[A+'v2s6_T6_KDT']=        {table_id:'20011316',var:v,url:T+'/File_upload.html',notes:'v2s6_T6_KDT'};
    //Verbal Fluency
    L[A+'v1s1_T4_VF']=        {table_id:'20011317',var:v,url:T+'/File_upload.html',notes:'v1s1_T4_VF'};
    L[A+'v1s2_T4_VF']=        {table_id:'20011318',var:v,url:T+'/File_upload.html',notes:'v1s2_T4_VF'};
    L[A+'v1s3_T4_VF']=        {table_id:'20011319',var:v,url:T+'/File_upload.html',notes:'v1s3_T4_VF'};
    L[A+'v2s4_T4_VF']=        {table_id:'20011320',var:v,url:T+'/File_upload.html',notes:'v2s4_T4_VF'};
    L[A+'v2s5_T4_VF']=        {table_id:'20011321',var:v,url:T+'/File_upload.html',notes:'v2s5_T4_VF'};
    L[A+'v2s6_T4_VF']=        {table_id:'20011322',var:v,url:T+'/File_upload.html',notes:'v2s6_T4_VF'};
    //Paired Associated Task 1 - Encoding
    L[A+'v1s1_T6_PAT1']=        {table_id:'20011323',var:v,url:T+'/File_upload.html',notes:'v1s1_T6_PAT1'};
    L[A+'v1s2_T6_PAT1']=        {table_id:'20011324',var:v,url:T+'/File_upload.html',notes:'v1s2_T6_PAT1'};
    L[A+'v1s3_T6_PAT1']=        {table_id:'20011325',var:v,url:T+'/File_upload.html',notes:'v1s3_T6_PAT1'};
    L[A+'v2s4_T6_PAT1']=        {table_id:'20011326',var:v,url:T+'/File_upload.html',notes:'v2s4_T6_PAT1'};
    L[A+'v2s5_T6_PAT1']=        {table_id:'20011327',var:v,url:T+'/File_upload.html',notes:'v2s5_T6_PAT1'};
    L[A+'v2s6_T6_PAT1']=        {table_id:'20011328',var:v,url:T+'/File_upload.html',notes:'v2s6_T6_PAT1'};
    //Paired Associated Task 2 - Criterion
    L[A+'v1s1_T6_PAT2']=        {table_id:'20011329',var:v,url:T+'/File_upload.html',notes:'v1s1_T6_PAT2'};
    L[A+'v1s2_T6_PAT2']=        {table_id:'20011330',var:v,url:T+'/File_upload.html',notes:'v1s2_T6_PAT2'};
    L[A+'v1s3_T6_PAT2']=        {table_id:'20011331',var:v,url:T+'/File_upload.html',notes:'v1s3_T6_PAT2'};
    L[A+'v2s4_T6_PAT2']=        {table_id:'20011332',var:v,url:T+'/File_upload.html',notes:'v2s4_T6_PAT2'};
    L[A+'v2s5_T6_PAT2']=        {table_id:'20011333',var:v,url:T+'/File_upload.html',notes:'v2s5_T6_PAT2'};
    L[A+'v2s6_T6_PAT2']=        {table_id:'20011334',var:v,url:T+'/File_upload.html',notes:'v2s6_T6_PAT2'};
    //Paired Associated Task 3 - Short Delay Recall
    L[A+'v1s1_T6_PAT3']=        {table_id:'20011335',var:v,url:T+'/File_upload.html',notes:'v1s1_T6_PAT3'};
    L[A+'v1s2_T6_PAT3']=        {table_id:'20011336',var:v,url:T+'/File_upload.html',notes:'v1s2_T6_PAT3'};
    L[A+'v1s3_T6_PAT3']=        {table_id:'20011337',var:v,url:T+'/File_upload.html',notes:'v1s3_T6_PAT3'};
    L[A+'v2s4_T6_PAT3']=        {table_id:'20011338',var:v,url:T+'/File_upload.html',notes:'v2s4_T6_PAT3'};
    L[A+'v2s5_T6_PAT3']=        {table_id:'20011339',var:v,url:T+'/File_upload.html',notes:'v2s5_T6_PAT3'};
    L[A+'v2s6_T6_PAT3']=        {table_id:'20011340',var:v,url:T+'/File_upload.html',notes:'v2s6_T6_PAT3'};


    //Visit 1 Shift 1
    L[A+'v1s1_Anthro']=      {table_id:'20010487',var:v,url:T+'/Anthro.html',notes:'Visit 1 Anthropometry'};
    L[A+'v1s1_T1_KSS1']=     {table_id:'20010488',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s1_TI_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s1_TI_KSS1_QUEST']=   {table_id:'20010488',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s1_T1_PVT']=     {table_id:'20010489',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s1_T1_PVT_QUEST',task:'PVT'};
    L[A+'v1s1_T1_PVT_QUEST']=   {table_id:'20010489',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s1_T1_KSS2']=         {table_id:'20010490',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s1_T1_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s1_T1_KSS2_QUEST']=   {table_id:'20010490',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s1_T1_TOL']=        {table_id:'20010494',var:v,url:T+'/Tower_of_London.html',notes:'v1s1_T1_TOL',form_module:A+'v1s1_T1_TOL_QUEST',task:'v1s1_T1_TOL'};
    L[A+'v1s1_T1_TOL_QUEST']=  {table_id:'20010494',var:v,url:T+'/Tower_of_London.form.html'};
    L[A+'v1s1_1_back']=        {table_id:'20010480',var:v,url:T+'/N_Back.html',notes:'Screening 1-back Practice',form_module:A+'v1s1_1_back_QUEST',task:'1-back Practice'};
    L[A+'v1s1_1_back_QUEST']=  {table_id:'20010480',var:v,url:F+'/1Back_Practice.form.html'};
    L[A+'v1s1_2_back']=        {table_id:'20010481',var:v,url:T+'/N_Back.html',notes:'Screening 2-back Practice',form_module:A+'v1s1_2_back_QUEST',task:'2-back Practice'};
    L[A+'v1s1_2_back_QUEST']=  {table_id:'20010481',var:v,url:F+'/2Back_Practice.form.html'};
    L[A+'v1s1_3_back']=        {table_id:'20010482',var:v,url:T+'/N_Back.html',notes:'Screening 2-back Practice',form_module:A+'v1s1_3_back_QUEST',task:'3-back Practice'};
    L[A+'v1s1_3_back_QUEST']=  {table_id:'20010482',var:v,url:F+'/3Back_Practice.form.html'};
    L[A+'v1s1_T2_KSS1']=     {table_id:'20010495',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s1_T2_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s1_T2_KSS1_QUEST']=   {table_id:'20010495',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s1_T2_PVT']=     {table_id:'20010496',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s1_T2_PVT_QUEST',task:'PVT'};
    L[A+'v1s1_T2_PVT_QUEST']=   {table_id:'20010496',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s1_T2_KSS2']=         {table_id:'20010497',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s1_T2_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s1_T2_KSS2_QUEST']=   {table_id:'20010497',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s1_T2_1_back']=        {table_id:'20010491',var:v,url:F+'/Nback.html',notes:'v1s1_T2_1_back',form_module:A+'v1s1_T2_1_back_QUEST',task:'v1s1_T2_1-back '};
    L[A+'v1s1_T2_1_back_QUEST']=  {table_id:'20010491',var:v,url:F+'/1back.form.html'};
    L[A+'v1s1_T2_2_back']=        {table_id:'20010492',var:v,url:F+'/Nback.html',notes:'v1s1_T2_2_back',form_module:A+'v1s1_T2_2_back_QUEST',task:'v1s1_T2_2-back '};
    L[A+'v1s1_T2_2_back_QUEST']=  {table_id:'20010492',var:v,url:F+'/2back.form.html'};
    L[A+'v1s1_T2_3_back']=        {table_id:'20010493',var:v,url:F+'/Nback.html',notes:'v1s1_T2_3_back',form_module:A+'v1s1_T2_3_back_QUEST',task:'v1s1_T2_3-back '};
    L[A+'v1s1_T2_3_back_QUEST']=  {table_id:'20010493',var:v,url:F+'/3back.form.html'};
    L[A+'v1s1_T3_KSS1']=     {table_id:'20010498',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s1_T3_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s1_T3_KSS1_QUEST']=   {table_id:'20010498',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s1_T3_PVT']=     {table_id:'20010499',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s1_T3_PVT_QUEST',task:'PVT'};
    L[A+'v1s1_T3_PVT_QUEST']=   {table_id:'20010499',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s1_T3_KSS2']=         {table_id:'20010500',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s1_T3_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s1_T3_KSS2_QUEST']=   {table_id:'20010500',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s1_T3_Stroop_colour']=     {table_id:'20011106',var:v,url:F+'/Stroop.html',notes:'Stroop_colour',form_module:A+'Stroop_colour_form', task: 'Stroop colour' };
    L[A+'Stroop_colour_form']=   {table_id:'20011106',var:v,url:F+'/Stroop_colour.form.html'};
    L[A+'v1s1_T3_Stroop_text']=  {table_id:'20011105',var:v,url:F+'/Stroop.html',notes:'Stroop_text',form_module:A+'Stroop_text_form', task: 'Stroop text' };
    L[A+'Stroop_text_form']=   {table_id:'20011105',var:v,url:F+'/Stroop_text.form.html'};
    L[A+'v1s1_T4_KSS1']=     {table_id:'20010501',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s1_T4_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s1_T4_KSS1_QUEST']=   {table_id:'20010501',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s1_T4_PVT']=     {table_id:'20010502',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s1_T4_PVT_QUEST',task:'PVT'};
    L[A+'v1s1_T4_PVT_QUEST']=   {table_id:'20010502',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s1_T4_KSS2']=         {table_id:'20010503',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s1_T4_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s1_T4_KSS2_QUEST']=   {table_id:'20010503',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s1_T5_KSS1']=     {table_id:'20010504',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s1_T5_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s1_T5_KSS1_QUEST']=   {table_id:'20010504',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s1_T5_PVT']=     {table_id:'20010505',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s1_T5_PVT_QUEST',task:'PVT'};
    L[A+'v1s1_T5_PVT_QUEST']=   {table_id:'20010505',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s1_T5_KSS2']=         {table_id:'20010506',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s1_T5_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s1_T5_KSS2_QUEST']=   {table_id:'20010506',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s1_T6_KSS1']=     {table_id:'20010507',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s1_T6_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s1_T6_KSS1_QUEST']=   {table_id:'20010507',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s1_T6_PVT']=     {table_id:'20010508',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s1_T6_PVT_QUEST',task:'PVT'};
    L[A+'v1s1_T6_PVT_QUEST']=   {table_id:'20010508',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s1_T6_KSS2']=         {table_id:'20010509',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s1_T6_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s1_T6_KSS2_QUEST']=   {table_id:'20010509',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};

    //Shift 2
    L[A+'v1s2_Anthro']=      {table_id:'20010517',var:v,url:T+'/Anthro.html',notes:'Visit 2 Anthropometry'};
    L[A+'v1s2_T1_KSS1']=     {table_id:'20010518',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s2_TI_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s2_TI_KSS1_QUEST']=   {table_id:'20010518',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T1_PVT']=     {table_id:'20010519',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s2_T1_PVT_QUEST',task:'PVT'};
    L[A+'v1s2_T1_PVT_QUEST']=   {table_id:'20010519',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s2_T1_KSS2']=         {table_id:'20010520',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s2_T1_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s2_T1_KSS2_QUEST']=   {table_id:'20010520',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T2_KSS1']=     {table_id:'20010525',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s2_T2_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s2_T2_KSS1_QUEST']=   {table_id:'20010525',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T2_PVT']=     {table_id:'20010526',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s2_T2_PVT_QUEST',task:'PVT'};
    L[A+'v1s2_T2_PVT_QUEST']=   {table_id:'20010526',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s2_T2_KSS2']=         {table_id:'20010527',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s2_T2_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s2_T2_KSS2_QUEST']=   {table_id:'20010527',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T3_KSS1']=     {table_id:'20010528',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s2_T3_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s2_T3_KSS1_QUEST']=   {table_id:'20010528',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T3_PVT']=     {table_id:'20010529',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s2_T3_PVT_QUEST',task:'PVT'};
    L[A+'v1s2_T3_PVT_QUEST']=   {table_id:'20010529',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s2_T3_KSS2']=         {table_id:'20010530',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s2_T3_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s2_T3_KSS2_QUEST']=   {table_id:'20010530',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T3_Stroop_colour']=     {table_id:'20011108',var:v,url:F+'/Stroop.html',notes:'Stroop_colour',form_module:A+'Stroop_colour_form', task: 'Stroop colour' };
    L[A+'Stroop_colour_form']=   {table_id:'20011108',var:v,url:F+'/Stroop_colour.form.html'};
    L[A+'v1s2_T3_Stroop_text']=  {table_id:'20011107',var:v,url:F+'/Stroop.html',notes:'Stroop_text',form_module:A+'Stroop_text_form', task: 'Stroop text' };
    L[A+'Stroop_text_form']=   {table_id:'20011107',var:v,url:F+'/Stroop_text.form.html'};
    L[A+'v1s2_T4_KSS1']=     {table_id:'20010531',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s2_T4_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s2_T4_KSS1_QUEST']=   {table_id:'20010531',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T4_PVT']=     {table_id:'20010532',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s2_T4_PVT_QUEST',task:'PVT'};
    L[A+'v1s2_T4_PVT_QUEST']=   {table_id:'20010532',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s2_T4_KSS2']=         {table_id:'20010533',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s2_T4_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s2_T4_KSS2_QUEST']=   {table_id:'20010533',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T4_TOL']=        {table_id:'20010546',var:v,url:T+'/Tower_of_London.html',notes:'v1s2_T4_TOL',form_module:A+'v1s2_T4_TOL_QUEST',task:'v1s2_T4_TOL'};
    L[A+'v1s2_T4_TOL_QUEST']=  {table_id:'20010546',var:v,url:T+'/Tower_of_London.form.html'};
    L[A+'v1s2_T4_1_back']=        {table_id:'20010543',var:v,url:F+'/Nback.html',notes:'v1s2_T4_1_back',form_module:A+'v1s2_T4_1_back_QUEST',task:'v1s2_T4_1_back'};
    L[A+'v1s2_T4_1_back_QUEST']=  {table_id:'20010543',var:v,url:F+'/1back.form.html'};
    L[A+'v1s2_T4_2_back']=        {table_id:'20010544',var:v,url:F+'/Nback.html',notes:'v1s2_T4_2_back',form_module:A+'v1s2_T4_2_back_QUEST',task:'v1s2_T4_2_back'};
    L[A+'v1s2_T4_2_back_QUEST']=  {table_id:'20010544',var:v,url:F+'/2back.form.html'};
    L[A+'v1s2_T4_3_back']=        {table_id:'20010545',var:v,url:F+'/Nback.html',notes:'v1s2_T4_3_back',form_module:A+'v1s2_T4_3_back_QUEST',task:'v1s2_T4_3_back'};
    L[A+'v1s2_T4_3_back_QUEST']=  {table_id:'20010545',var:v,url:F+'/3back.form.html'};
    L[A+'v1s2_T5_KSS1']=     {table_id:'20010534',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s2_T5_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s2_T5_KSS1_QUEST']=   {table_id:'20010534',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T5_PVT']=     {table_id:'20010535',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s2_T5_PVT_QUEST',task:'PVT'};
    L[A+'v1s2_T5_PVT_QUEST']=   {table_id:'20010535',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s2_T5_KSS2']=         {table_id:'20010536',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s2_T5_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s2_T5_KSS2_QUEST']=   {table_id:'20010536',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T6_KSS1']=     {table_id:'20010537',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s2_T6_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s2_T6_KSS1_QUEST']=   {table_id:'20010537',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T6_PVT']=     {table_id:'20010538',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s2_T6_PVT_QUEST',task:'PVT'};
    L[A+'v1s2_T6_PVT_QUEST']=   {table_id:'20010538',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s2_T6_KSS2']=         {table_id:'20010539',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s2_T6_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s2_T6_KSS2_QUEST']=   {table_id:'20010539',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T7_KSS1']=     {table_id:'20010540',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s2_T7_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s2_T7_KSS1_QUEST']=   {table_id:'20010540',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s2_T7_PVT']=     {table_id:'20010541',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s2_T7_PVT_QUEST',task:'PVT'};
    L[A+'v1s2_T7_PVT_QUEST']=   {table_id:'20010541',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s2_T7_KSS2']=         {table_id:'20010542',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s2_T7_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s2_T7_KSS2_QUEST']=   {table_id:'20010542',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};

    //Shift 3
    L[A+'v1s3_Anthro']=      {table_id:'20010547',var:v,url:T+'/Anthro.html',notes:'Visit 3 Anthropometry'};
    L[A+'v1s3_T1_KSS1']=     {table_id:'20010548',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s3_TI_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s3_TI_KSS1_QUEST']=   {table_id:'20010548',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T1_PVT']=     {table_id:'20010549',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s3_T1_PVT_QUEST',task:'PVT'};
    L[A+'v1s3_T1_PVT_QUEST']=   {table_id:'20010549',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s3_T1_KSS2']=         {table_id:'20010550',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s3_T1_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s3_T1_KSS2_QUEST']=   {table_id:'20010550',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T2_KSS1']=     {table_id:'20010555',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s3_T2_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s3_T2_KSS1_QUEST']=   {table_id:'20010555',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T2_PVT']=     {table_id:'20010556',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s3_T2_PVT_QUEST',task:'PVT'};
    L[A+'v1s3_T2_PVT_QUEST']=   {table_id:'20010556',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s3_T2_KSS2']=         {table_id:'20010557',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s3_T2_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s3_T2_KSS2_QUEST']=   {table_id:'20010557',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T3_KSS1']=     {table_id:'20010558',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s3_T3_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s3_T3_KSS1_QUEST']=   {table_id:'20010558',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T3_PVT']=     {table_id:'20010559',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s3_T3_PVT_QUEST',task:'PVT'};
    L[A+'v1s3_T3_PVT_QUEST']=   {table_id:'20010559',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s3_T3_KSS2']=         {table_id:'20010560',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s3_T3_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s3_T3_KSS2_QUEST']=   {table_id:'20010560',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T3_Stroop_colour']=     {table_id:'20011110',var:v,url:F+'/Stroop.html',notes:'Stroop_colour',form_module:A+'Stroop_colour_form', task: 'Stroop colour' };
    L[A+'Stroop_colour_form']=   {table_id:'20011110',var:v,url:F+'/Stroop_colour.form.html'};
    L[A+'v1s3_T3_Stroop_text']=  {table_id:'20011109',var:v,url:F+'/Stroop.html',notes:'Stroop_text',form_module:A+'Stroop_text_form', task: 'Stroop text' };
    L[A+'Stroop_text_form']=   {table_id:'20011109',var:v,url:F+'/Stroop_text.form.html'};
    L[A+'v1s3_T4_KSS1']=     {table_id:'20010561',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s3_T4_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s3_T4_KSS1_QUEST']=   {table_id:'20010561',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T4_PVT']=     {table_id:'20010562',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s3_T4_PVT_QUEST',task:'PVT'};
    L[A+'v1s3_T4_PVT_QUEST']=   {table_id:'20010562',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s3_T4_KSS2']=         {table_id:'20010563',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s3_T4_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s3_T4_KSS2_QUEST']=   {table_id:'20010563',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T4_TOL']=        {table_id:'20010576',var:v,url:T+'/Tower_of_London.html',notes:'v1s3_T4_TOL',form_module:A+'v1s3_T4_TOL_QUEST',task:'v1s3_T4_TOL'};
    L[A+'v1s3_T4_TOL_QUEST']=  {table_id:'20010576',var:v,url:T+'/Tower_of_London.form.html'};
    L[A+'v1s3_T4_1_back']=        {table_id:'20010573',var:v,url:T+'/N_Back.html',notes:'v1s3_T4_1_back',form_module:A+'v1s3_T4_1_back_QUEST',task:'v1s3_T4_1_back'};
    L[A+'v1s3_T4_1_back_QUEST']=  {table_id:'20010573',var:v,url:T+'/1back.form.html'};
    L[A+'v1s3_T4_2_back']=        {table_id:'20010574',var:v,url:T+'/N_Back.html',notes:'v1s3_T4_2_back',form_module:A+'v1s3_T4_2_back_QUEST',task:'v1s3_T4_2_back'};
    L[A+'v1s3_T4_2_back_QUEST']=  {table_id:'20010574',var:v,url:T+'/2back.form.html'};
    L[A+'v1s3_T4_3_back']=        {table_id:'20010575',var:v,url:T+'/N_Back.html',notes:'v1s3_T4_3_back',form_module:A+'v1s3_T4_3_back_QUEST',task:'v1s3_T4_3_back'};
    L[A+'v1s3_T4_3_back_QUEST']=  {table_id:'20010575',var:v,url:T+'/3back.form.html'};
    L[A+'v1s3_T5_KSS1']=     {table_id:'20010564',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s3_T5_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s3_T5_KSS1_QUEST']=   {table_id:'20010564',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T5_PVT']=     {table_id:'20010565',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s3_T5_PVT_QUEST',task:'PVT'};
    L[A+'v1s3_T5_PVT_QUEST']=   {table_id:'20010565',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s3_T5_KSS2']=         {table_id:'20010566',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s3_T5_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s3_T5_KSS2_QUEST']=   {table_id:'20010566',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T6_KSS1']=     {table_id:'20010567',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s3_T6_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s3_T6_KSS1_QUEST']=   {table_id:'20010567',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T6_PVT']=     {table_id:'20010568',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s3_T6_PVT_QUEST',task:'PVT'};
    L[A+'v1s3_T6_PVT_QUEST']=   {table_id:'20010568',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s3_T6_KSS2']=         {table_id:'20010569',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s3_T6_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s3_T6_KSS2_QUEST']=   {table_id:'20010569',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T7_KSS1']=     {table_id:'20010570',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s3_T7_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v1s3_T7_KSS1_QUEST']=   {table_id:'20010570',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v1s3_T7_PVT']=     {table_id:'20010571',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v1s3_T7_PVT_QUEST',task:'PVT'};
    L[A+'v1s3_T7_PVT_QUEST']=   {table_id:'20010571',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v1s3_T7_KSS2']=         {table_id:'20010572',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v1s3_T7_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v1s3_T7_KSS2_QUEST']=   {table_id:'20010572',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};

    //Visit 2 Shift 4
    L[A+'v2s4_Anthro']=      {table_id:'20010577',var:v,url:T+'/Anthro.html',notes:'Visit 4 Anthropometry'};
    L[A+'v2s4_T1_KSS1']=     {table_id:'20010578',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s4_TI_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s4_TI_KSS1_QUEST']=   {table_id:'20010578',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s4_T1_PVT']=     {table_id:'20010579',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s4_T1_PVT_QUEST',task:'PVT'};
    L[A+'v2s4_T1_PVT_QUEST']=   {table_id:'20010579',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s4_T1_KSS2']=         {table_id:'20010580',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s4_T1_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s4_T1_KSS2_QUEST']=   {table_id:'20010580',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s4_T1_TOL']=        {table_id:'20010584',var:v,url:T+'/Tower_of_London.html',notes:'v2s4_T1_TOL',form_module:A+'v2s4_T1_TOL_QUEST',task:'v2s4_T1_TOL'};
    L[A+'v2s4_T1_TOL_QUEST']=  {table_id:'20010584',var:v,url:T+'/Tower_of_London.form.html'};
    L[A+'v2s4_1_back']=        {table_id:'20010777',var:v,url:T+'/N_Back.html',notes:'Screening 1-back Practice',form_module:A+'v2s4_1_back_QUEST',task:'1-back Practice'};
    L[A+'v2s4_1_back_QUEST']=  {table_id:'20010777',var:v,url:T+'/1back_Practice.form.html'};
    L[A+'v2s4_2_back']=        {table_id:'20010778',var:v,url:T+'/N_Back.html',notes:'Screening 2-back Practice',form_module:A+'v2s4_2_back_QUEST',task:'2-back Practice'};
    L[A+'v2s4_2_back_QUEST']=  {table_id:'20010778',var:v,url:T+'/2Back_Practice.form.html'};
    L[A+'v2s4_3_back']=        {table_id:'20010779',var:v,url:T+'/N_Back.html',notes:'Screening 2-back Practice',form_module:A+'v2s4_3_back_QUEST',task:'3-back Practice'};
    L[A+'v2s4_3_back_QUEST']=  {table_id:'20010779',var:v,url:T+'/3Back_Practice.form.html'};
    L[A+'v2s4_T2_KSS1']=     {table_id:'20010585',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s4_T2_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s4_T2_KSS1_QUEST']=   {table_id:'20010585',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s4_T2_PVT']=     {table_id:'20010586',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s4_T2_PVT_QUEST',task:'PVT'};
    L[A+'v2s4_T2_PVT_QUEST']=   {table_id:'20010586',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s4_T2_KSS2']=         {table_id:'20010587',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s4_T2_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s4_T2_KSS2_QUEST']=   {table_id:'20010587',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s4_T2_1_back']=        {table_id:'20010581',var:v,url:T+'/N_Back.html',notes:'v2s4_T2_1_back',form_module:A+'v2s4_T2_1_back_QUEST',task:'v2s4_T2_1_back'};
    L[A+'v2s4_T2_1_back_QUEST']=  {table_id:'20010581',var:v,url:T+'/1back.form.html'};
    L[A+'v2s4_T2_2_back']=        {table_id:'20010582',var:v,url:T+'/N_Back.html',notes:'v2s4_T2_2_back',form_module:A+'v2s4_T2_2_back_QUEST',task:'v2s4_T2_2_back'};
    L[A+'v2s4_T2_2_back_QUEST']=  {table_id:'20010582',var:v,url:T+'/2back.form.html'};
    L[A+'v2s4_T2_3_back']=        {table_id:'20010583',var:v,url:T+'/N_Back.html',notes:'v2s4_T2_3_back',form_module:A+'v2s4_T2_3_back_QUEST',task:'v2s4_T2_3_back'};
    L[A+'v2s4_T2_3_back_QUEST']=  {table_id:'20010583',var:v,url:T+'/3back.form.html'};
    L[A+'v2s4_T3_KSS1']=     {table_id:'20010588',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v1s3_T3_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s4_T3_KSS1_QUEST']=   {table_id:'20010588',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s4_T3_PVT']=     {table_id:'20010589',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s4_T3_PVT_QUEST',task:'PVT'};
    L[A+'v2s4_T3_PVT_QUEST']=   {table_id:'20010589',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s4_T3_KSS2']=         {table_id:'20010590',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s4_T3_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s4_T3_KSS2_QUEST']=   {table_id:'20010590',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s4_T3_Stroop_colour']=     {table_id:'20011112',var:v,url:F+'/Stroop.html',notes:'Stroop_colour',form_module:A+'Stroop_colour_form', task: 'Stroop colour' };
    L[A+'Stroop_colour_form']=   {table_id:'20011112',var:v,url:F+'/Stroop_colour.form.html'};
    L[A+'v2s4_T3_Stroop_text']=  {table_id:'20011111',var:v,url:F+'/Stroop.html',notes:'Stroop_text',form_module:A+'Stroop_text_form', task: 'Stroop text' };
    L[A+'Stroop_text_form']=   {table_id:'20011111',var:v,url:F+'/Stroop_text.form.html'};
    L[A+'v2s4_T4_KSS1']=     {table_id:'20010591',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s4_T4_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s4_T4_KSS1_QUEST']=   {table_id:'20010591',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s4_T4_PVT']=     {table_id:'20010592',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s4_T4_PVT_QUEST',task:'PVT'};
    L[A+'v2s4_T4_PVT_QUEST']=   {table_id:'20010592',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s4_T4_KSS2']=         {table_id:'20010593',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s4_T4_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s4_T4_KSS2_QUEST']=   {table_id:'20010593',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s4_T4_TOL']=        {table_id:'20010606',var:v,url:T+'/Tower_of_London.html',notes:'v2s4_T4_TOL',form_module:A+'v2s4_T4_TOL_QUEST',task:'v2s4_T4_TOL'};
    L[A+'v2s4_T4_TOL_QUEST']=  {table_id:'20010606',var:v,url:T+'/Tower_of_London.form.html'};
    L[A+'v2s4_T5_KSS1']=     {table_id:'20010594',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s4_T5_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s4_T5_KSS1_QUEST']=   {table_id:'20010594',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s4_T5_PVT']=     {table_id:'20010595',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s4_T5_PVT_QUEST',task:'PVT'};
    L[A+'v2s4_T5_PVT_QUEST']=   {table_id:'20010595',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s4_T5_KSS2']=         {table_id:'20010596',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s4_T5_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s4_T5_KSS2_QUEST']=   {table_id:'20010596',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s4_T6_KSS1']=     {table_id:'20010597',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s4_T6_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s4_T6_KSS1_QUEST']=   {table_id:'20010597',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s4_T6_PVT']=     {table_id:'20010598',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s4_T6_PVT_QUEST',task:'PVT'};
    L[A+'v2s4_T6_PVT_QUEST']=   {table_id:'20010598',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s4_T6_KSS2']=         {table_id:'20010599',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s4_T6_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s4_T6_KSS2_QUEST']=   {table_id:'20010599',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};

    //Visit 2 Shift 5
    L[A+'v2s5_Anthro']=      {table_id:'20010607',var:v,url:T+'/Anthro.html',notes:'Visit 5 Anthropometry'};
    L[A+'v2s5_T1_KSS1']=     {table_id:'20010608',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s5_TI_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s5_TI_KSS1_QUEST']=   {table_id:'20010608',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T1_PVT']=     {table_id:'20010609',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s5_T1_PVT_QUEST',task:'PVT'};
    L[A+'v2s5_T1_PVT_QUEST']=   {table_id:'20010609',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s5_T1_KSS2']=         {table_id:'20010610',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s5_T1_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s5_T1_KSS2_QUEST']=   {table_id:'20010610',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T2_KSS1']=     {table_id:'20010615',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s5_T2_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s5_T2_KSS1_QUEST']=   {table_id:'20010615',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T2_PVT']=     {table_id:'20010616',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s5_T2_PVT_QUEST',task:'PVT'};
    L[A+'v2s5_T2_PVT_QUEST']=   {table_id:'20010616',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s5_T2_KSS2']=         {table_id:'20010617',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s5_T2_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s5_T2_KSS2_QUEST']=   {table_id:'20010617',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T3_KSS1']=     {table_id:'20010618',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s5_T3_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s5_T3_KSS1_QUEST']=   {table_id:'20010618',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T3_PVT']=     {table_id:'20010619',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s5_T3_PVT_QUEST',task:'PVT'};
    L[A+'v2s5_T3_PVT_QUEST']=   {table_id:'20010619',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s5_T3_KSS2']=         {table_id:'20010620',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s5_T3_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s5_T3_KSS2_QUEST']=   {table_id:'20010620',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T3_Stroop_colour']=     {table_id:'20011114',var:v,url:F+'/Stroop.html',notes:'Stroop_colour',form_module:A+'Stroop_colour_form', task: 'Stroop colour' };
    L[A+'Stroop_colour_form']=   {table_id:'20011114',var:v,url:F+'/Stroop_colour.form.html'};
    L[A+'v2s5_T3_Stroop_text']=  {table_id:'20011113',var:v,url:F+'/Stroop.html',notes:'Stroop_text',form_module:A+'Stroop_text_form', task: 'Stroop text' };
    L[A+'Stroop_text_form']=   {table_id:'20011113',var:v,url:F+'/Stroop_text.form.html'};
    L[A+'v2s5_T4_KSS1']=     {table_id:'20010621',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s5_T4_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s5_T4_KSS1_QUEST']=   {table_id:'20010621',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T4_PVT']=     {table_id:'20010622',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s5_T4_PVT_QUEST',task:'PVT'};
    L[A+'v2s5_T4_PVT_QUEST']=   {table_id:'20010622',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s5_T4_KSS2']=         {table_id:'20010623',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s5_T4_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s5_T4_KSS2_QUEST']=   {table_id:'20010623',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T4_TOL']=        {table_id:'20010636',var:v,url:T+'/Tower_of_London.html',notes:'v2s5_T4_TOL',form_module:A+'v2s5_T4_TOL_QUEST',task:'Tower of London'};
    L[A+'v2s5_T4_TOL_QUEST']=  {table_id:'20010636',var:v,url:T+'/Tower_of_London.form.html'};
    L[A+'v2s5_T4_1_back']=        {table_id:'20010633',var:v,url:T+'/N_Back.html',notes:'v2s5_T4_1_back',form_module:A+'v2s5_T4_1_back_QUEST',task:'v2s5_T4_1_back'};
    L[A+'v2s5_T4_1_back_QUEST']=  {table_id:'20010633',var:v,url:T+'/1back.form.html'};
    L[A+'v2s5_T4_2_back']=        {table_id:'20010634',var:v,url:T+'/N_Back.html',notes:'v2s5_T4_2_back',form_module:A+'v2s5_T4_2_back_QUEST',task:'v2s5_T4_2_back'};
    L[A+'v2s5_T4_2_back_QUEST']=  {table_id:'20010634',var:v,url:T+'/2back.form.html'};
    L[A+'v2s5_T4_3_back']=        {table_id:'20010635',var:v,url:T+'/N_Back.html',notes:'v2s5_T4_3_back',form_module:A+'v2s5_T4_3_back_QUEST',task:'v2s5_T4_3_back'};
    L[A+'v2s5_T4_3_back_QUEST']=  {table_id:'20010635',var:v,url:T+'/3back.form.html'};
    L[A+'v2s5_T5_KSS1']=     {table_id:'20010624',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s5_T5_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s5_T5_KSS1_QUEST']=   {table_id:'20010624',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T5_PVT']=     {table_id:'20010625',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s5_T5_PVT_QUEST',task:'PVT'};
    L[A+'v2s5_T5_PVT_QUEST']=   {table_id:'20010625',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s5_T5_KSS2']=         {table_id:'20010626',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s5_T5_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s5_T5_KSS2_QUEST']=   {table_id:'20010626',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T6_KSS1']=     {table_id:'20010627',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s5_T6_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s5_T6_KSS1_QUEST']=   {table_id:'20010627',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T6_PVT']=     {table_id:'20010628',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s5_T6_PVT_QUEST',task:'PVT'};
    L[A+'v2s5_T6_PVT_QUEST']=   {table_id:'20010628',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s5_T6_KSS2']=         {table_id:'20010629',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s5_T6_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s5_T6_KSS2_QUEST']=   {table_id:'20010629',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T7_KSS1']=     {table_id:'20010630',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s5_T7_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s5_T7_KSS1_QUEST']=   {table_id:'20010630',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s5_T7_PVT']=     {table_id:'20010631',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s5_T7_PVT_QUEST',task:'PVT'};
    L[A+'v2s5_T7_PVT_QUEST']=   {table_id:'20010631',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s5_T7_KSS2']=         {table_id:'20010632',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s5_T7_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s5_T7_KSS2_QUEST']=   {table_id:'20010632',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};

    //Visit 2 Shift 6
    L[A+'v2s6_Anthro']=      {table_id:'20010637',var:v,url:T+'/Anthro.html',notes:'Visit 6 Anthropometry'};
    L[A+'v2s6_T1_KSS1']=     {table_id:'20010638',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s6_TI_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s6_TI_KSS1_QUEST']=   {table_id:'20010638',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T1_PVT']=     {table_id:'20010639',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s6_T1_PVT_QUEST',task:'PVT'};
    L[A+'v2s6_T1_PVT_QUEST']=   {table_id:'20010639',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s6_T1_KSS2']=         {table_id:'20010640',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s6_T1_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s6_T1_KSS2_QUEST']=   {table_id:'20010640',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T2_KSS1']=     {table_id:'20010645',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s6_T2_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s6_T2_KSS1_QUEST']=   {table_id:'20010645',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T2_PVT']=     {table_id:'20010646',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s6_T2_PVT_QUEST',task:'PVT'};
    L[A+'v2s6_T2_PVT_QUEST']=   {table_id:'20010646',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s6_T2_KSS2']=         {table_id:'20010647',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s6_T2_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s6_T2_KSS2_QUEST']=   {table_id:'20010647',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T3_KSS1']=     {table_id:'20010648',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s6_T3_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s6_T3_KSS1_QUEST']=   {table_id:'20010648',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T3_PVT']=     {table_id:'20010649',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s6_T3_PVT_QUEST',task:'PVT'};
    L[A+'v2s6_T3_PVT_QUEST']=   {table_id:'20010649',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s6_T3_KSS2']=         {table_id:'20010650',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s6_T3_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s6_T3_KSS2_QUEST']=   {table_id:'20010650',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T3_Stroop_colour']=     {table_id:'20011116',var:v,url:F+'/Stroop.html',notes:'Stroop_colour',form_module:A+'Stroop_colour_form', task: 'Stroop colour' };
    L[A+'Stroop_colour_form']=   {table_id:'20011116',var:v,url:F+'/Stroop_colour.form.html'};
    L[A+'v2s6_T3_Stroop_text']=  {table_id:'20011115',var:v,url:F+'/Stroop.html',notes:'Stroop_text',form_module:A+'Stroop_text_form', task: 'Stroop text' };
    L[A+'Stroop_text_form']=   {table_id:'20011115',var:v,url:F+'/Stroop_text.form.html'};
    L[A+'v2s6_T4_KSS1']=     {table_id:'20010651',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s6_T4_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s6_T4_KSS1_QUEST']=   {table_id:'20010651',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T4_PVT']=     {table_id:'20010652',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s6_T4_PVT_QUEST',task:'PVT'};
    L[A+'v2s6_T4_PVT_QUEST']=   {table_id:'20010652',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s6_T4_KSS2']=         {table_id:'20010653',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s6_T4_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s6_T4_KSS2_QUEST']=   {table_id:'20010653',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T4_TOL']=        {table_id:'20010666',var:v,url:T+'/Tower_of_London.html',notes:'v2s6_T4_TOL',form_module:A+'v2s6_T4_TOL_QUEST',task:'v2s6_T4_TOL'};
    L[A+'v2s6_T4_TOL_QUEST']=  {table_id:'20010666',var:v,url:T+'/Tower_of_London.form.html'};
    L[A+'v2s6_T4_1_back']=        {table_id:'20010663',var:v,url:T+'/N_Back.html',notes:'v2s6_T4_1_back',form_module:A+'v2s6_T4_1_back_QUEST',task:'v2s6_T4_1_back'};
    L[A+'v2s6_T4_1_back_QUEST']=  {table_id:'20010663',var:v,url:T+'/1back.form.html'};
    L[A+'v2s6_T4_2_back']=        {table_id:'20010664',var:v,url:T+'/N_Back.html',notes:'v2s6_T4_2_back',form_module:A+'v2s6_T4_2_back_QUEST',task:'v2s6_T4_2_back'};
    L[A+'v2s6_T4_2_back_QUEST']=  {table_id:'20010664',var:v,url:T+'/2back.form.html'};
    L[A+'v2s6_T4_3_back']=        {table_id:'20010665',var:v,url:T+'/N_Back.html',notes:'v2s6_T4_3_back',form_module:A+'v2s6_T4_3_back_QUEST',task:'v2s6_T4_3_back'};
    L[A+'v2s6_T4_3_back_QUEST']=  {table_id:'20010665',var:v,url:T+'/3back.form.html'};
    L[A+'v2s6_T5_KSS1']=     {table_id:'20010654',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s6_T5_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s6_T5_KSS1_QUEST']=   {table_id:'20010654',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T5_PVT']=     {table_id:'20010655',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s5_T5_PVT_QUEST',task:'PVT'};
    L[A+'v2s6_T5_PVT_QUEST']=   {table_id:'20010655',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s6_T5_KSS2']=         {table_id:'20010656',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s6_T5_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s6_T5_KSS2_QUEST']=   {table_id:'20010656',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T6_KSS1']=     {table_id:'20010657',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s6_T6_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s6_T6_KSS1_QUEST']=   {table_id:'20010657',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T6_PVT']=     {table_id:'20010658',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s6_T6_PVT_QUEST',task:'PVT'};
    L[A+'v2s6_T6_PVT_QUEST']=   {table_id:'20010658',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s6_T6_KSS2']=         {table_id:'20010659',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s6_T6_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s6_T6_KSS2_QUEST']=   {table_id:'20010659',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T7_KSS1']=     {table_id:'20010660',var:v,url:T+'/kss.html',notes:'KSS before PVT',form_module:A+'v2s6_T7_KSS1_QUEST',task:'KSS before PVT'};
    L[A+'v2s6_T7_KSS1_QUEST']=   {table_id:'20010660',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};
    L[A+'v2s6_T7_PVT']=     {table_id:'20010661',var:v,url:T+'/PVT.html',notes:'PVT',form_module:A+'v2s6_T7_PVT_QUEST',task:'PVT'};
    L[A+'v2s6_T7_PVT_QUEST']=   {table_id:'20010661',var:v,url:Q+'/PVT.FORM.html'};
    L[A+'v2s6_T7_KSS2']=         {table_id:'20010662',var:v,url:T+'/kss.html',notes:'KSS after PVT',form_module:A+'v2s6_T7_KSS2_QUEST', task: 'KSS after PVT' };
    L[A+'v2s6_T7_KSS2_QUEST']=   {table_id:'20010662',var:v,url:Q+'/karolinska_sleepiness_scale.form.html'};

    //---------------------------------------------
    v.quest_list={


            "Visit 1 Shift 1 Trial 1 (19:00 PM)":[
            A+'v1s1_T1_KSS1',
            A+'v1s1_T1_KSS2',
            A+'v1s1_T1_TOL',
            A+'v1s1_1_back',
            A+'v1s1_2_back',
            A+'v1s1_3_back',
            ],
            "Visit 1 Shift 1 Trial 2 (21:00 PM)":[
            A+'v1s1_T2_KSS1',
            A+'v1s1_T2_KSS2',
            A+'v1s1_T2_1_back',
            A+'v1s1_T2_2_back',
            A+'v1s1_T2_3_back',
            ],
            "Visit 1 Shift 1 Trial 3 (23:00 PM)":[
            A+'v1s1_T3_KSS1',
            A+'v1s1_T3_KSS2',
            ],
            "Visit 1 Shift 1 Trial 4 (01:00 AM)":[
            A+'v1s1_T4_KSS1',
            A+'v1s1_T4_KSS2',
            //A+'v1s1_T4_TOL',
            ],
            "Visit 1 Shift 1 Trial 5 (03:00 AM)":[
            A+'v1s1_T5_KSS1',
            A+'v1s1_T5_KSS2',
            ],
            "Visit 1 Shift 1 Trial 6 (05:00 AM)":[
            A+'v1s1_T6_KSS1',
            A+'v1s1_T6_PVT',
            A+'v1s1_T6_KSS2',
            ],
            "Visit 1 Shift 2 Trial 1 (19:00 PM)":[
            A+'v1s2_T1_KSS1',
            A+'v1s2_T1_KSS2',
            ],
            "Visit 1 Shift 2 Trial 2 (21:00 PM)":[
            A+'v1s2_T2_KSS1',
            A+'v1s2_T2_KSS2',
            ],
            "Visit 1 Shift 2 Trial 3 (23:00 PM)":[
            A+'v1s2_T3_KSS1',
            A+'v1s2_T3_KSS2',
            ],
            "Visit 1 Shift 2 Trial 4 (01:00 AM)":[
            A+'v1s2_T4_KSS1',
            A+'v1s2_T4_KSS2',
            A+'v1s2_T4_TOL',
            A+'v1s2_T4_1_back',
            A+'v1s2_T4_2_back',
            A+'v1s2_T4_3_back',
            ],
            "Visit 1 Shift 2 Trial 5 (03:00 AM)":[
            A+'v1s2_T5_KSS1',
            A+'v1s2_T5_KSS2',
            ],
            "Visit 1 Shift 2 Trial 6 (05:00 AM)":[
            A+'v1s2_T6_KSS1',
            A+'v1s2_T6_KSS2',
            ],
            "Visit 1 Shift 2 Trial 7 (07:00 AM)":[
            A+'v1s2_T7_KSS1',
            A+'v1s2_T7_KSS2',
            ],
            "Visit 1 Shift 3 Trial 1 (19:00 PM)":[
            A+'v1s3_T1_KSS1',
            A+'v1s3_T1_KSS2',
            ],
            "Visit 1 Shift 3 Trial 2 (21:00 PM)":[
            A+'v1s3_T2_KSS1',
            A+'v1s3_T2_KSS2',
            ],
            "Visit 1 Shift 3 Trial 3 (23:00 PM)":[
            A+'v1s3_T3_KSS1',
            A+'v1s3_T3_KSS2',
            ],
            "Visit 1 Shift 3 Trial 4 (01:00 AM)":[
            A+'v1s3_T4_KSS1',
            A+'v1s3_T4_KSS2',
            A+'v1s3_T4_TOL',
            A+'v1s3_T4_1_back',
            A+'v1s3_T4_2_back',
            A+'v1s3_T4_3_back',
            ],
            "Visit 1 Shift 3 Trial 5 (03:00 AM)":[
            A+'v1s3_T5_KSS1',
            A+'v1s3_T5_KSS2',
            ],
            "Visit 1 Shift 3 Trial 6 (05:00 AM)":[
            A+'v1s3_T6_KSS1',
            A+'v1s3_T6_KSS2',
            ],
            "Visit 1 Shift 3 Trial 7 (07:00 AM)":[
            A+'v1s3_T7_KSS1',
            A+'v1s3_T7_KSS2',
            ],
            "Visit 2 Shift 4 Trial 1 (19:00 PM)":[
            A+'v2s4_T1_KSS1',
            A+'v2s4_T1_KSS2',
            A+'v2s4_T1_TOL',
            A+'v2s4_1_back',
            A+'v2s4_2_back',
            A+'v2s4_3_back',
            ],
            "Visit 2 Shift 4 Trial 2 (21:00 PM)":[
            A+'v2s4_T2_KSS1',
            A+'v2s4_T2_KSS2',
            A+'v2s4_T2_1_back',
            A+'v2s4_T2_2_back',
            A+'v2s4_T2_3_back',
            ],
            "Visit 2 Shift 4 Trial 3 (23:00 PM)":[
            A+'v2s4_T3_KSS1',
            A+'v2s4_T3_KSS2',
            ],
            "Visit 2 Shift 4 Trial 4 (01:00 AM)":[
            A+'v2s4_T4_KSS1',
            A+'v2s4_T4_KSS2',
            A+'v2s4_T4_TOL',
            ],
            "Visit 2 Shift 4 Trial 5 (03:00 AM)":[
            A+'v2s4_T5_KSS1',
            A+'v2s4_T5_KSS2',
            ],
            "Visit 2 Shift 4 Trial 6 (05:00 AM)":[
            A+'v2s4_T6_KSS1',
            A+'v2s4_T6_KSS2',
            ],
            "Visit 2 Shift 5 Trial 1 (19:00 PM)":[
            A+'v2s5_T1_KSS1',
            A+'v2s5_T1_KSS2',
            ],
            "Visit 2 Shift 5 Trial 2 (21:00 PM)":[
            A+'v2s5_T2_KSS1',
            A+'v2s5_T2_KSS2',
            ],
            "Visit 2 Shift 5 Trial 3 (23:00 PM)":[
            A+'v2s5_T3_KSS1',
            A+'v2s5_T3_KSS2',
            ],
            "Visit 2 Shift 5 Trial 4 (01:00 AM)":[
            A+'v2s5_T4_KSS1',
            A+'v2s5_T4_KSS2',
            A+'v2s5_T4_TOL',
            A+'v2s5_T4_1_back',
            A+'v2s5_T4_2_back',
            A+'v2s5_T4_3_back',
            ],
            "Visit 2 Shift 5 Trial 5 (03:00 AM)":[
            A+'v2s5_T5_KSS1',
            A+'v2s5_T5_KSS2',
            ],
            "Visit 2 Shift 5 Trial 6 (05:00 AM)":[
            A+'v2s5_T6_KSS1',
            A+'v2s5_T6_KSS2',
            ],
            "Visit 2 Shift 5 Trial 7 (07:00 AM)":[
            A+'v2s5_T7_KSS1',
            A+'v2s5_T7_KSS2',
            ],
            "Visit 2 Shift 6 Trial 1 (19:00 PM)":[
            A+'v2s6_T1_KSS1',
            A+'v2s6_T1_KSS2',
            ],
            "Visit 2 Shift 6 Trial 2 (21:00 PM)":[
            A+'v2s6_T2_KSS1',
            A+'v2s6_T2_KSS2',
            ],
            "Visit 2 Shift 6 Trial 3 (23:00 PM)":[
            A+'v2s6_T3_KSS1',
            A+'v2s6_T3_KSS2',
            ],
            "Visit 2 Shift 6 Trial 4 (01:00 AM)":[
            A+'v2s6_T4_KSS1',
            A+'v2s6_T4_KSS2',
            A+'v2s6_T4_TOL',
            A+'v2s6_T4_1_back',
            A+'v2s6_T4_2_back',
            A+'v2s6_T4_3_back',
            ],
            "Visit 2 Shift 6 Trial 5 (03:00 AM)":[
            A+'v2s6_T5_KSS1',
            A+'v2s6_T5_KSS2',
            ],
            "Visit 2 Shift 6 Trial 6 (05:00 AM)":[
            A+'v2s6_T6_KSS1',
            A+'v2s6_T6_KSS2',
            ],
            "Visit 2 Shift 6 Trial 7 (07:00 AM)":[
            A+'v2s6_T7_KSS1',
            A+'v2s6_T7_KSS2',
        ],
    };
    //----------------------------------
}
main__ID();
