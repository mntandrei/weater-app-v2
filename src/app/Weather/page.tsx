import NavBar from "@/app/components/layout/NavBar";

export default function Weather() {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex-1 p-10">
        <h1>Welcome to the Weather Page</h1>
      </div>
    </div>
  );
}