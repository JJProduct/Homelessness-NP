import{b as s}from"./init-7741dda9.js";console.log("Script started successfully");let o;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.controls.disablePlayerProximityMeeting(),WA.room.area.onEnter("phrase01").subscribe(()=>{o=WA.ui.openPopup("phrase01Popup","Bringing my son to play soccer later!",[])}),WA.room.area.onLeave("phrase01").subscribe(r),WA.room.area.onEnter("phrase02").subscribe(()=>{o=WA.ui.openPopup("phrase02Popup","Where is my grandson...",[])}),WA.room.area.onLeave("phrase02").subscribe(r),WA.room.area.onEnter("phrase03").subscribe(()=>{o=WA.ui.openPopup("phrase03Popup","Will be sending my son for tuition later",[])}),WA.room.area.onLeave("phrase03").subscribe(r),s().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e))}).catch(e=>console.error(e));function r(){o!==void 0&&(o.close(),o=void 0)}
