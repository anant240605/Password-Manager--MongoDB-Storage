import React, { useActionState } from 'react'
import { useState, useRef, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef()


    const Hidepass = () => {

        if (ref.current.type === "password") {
            ref.current.type = "text"
        }

        else {
            ref.current.type = "password"
        }

    }
    const getPasswords= async () => {
         let req= await fetch("http://localhost:3000")
         let password = await req.json()
         console.log(password)
         setPasswordArray(password)
         
        
    }
    


    const [PasswordArray, setPasswordArray] = useState([])
    const [form, setform] = useState({ site: "", username: "", password: "" })
    useEffect(() => {
       getPasswords()
        

    }, [])



    const Savepass = async () => {

        setPasswordArray([...PasswordArray, {...form,id:uuidv4()}])
        //   await fetch("http://localhost:3000",{
        //     method:"DELETE",
        //     headers:{'Content-Type': 'application/json'},
        //     body:JSON.stringify({id:form.id})
        // })
        



        
        await fetch("http://localhost:3000",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({...form,id:uuidv4()})
        })
        
        // localStorage.setItem("passwords", JSON.stringify([...PasswordArray, {...form,id:uuidv4()}]))
        // console.log(PasswordArray)
        setform({
            site: "",
            username: "",
            password: ""
        })
        toast.success('Password Added Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });



    }
    const deletePassword = (id) => {
           let c=confirm("Do you want to delete this Password")
           if(c){
            console.log("id", id)
            setPasswordArray(PasswordArray.filter(item=>item.id!==id))
             let res=fetch("http://localhost:3000",{
            method:"DELETE",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({id})
        })

            // localStorage.setItem("passwords", JSON.stringify(PasswordArray.filter(item=>item.id!==id)))
               toast.success('Password Deleted Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
           }
            
            
       



    }
    const editPassword = async (id) => {

       console.log("id", id)
           if(form.id){
        // 👉 EDIT
        await fetch("http://localhost:3000",{
            method:"PUT",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(form)
        })

        setPasswordArray(PasswordArray.map(item =>
            item.id === form.id ? form : item
        ))

    } 
        setform({...PasswordArray.filter(i=>i.id===id)[0],id:id})
        setPasswordArray(PasswordArray.filter(item=>item.id!==id))
       

       


    }
    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })


    }

    const copyText = (text) => {
        toast.success('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
        navigator.clipboard.writeText(text)
    }





    return (
        <>




            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
            <div className="  mycontainer ">

                <h1 className='text-4xl  font-bold text-center'>
                    <span className='text-green-500'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500'>OP&gt;</span>



                </h1>

                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

                <div className="text-black flex flex-col items-center  p-4 gap-8">
                    <input value={form.site} onChange={handlechange} className='rounded-2xl border border-green-500 w-full text-black px-4 py-1 ' type="text" name="site" id=" " placeholder='Enter Website URL' />
                    <div className="flex  w-full justify-between gap-8">
                        <input value={form.username} onChange={handlechange} className='rounded-2xl border border-green-500 w-full text-black px-4 py-1 ' type="text" name="username" id=" " placeholder='Enter Username' />
                        <div className="relative">


                            <input ref={ref} value={form.password} onChange={handlechange} className='rounded-2xl border border-green-500 w-full text-black px-4 py-1 ' type="password" name="password" id=" " placeholder='Enter Password' />
                            <span className='absolute right-1 cursor-pointer ' onClick={Hidepass}>
                                <lord-icon
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="morph"
                                    stroke="bold"
                                    state="morph-lashes"
                                    colors="primary:#000000,secondary:#3e5c0a"
                                >
                                </lord-icon>
                            </span>
                        </div>

                    </div>
                    <button onClick={Savepass} className='flex justify-center items-center gap-2 hover:border-2 bg-green-400 px-4 py-2 rounded-full font-bold w-fit hover:bg-green-500 text-black cursor-pointer'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"

                        >
                        </lord-icon>Save Password</button>





                </div>


                <div className="passwords">
                    <h2 className='font-bold py-4 text-2xl'>Your Passwords</h2>
                    {PasswordArray.length === 0 && <div> No Passwords To Show</div>}
                    {PasswordArray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-green-800 text-white' >
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Passwords</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100 '>
                                {PasswordArray.map((items, index) => {
                                    return <tr key={index}>
                                        <td className=' text-center  py-2 border border-white'>
                                            <div className=" flex justify-center items-center">
                                                <a target='_blank' href={items.site}>{items.site}</a>
                                                <div className='size-7 cursor-pointer ' onClick={() => copyText(items.site)}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">

                                                    </lord-icon>
                                                </div>
                                            </div>


                                        </td>
                                        <td className='  text-center  py-2 border border-white'>
                                            <div className='flex justify-center items-center'>
                                                {items.username}
                                                <div className='size-7 cursor-pointer' onClick={() => copyText(items.username)}>

                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">

                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='  text-center  py-2 border border-white'>
                                            <div className='flex justify-center items-center'>
                                                {"*".repeat(items.password.length)}
                                                <div className='size-7 cursor-pointer' onClick={() => copyText(items.password)}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px" }}
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">

                                                    </lord-icon>

                                                </div>
                                            </div>

                                        </td>
                                        <td className='  text-center  py-2 border border-white'>
                                            <span className='cursor-pointer mx-2' onClick={()=>{editPassword(items.id)}}>
                                                    <lord-icon 
                                                        style={{ "width": "25px", "height": "25px" }}
                                                        src="https://cdn.lordicon.com/gwlusjdu.json"
                                                        trigger="hover">

                                                    </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-2' onClick={()=>{deletePassword(items.id)}}>
                                                    <lord-icon 
                                                        style={{ "width": "25px", "height": "25px" }}
                                                        src="https://cdn.lordicon.com/skkahier.json"
                                                        trigger="hover">

                                                    </lord-icon>
                                            </span>

                                        </td>
                                    </tr>
                                })}


                            </tbody>
                        </table>
                    }
                </div>


            </div>
        </>
    )
}

export default Manager
