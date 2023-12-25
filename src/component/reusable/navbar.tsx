import Button from "./button";

export default function Navbar() {
  return (
    <div className="flex justify-between px-12 py-4 bg-indigo-100 align-middle">
      <div className="text-lg flex items-center">Lukey</div>
      <div className="flex gap-4 items-center">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Works</a>
        <a href="">Contact</a>
      </div>
      <Button> Let's talk</Button>
    </div>
  );
}
