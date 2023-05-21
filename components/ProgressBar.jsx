import { useRouter } from "next/router"
import { Fragment, useEffect } from "react"

const steps = [
    {step: 1, name: 'menu', url: '/'},
    {step: 2, name: 'resume', url: '/resume'},
    {step: 3, name: 'total', url: '/total'}
]
const ProgressBar = () => {

    const goTo = useRouter();
 
    const AnimateProgressBar = (router) => {

        if(router.pathname === '/') {
            return '10%'
        }
        if(router.pathname === '/resume') {
            return '50%'
        }
        if(router.pathname === '/total') {
            return '100%'
        }
    }



  return (
    <Fragment>
        <div
            className="flex justify-between mb-5"
        >
            {
                steps.map(step => 
                    <button
                    onClick={() => {
                        goTo.push(step.url);
                       
                    }}
                    className="text-2xl font-bold capitalize "
                    key={step.step}>{step.name}</button>
                    
                )
            }
        </div>

        <div className=" bg-gray-100 mb-10"> 
            <div 
            className="rounded-full bg-amber-500 text-smx leading-none h-2 text-center text-white"
            style={{width: `${AnimateProgressBar(goTo)}`}}
            >
                
            </div>
        </div>
    </Fragment>
  )
}

export default ProgressBar