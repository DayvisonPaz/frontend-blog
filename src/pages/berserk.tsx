import Comments from "../comments";

function Berserk(props:any) {

  return (
    <>
      <div className="text-justify flex items-center flex-col mt-11 w-[90%] m-auto 2xl:w-[60%] xl:w-[60%]"> 
      
      <h1 className="text-2xl m-9">Berserk e sua beleza</h1>
</div>
      <Comments comments={0} {...props} />
    </>
  );
}

export default Berserk;