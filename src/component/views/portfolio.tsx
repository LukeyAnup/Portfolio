export default function Portfolio() {
  return (
    <div className="grid-cols-2 grid gap-10">
      <div className="flex justify-center m-48 ">
        <div>
          <div className="text-4xl text-[#3D4E88] pb-6">Welcome to my site</div>
          <div className="text-6xl text-[#0639BD]">Hi! I’m Anup </div>
          <div className="flex text-6xl gap-2">
            <div> React </div>
            <div className=" text-[#EB681E]"> Developer</div>
          </div>
        </div>
      </div>

      <div className="m-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBp3gsQdFjO_r7zsVr0d-gs8n86rXGbmp3w&usqp=CAU"
          alt=""
          height={500}
          width={500}
        />
      </div>
    </div>
  );
}
