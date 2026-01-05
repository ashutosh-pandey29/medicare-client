import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <>
      <div className=" flex flex-col justify-center min-h-screen md:p-4 bg-linear-to-tr from-slate-50 to-lime-100">

    <Outlet/>
      </div>
    </>
  )
}