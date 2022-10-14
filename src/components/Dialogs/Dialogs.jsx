import React from "react";

import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = () => {
   let dialogs = [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrew'},
      {id: 3, name: 'Sveta'}, ];
   
   
      let dialogsElrments = dialogs.map((d) => {
         console.log(d.name);
         // eslint-disable-next-line react/jsx-no-undef
         return <DialogItem name={d.name} id={d.id} />
      })
   
      let messages = [
         {id: 1, message: 'Hi'},
         {id: 2, message: 'How is your it-kamasutra?'},
         {id: 3, message: 'Yo'},];
   
      let massegeElement = messages.map((m) => {
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
