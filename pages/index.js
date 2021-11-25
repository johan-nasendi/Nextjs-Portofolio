import Nav from "../component/Nav";
import Logo from "../component/Logo";
import Btn from "../component/Button";

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="flex bg-blue-500 items-center">
            <div className="w-3/12">
               <Logo/>
            </div>
            <div className="w-6/12">
              <Nav/>      
            </div>
            <div className="w-3/12 text-right">
              <Btn>Contact</Btn>
            </div>
          </div>
        </div>
      </div>
    </>
   
  )
}
