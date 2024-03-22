import React, { useState, useEffect, useRef } from 'react';
import styles from './formkey.module.scss';

function FormKey() {
  const [apiKey, setApiKey] = useState('');
  const [systemMessage, setSystemMessage] = useState('');
  
  const apiKeyRef = useRef(null);
  const systemMessageRef = useRef(null);

  useEffect(() => {
    const storedApiKey = localStorage.getItem('apikey');
    const storedSystemMessage = localStorage.getItem('systemMessage');

    if (storedApiKey) {
      setApiKey(storedApiKey);
      apiKeyRef.current.value = storedApiKey;
    }

    if (storedSystemMessage) {
      setSystemMessage(storedSystemMessage);
      systemMessageRef.current.value = storedSystemMessage;
    } else {
      setSystemMessage('Hãy cho ra ngôn ngữ Tiếng Việt');
      systemMessageRef.current.value = 'Hãy cho ra ngôn ngữ Tiếng Việt';
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('apikey', apiKeyRef.current.value);
    localStorage.setItem('systemMessage', systemMessageRef.current.value);
  };

  const handleReset = () => {
    setApiKey('');
    setSystemMessage('Hãy cho ra ngôn ngữ Tiếng Việt');
    apiKeyRef.current.value = '';
    systemMessageRef.current.value = 'Hãy cho ra ngôn ngữ Tiếng Việt';
  };

  return (
    <div className={styles.container}>
      <form action="" className={styles.settingform}>
        <div className={styles.headerform}>
          <h2>Cài đặt tiện ích</h2>
        </div>
        <div className={styles.contentform}>
          <label htmlFor="apikey" style={{ fontSize: "large" }}>
            API Key:
          </label>
          <input
            type="text"
            id="apikey"
            ref={apiKeyRef}
            onChange={(e) => setApiKey(e.target.value)}
            required
          />
          <br />
          <label htmlFor="systemMessage" style={{ fontSize: "large" }}>
            Tin nhắn hệ thống:
          </label>
          <input
            type="text"
            id="systemMessage"
            ref={systemMessageRef}
            onChange={(e) => setSystemMessage(e.target.value)}
          />
          <br />
        </div>
        <div className={styles.allbutton}>
          <button
            type="button"
            className={styles.buttonnew}
            onClick={handleSave}
          >
            Save
          </button>
          <button
            type="button"
            className={styles.buttonnew}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormKey;
