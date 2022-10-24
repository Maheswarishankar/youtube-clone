//project name:youtube-clone-project-API_key(AIzaSyA_H4dPU-9_-TSMY7WjYRcky3_574tAknA)

//(I trying to 6 api key but api key is not valid show...finally received api key is put in the project...
//its also not valid ...1st project& another one project also created and name  change &get api key its  work..
//but after few hours error show for not valid...what can i do
//this time diwali festival time..so i didin't have raise in any query...& i had no time....so i have submit invaild api key
// with my project..&thank u)

// print default videos in display..............................
let cont= document.getElementById("container");
window.addEventListener("load",function(){
  defltdata()
  })
const defltdata=async()=>{
  try{
    let ser="most popular in Mother songs tamil"
    let res2 =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA_H4dPU-9_-TSMY7WjYRcky3_574tAknA=${ser}&type=video&maxResults=20`)
    let dta=await res2.json();
    console.log(dta)
    dtadis(dta.items)
  }
  catch(err){
    console.log(err)
  }
}
const dtadis=(list) =>{
  cont.innerHTML="";
  console.log(list)
  list.forEach((vid)=>{
    const{
      snippet:{thumbnails:{medium:{url}},title},id:{videoId}
    } =vid
 
  console.log(url,title,videoId)
    let card= document.createElement("div");
    card.addEventListener("click",function(){
      mainmove(videoId)
    })
    card.setAttribute("id","incard")
    let iframe=document.createElement("img");
    iframe.src=url;
  
  let pcont=document.createElement("div");
  let p1= document.createElement("P");
  p1.textContent=title;
  pcont.append(p1)
    card.append(iframe,pcont);
    cont.append(card)
  });
}

    const getdata =async()=>{
        
        try{
            let input=document.getElementById("search-bar").value;
            console.log(input)
            let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA_H4dPU-9_-TSMY7WjYRcky3_574tAknA=${input}&type=video&maxResults=20`)
       
        let data = await res.json();
        console.log(data)
        let list=data.items
        displaydata(list);
        }
        catch(err){
            console.log(err)
        }
    }
    const displaydata=(list) =>{
        cont.innerHTML="";
        console.log(list)
        list.forEach((vid)=>{
          const{
            snippet:{thumbnails:{medium:{url}},title},id:{videoId}
          } =vid
       
        console.log(url,title,videoId)
          let card= document.createElement("div");
          card.addEventListener("click",function(){
            mainmove(videoId)
          })
          card.setAttribute("id","incard")
          let iframe=document.createElement("img");
          iframe.src=url;
        
        let pcont=document.createElement("div");
        let p1= document.createElement("P");
        p1.textContent=title;
        pcont.append(p1)
          card.append(iframe,pcont);
          cont.append(card)
        });
    }
      

