
export default function Signup(){
    return(
        <div className="flex justify-center content-center font-sans">
            <div className="h-75 bg-white flex flex-col justify-center content-center gap-5 rounded-xl p-5">
                <h1 className="text-2xl font-medium text-center">Hi! Signup here.</h1>
                <div className="flex flex-col gap-2">
                <input type="text" placeholder="Enter your name" className="border-2 border-[#c4c7cc] rounded-md"/>
                <input type="text" placeholder="Create your username"className="border-2 border-[#c4c7cc] rounded-md"/>
                <input type="password" placeholder="Create your password"className="border-2 border-[#c4c7cc] rounded-md"/>
                <button className="w-15 p-1 text-white text-sm font-bold border-1  rounded-md bg-[#06d470] hover:bg-[#05b35e]">Signup</button>
                
                </div>
                <p>Already have an account? Login</p>
            </div>
        </div>
    )
}