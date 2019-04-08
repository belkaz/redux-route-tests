let initState = {
    curUser : {
        id: -1,
        nam : ''
    },
    curScreen : 'login',
    tasks : [
        {
            "WHO" : "IvanovVV",
            "REASON" : "2019-04-05_123123",
            "TYPE" : "TRANSFER",
            "FROM" : "1",
            "TO" : "2",
            "START" : "2019-04-05_10",
            "END" : "2019-04-05_22",
            "TASK_CLOSE" : "-",
            "IND" : 0       
        },
        {
            "WHO" : "IvanovVV",
            "REASON" : "2019-04-05_3213123",
            "TYPE" : "TRANSFER",
            "FROM" : "2",
            "TO" : "1",
            "START" : "2019-04-12_10",
            "END" : "2019-04-12_22" ,
            "TASK_CLOSE" : "-"  ,
            "IND" : 1          
        },
        {
            "WHO" : "IvanovVV",
            "REASON" : "2019-04-05_3213123",
            "TYPE" : "TEMP ADD RIGHTS",
            "UNIT" : "2",           
            "END" : "2019-04-12_22", 
            "TASK_CLOSE" : "-"  ,  
            "IND" : 2        
        },
        {
            "WHO" : "IvanovVV",
            "REASON" : "2019-04-05_3213123",
            "TYPE" : "CLOSE",                      
            "CLOSE_DATE" : "2019-04-12_22",
            "TASK_CLOSE" : "-" ,
            "IND" : 3           
        }        
    ]
}

export default initState