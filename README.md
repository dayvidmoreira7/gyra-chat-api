# gyra-chat-api
API do desafio Gyra+

###Rotas                
+ /session
    + /entry [ POST, { username } ]
    + /exit [ POST, { username } ]
+ /room
    * / [ GET ]
    * /message [ POST { senderName, text } ]
