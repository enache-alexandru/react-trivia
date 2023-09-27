import React, { Component } from "react";
// import app from "../firebaseInit";
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
        console.log("did mount")
        this.setState({
            database: firebase.database()
        })
    }

    connect = async () => {
        
        try {
            console.log("==> try")
            const {database,myId,messageList,isConnected} = this.state;

            console.log("database:", database)

            //await database.ref('/notifs/'+myId).remove();
            await database.ref('notifs/'+myId).on('value', (snapshot) => {
                console.log("on snapshiot", snapshot.val())
                if(snapshot.exists()) {
                    const notif = snapshot.val();
                    console.log("snapshot exists:", notif);
                    this.setState({
                        messageList: [...this.state.messageList, notif]
                    })
                }
                console.log("this.state.messageList", this.state.messageList)
            });




            // await firebase.database().ref('users/' + myId).set({
            //     username: "testUsername",
            //     email: "testEmail"
            // });

            this.setState({
                isConnected: true
            });
        } catch(e) {
            console.error(e)
        }
    }

    sendMessage = async () => {
        console.log("send message")
        try {
            console.log("send message - try")
            const { database, receiverId, message, myId }  = this.state

            await database.ref('/notifs/'+receiverId).set({
                message: message,
                from: myId
            });
            this.setState({
                message: message
            })

        } catch (e) {
            console.error(e)
        }
    }


    renderMessages = (value, key) => {
        console.log(value, key)
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
                <h1>Realtime Db Test</h1>
                <p>{this.state.myId}</p>
                
                {this.state.isConnected ?
                    <div>
                        <input placeholder="Send to" value={receiverId} onChange={(e)=>this.setState({receiverId:e.target.value})}></input>
                        <input placeholder="Message" value={message} onChange={(e)=>this.setState({message:e.target.value})}></input>
                        <button onClick={this.sendMessage}>Send</button>
                        <div>
                            Received messages: {this.state.messageList.map(this.renderMessages)}
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