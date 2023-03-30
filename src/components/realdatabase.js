import React, { Component } from "react";
// import app from "../base";
// import { AuthContext } from "../Auth.js";
import firebase from "firebase/compat/app";
import 'firebase/compat/database';


class RealDbTest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isConnected: false,
            database: null,
            myId:'',
            receiverId:'',
            message:'',
            messageList:[]
        }
    }

    componentDidMount = async () => {
        this.setState({
            database: firebase.database()
        })
    }

    connect = async () => {
        
        try {
            const {database,myId,messageList} = this.state;

            console.log(database)

            await database.ref('/notifs/'+myId).remove();
            await database.ref('/notifs/'+myId).on('value',snapshot=>{
                if(snapshot.exists()) {
                    const notif = snapshot.val();
                    this.setState({
                        messageList: [...this.state.messageList, notif]
                    })
                }
            });

            this.setState({
                isConnected: true
            });
            console.log("connect", this.state.isConnected);

        } catch(e) {
            console.log("++++");
            console.error(e)
        }
    }

    sendMessage = async () => {
        try {

            const { database, receiverId, message, myId }  = this.state

            await database.ref('/notifs/'+receiverId).set({
                message: "",
                from: myId
            });
            this.setState({
                message:""
            })

        } catch (e) {
            console.error(e)
        }
    }


    renderMessages = (value, key) => {
        return (
            <div key={key}>
                Message from {value.from}: {value.message}
            </div>
        )
    }
    
    render() {

        const {myId, receiverId, message, messageList} = this.state
        return (
            <div>
                <h1>Real Db Test</h1>
                
                {this.state.isConnected ?
                    <div>
                        <input placeholder="Send to" value={receiverId} onChange={(e)=>this.setState({receiverId:e.target.value})}></input>
                        <input placeholder="Message" value={message} onChange={(e)=>this.setState({message:e.target.value})}></input>
                        <button onClick={() => this.sendMessage}>Test</button>
                        <div>
                            Received messages: {this.state.map(this.renderMessages)}
                        </div>
                    </div>
                    :
                    <div>
                        <input placeholder="My id" value={myId} onChange={(e)=>this.setState({myId:e.target.value})}></input>
                        <button onClick={this.connect}>Set</button> 
                    </div>
                }
                
           </div>
        )
    }
}

// const RealDbTest = () => {
//     const { currentUser } = useContext(AuthContext);
//     return (
//         <div>
//             <h1>Real Db Test</h1>
//             <span> {currentUser._delegate.email} </span>
//             <button onClick={() => ""}>Test</button> 
//         </div>
//     )
// }


export default RealDbTest