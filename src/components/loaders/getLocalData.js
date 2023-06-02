import { getStoredCart } from "../utilities/FakeDB"

export const jobDataLocal=async()=>{
    const jobsData= await fetch('jobs.json')
    const jobs=await jobsData.json()
    const appliedJob=getStoredCart()
    let newJobArray=[]
    for(const id in appliedJob){
        const foundJob=jobs.find(job=>job.id==id)
        if(foundJob){
            foundJob.quantity=appliedJob[id]
            newJobArray.push(foundJob)
        }
    }
    return newJobArray
}