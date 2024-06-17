import Comments from "../comments";
function Berserk(props:any) {

  return (
    <>
      <div className="text-justify flex items-center flex-col mt-11 w-[90%] m-auto 2xl:w-[60%] xl:w-[60%]"> 
      
      <h1 className="text-2xl m-9">Berserk e sua beleza</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex unde cum neque accusamus nihil possimus necessitatibus ipsa commodi officia tenetur atque deleniti doloremque amet dicta, pariatur enim soluta? Qui, ea.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis eos, beatae explicabo labore inventore nam earum maiores, consequatur incidunt dolores eveniet nemo rerum illo. Eius eos adipisci beatae quas.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum itaque magni voluptate commodi magnam quasi quaerat nesciunt in molestiae ipsa, aperiam fugiat aliquam. Itaque ut vitae quod earum quo.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta quae dolor ipsam alias accusantium! Dolorum cupiditate debitis recusandae eum ut facere reiciendis totam, inventore natus qui error eos quibusdam?
      </p>
</div>

      <Comments comments={0} {...props} />
    </>
  );
}

export default Berserk;