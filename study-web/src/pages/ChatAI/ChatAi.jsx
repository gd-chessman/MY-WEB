import React, { useState,useEffect } from 'react';
import '../../assets/css/global.css';
import styles from './chatai.module.scss';
import HeaderHome from '../../components/Header/HeaderHome';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import FooterHome from '../../components/Footer/FooterHome';
import HomeAside from '../../components/Aside/HomeAside';
import FormKey from './FormKey';
import axios from 'axios';

function ChatAi() {
  const [formkey, setFormKey] = useState(false);
    

  const nameGPT = "Le Van Quy : \n";
  const apiKey = localStorage.getItem('apikey');
  let systemMessage;
  const storedMessage = localStorage.getItem('systemMessage');
  if (storedMessage) {
    systemMessage = storedMessage;
  }

  useEffect(() => {
    const userInputElement = document.getElementById('user-input');
    userInputElement.focus();
  }, []); 

  const sendMessage = () => {
    const userMessage = document.getElementById('user-input').value;
    document.getElementById("user-input").value = '';

    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: "" }
      ],
    };

    requestData.messages.push(
      { role: 'user', content: userMessage },
      { role: "system", content: systemMessage }
    );

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };

    axios.post('https://api.openai.com/v1/chat/completions', requestData, { headers })
      .then((response) => {
        const chatbotResponse = response.data.choices[0].message.content;
        document.getElementById('response').value = nameGPT + chatbotResponse;
      })
      .catch((error) => {
        console.error('Chương trình của bạn bị lỗi:', error.message);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div id={styles.app}>
      <HeaderHome />
      <div className={styles.appWithSidebar} >
        <HomeAside />
        <main id={styles.main}>
          <div className={styles.container}>  
            <div className={styles.chatbot}>
                <textarea id="response" cols="78" rows="10" className={styles.response}></textarea>
                <div className={styles.userHandel}></div>
                <input id="user-input" onKeyDown={handleKeyDown} className={styles.userInput} />
                <button id="sendButton" onClick={sendMessage} className={styles.buttonSubmit}>Gửi</button>
            </div>
          </div>
        <button onClick={()=>{setFormKey(!formkey)}} className={styles.open}>Cài đặt</button>
        </main>
      </div>
        {formkey && <FormKey />}
      <ScrollTop />
      <FooterHome />
    </div>
  );
}

export default ChatAi;
