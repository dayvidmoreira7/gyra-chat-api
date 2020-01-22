# gyra-chat-api
API do desafio Gyra+

### Rotas                
+ /session
    + /entry [ POST, { username } ] - Entrar na sala
    + /exit [ POST, { username } ] - Sair da sala
+ /room
    * / [ GET ] - Recuperar mensagens da sala
    * /message [ POST { senderName, text } ] - Enviar mensagem na sala
    
### Necessária conexão via socket.io no Front
