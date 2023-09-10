import React, { useState, useEffect } from 'react'

import Layout from "../layout/Layout"
import { useParams } from 'react-router'
import MessageSidebar from '../components/Chat/ChatSidebar'
import { useSelector } from 'react-redux'
import { getConversations, getSingleConversation } from '../services/conversationService'
import ChatBox from '../components/Chat/Chat'
export default function Chat() {
  const userData = useSelector((state)=> state.user.value);
  const {chatId}  = useParams();
  const [selectedChat, setSelectedChat] = useState(-1);
  const [ws, setWs] = useState(null);
  const [chatUsers, setUsers] = useState({});
  const [typedMessage, setTypedMessage] = useState("");
  const [allMessages, setAllMessage] = useState([]);

  const [databaseChatUsers, setDatabaseChatUsers] = useState();
  useEffect(() => {
    console.log("sockettttsss")
    connectToWs();
    findOflineChats();
  }, [])
  async function getOurConversation(chatId){
    const res = await getSingleConversation(chatId);
    console.log(res);
    if(res.status===201){
      const conv = [];
      res.data.conversations.forEach((chat)=>{
        if(chat.sender===chatId) conv.push({...chat, isOur: false});
        else conv.push({...chat, isOur: true})
      })
      setAllMessage(conv);
    }
    else {
      setAllMessage([]);
    }
  }
  useEffect(()=>{
    if(chatId)
    getOurConversation(chatId);
    
  }, [chatId])
  function connectToWs(){
    const ws = new WebSocket(`ws://localhost:8000?tkn=${localStorage.getItem('token')}`, localStorage.getItem('token'))
    setWs(ws);
    ws.addEventListener('message', handleNewMessage);
    ws.addEventListener('close', ()=> {
      setTimeout(()=>{
        console.log('Disconnected');
        connectToWs();
      }, 1000);
    })
  }
  function showOnlineUsers(peopleArray) {
    const people = chatUsers ? chatUsers : {};
    peopleArray.forEach(({ userId, username }) => {
      people[userId] = {name: username, online : true};
    })
    setUsers(people);
  }
  async function findOflineChats(){
    const res = await getConversations();
    console.log({res});
    setDatabaseChatUsers(res.data.conversations);
    const users = chatUsers;
    Object.keys(res.data.conversations).map((id,index)=>{
      console.log(id, users[id]);
      if(!users[id]) users[id] = res.data.conversations[id];
    })
    setUsers(users);
  }
  function handleNewMessage(event) {
    const messageData = JSON.parse(event.data);
    if ('online' in messageData) {
      showOnlineUsers(messageData.online);
    }
    else {
      if(messageData.sender!==userData._id){
        const exists = allMessages.some(obj => {
      
          return obj._id === messageData._id;
        });
        if(!exists){

          setAllMessage(prev => [...prev, {isOur : false, text: messageData.text, _id: messageData._id}])
          console.log(messageData, allMessages)
        }
      }
    }
  }

  function sendMessage(event) {
    event.preventDefault();

    if(ws) {

      ws.send(JSON.stringify({
        recipient: chatId,
        text: typedMessage,
      }));
      setAllMessage([...allMessages, {text: typedMessage, isOur : true}]);
      setTypedMessage('');
    }
  }
  return (
    <Layout>
      <div className="flex flex-row h-screen antialiased text-gray-800">
        <MessageSidebar selectedChat={selectedChat} setSelectedChat={setSelectedChat} chatList={chatUsers} />
        {chatId ? 
       <ChatBox sendMessage={sendMessage} selectedChat={selectedChat} chatId={chatId} chatUsers={chatUsers} allMessages={allMessages} setSelectedChat={setSelectedChat} typedMessage={typedMessage} setTypedMessage={setTypedMessage} />
         : <></>}
      </div></Layout>
  )
}