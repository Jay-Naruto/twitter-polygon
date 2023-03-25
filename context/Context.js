import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext()
export default function Provider({children}) {
    const router=useRouter()
    const [appStatus,setAppStatus]=useState('loading')
    const [currentAcc,setCurrentAcc]=useState('')
    useEffect(()=>{
        checkWallet()
    },[])
    const checkWallet=async()=>{
        if(!window.ethereum) return
        try{
            const addressArr=await window.ethereum.request({
                method:'eth_accounts'
            })

            if (addressArr.length > 0){
                setAppStatus('connected')
            }
            else{
                router.push("/")

                setAppStatus('notConnected')
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const connectToWallet=async()=>{
        if(!window.ethereum) return setAppStatus('noMetaMask')
        try{
            setAppStatus('loading')
            const addressArr=await window.ethereum.request({
                method:'eth_accounts'
            })
            if (addressArr.length > 0){
                setCurrentAcc(addressArr[0])
            }
            else{
                router.push("/")
                setAppStatus('notConnected')

            }
        }
        catch(err)
        {
            console.log(err)
        }
    }
  return (
    <Context.Provider value={{appStatus,currentAcc,connectToWallet}}>
        {children}
    </Context.Provider>
  )
}
