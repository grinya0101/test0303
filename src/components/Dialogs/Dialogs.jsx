import React from "react";

import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
  
   
   
   
      let dialogsElrments = props.dialogs.map((d) => {
         console.log(d.name);
         // eslint-disable-next-line react/jsx-no-undef
         return <DialogItem name={d.name} id={d.id} />
      })
   
      
      let massegeElement = props.messages.map((m) => {
         console.log(m.message);
         return <Message message={m.message} id={m.id} />
         
         
      })
      
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElrments}</div>

      <div className={s.masseges}>{massegeElement}</div>
    </div>
  );
};

export default Dialogs;
