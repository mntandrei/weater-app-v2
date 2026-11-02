import NavBar from "@/app/components/layout/NavBar";

export default function Info() {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex-1 p-10">
        <h1>Welcome to the Info Page</h1>
      </div>
    </div>
  );
}