import Button from "../button/Button";
import logo100 from "../image/login-100.svg";
import logoX from "../image/login-group-27162.svg";

  export  function Header() {
      return (
        <header className="fixed flex w-full items-end justify-center px-3 py-4">
          <img src={logo100} alt="100xlogo" className="w-2.56013rem h-1.12663rem " />
          <img src={logoX} alt="100xlogo" className="w-0.76688rem h-0.81819rem" />
        </header>
      )
    }
  export function Main() {
    return (
      <main className="flex h-screen w-full items-center">
        <section className="flex w-full flex-col gap-10 px-7">
          <section className="flex flex-col gap-3">
            <p className="text-neutral-50 font-inter text-3xl leading-normal font-extrabold">Happening now</p>
            <p className="text-neutral-50 font-inter text-base leading-normal font-medium">Join today.</p>
          </section>
          <a href="../src/Create_Your_Account_Step_1.html" className="w-full">
            <Button text="Create Account" bg="white" />
          </a>
          <div className="flex items-center">
            <hr className="mr-2 flex-grow border-t-2 border-neutral-700" />
            <span className="font-regular text-base leading-normal text-neutral-50">or</span>
            <hr className="ml-2 flex-grow border-t-2 border-neutral-700" />
          </div>
          <section className="flex flex-col gap-5">
            <p className="text-base font-medium leading-normal text-neutral-50">Already have an account?</p>
            <a href="../src/Home_Feed.html">
              <Button varient="outline" text="Sign Up" />
            </a>
          </section>
        </section>
      </main>

    )
   }
export default {Header,Main};