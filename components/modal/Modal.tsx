import { useState } from "react";
import Loginform from "../auth/LoginForm";


const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                type="submit"
                className="bg-blue-500 text-slate-50 w-full py-2 px-4 rounded-full flex justify-center items-center gap-2"
                onClick={() => setShowModal(true)}
            >
                <span><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg></span>
                <span className="text-sm">UNLOCK FOR FREE</span>
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none cursor-pointer">
                                {/*header*/}
                                <span className="flex justify-end pt-2 px-4">
                                    <button
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-xs text-gray-900">X</span>
                                    </button>
                                </span>
                                {/*body*/}
                                <Loginform />
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default Modal