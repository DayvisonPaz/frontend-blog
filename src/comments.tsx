import { useState, useEffect } from 'react';
import axios from 'axios';
function Comments(props:any){
  const [addComments,setaddComments] = useState(["",""]); 
    const [comments,setComments] = useState([]);
    useEffect(() => {
      async function run(){
      await axios.get(`http://localhost:3030/comments/${props.comments}`).then(response=>setComments(response.data.comments))
    
    }
    run()
  }, []);
  function saveComment(){
  axios.post(`http://localhost:3030/addcomment`,{nome:addComments[0], comentario:addComments[1],post:0})
  }
    
    return(<>
    <div className="w-screen  h-[20%] mb-6">
    
  <form onSubmit={saveComment} className="max-w-2xl bg-white rounded-lg border p-2 mx-auto mt-20">
    <div className="px-3 mb-2 mt-2">
        <textarea onChange={(e)=>setaddComments([addComments[0],e.target.value])} value={addComments[1]} placeholder="comment" className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"></textarea>
    </div>
    <div className="flex justify-around px-4">
    <input className="w-3/5 border-2" type="text" onChange={(e)=>setaddComments([e.target.value,addComments[1]])} value={addComments[0]}  placeholder="Insira seu nome" />    <input type="submit" className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value="Comment"/>
    </div>
</form>
     </div>
    
   {comments?comments.map(e=><div className='max-w-2xl bg-white rounded-lg border p-2 mx-auto mt-4 flex  flex-col  justify-center w-screen items-center'> <p  className='w-9 font-bold flex items-center'><img className='rounded-full mr-4' src="https://img.freepik.com/psd-gratuitas/icone-3d-para-aplicativo-de-midia-social_23-2150049569.jpg?t=st=1710938452~exp=1710942052~hmac=3fd764f416367ca6a2f8b80aeb132d639a2a94194ffeb14fe4fa21b8788b4b3c&w=740" alt="profile pic" /> {e['nome']}</p>{e['comentario']}</div>):'nada'}
  </>)
}

export default Comments