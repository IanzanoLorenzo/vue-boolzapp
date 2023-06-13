"use strict";

const {createApp} = Vue;

createApp({
    data() {
        return {
            activeToggle : 0,
            searchFilter: '',
            newMessage : '',
            activeChat : 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            toggleMenu : false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            toggleMenu : false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            toggleMenu : false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            toggleMenu : false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            toggleMenu : false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            toggleMenu : false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            toggleMenu : false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            toggleMenu : false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            toggleMenu : false
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            toggleMenu : false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            toggleMenu : false
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            toggleMenu : false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            toggleMenu : false
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            toggleMenu : false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            toggleMenu : false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            toggleMenu : false
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            toggleMenu : false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            toggleMenu : false
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            toggleMenu : false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            toggleMenu : false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            toggleMenu : false
                        }
                    ],
                },
                {
                    name: 'Spaccino',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai la droga ziopera?',
                            status: 'sent',
                            toggleMenu : false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No fratm l\' ho pippata tutta',
                            status: 'received',
                            toggleMenu : false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Eh ma ziocane!',
                            status: 'sent',
                            toggleMenu : false
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        setActiveChat(index){
            this.activeChat = index;
        },
        searchChat(){
            for(let i = 0; i < this.contacts.length; i++){
                let contact = this.contacts[i];
                let contactName = contact.name.toLowerCase()
                if(contactName.includes(this.searchFilter.toLowerCase())){
                    contact.visible = true;
                } else{
                    contact.visible = false;
                }
            }
        },
        dataSetted(){
            let data = new Date();
            let myDate = {
                year : data.getFullYear(),
                month : data.getMonth(),
                day : data.getDate(),
                hour : data.getHours(),
                minute : data.getMinutes(),
                second : data.getSeconds()
            }
            for(let element in myDate){
                if(myDate[element] <= 9){
                    myDate[element] = '0' + myDate[element];
                }
            }

            return myDate;
        },
        addNewMessage(){
            if(this.newMessage !== ''){
                const msgDate = this.dataSetted();
                let obj = {
                    date:`${msgDate.day}/${msgDate.month}/${msgDate.year} ${msgDate.hour}:${msgDate.minute}:${msgDate.second}`,
                    message: this.newMessage.trim(),
                    status: 'sent',
                    toggleMenu : false
                }
                this.contacts[this.activeChat].messages.push(obj);
                this.newMessage = '';
                setTimeout(() => {
                    const respMsgDate = this.dataSetted();
                    let objResp = {
                        date:`${respMsgDate.day}/${respMsgDate.month}/${respMsgDate.year} ${respMsgDate.hour}:${respMsgDate.minute}:${respMsgDate.second}`,
                        message: 'Ok!',
                        status: 'received',
                        toggleMenu : false
                    }
                    this.contacts[this.activeChat].messages.push(objResp);
                }, 1000)
            }
        },
        dropDown(singleMessage){ 
            this.closeToggles()
            singleMessage.toggleMenu = !singleMessage.toggleMenu;
        },
        deleteMessage(contact, indexMex){
            contact.messages.splice(indexMex, 1); 
        },
        closeToggles(){
            for (const key in this.contacts){
                for(const i in this.contacts[key].messages){
                    this.contacts[key].messages[i].toggleMenu = false
                }
            } 
        }
    }
}).mount('#app')