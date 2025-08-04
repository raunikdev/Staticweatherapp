import {useState} from 'react'

import './citiesname.css'

function Citiesnames(){
    const [visibilityCities,setVisibilityCities] = useState(true);
    const buttonDisplayHandler =() =>{
        setVisibilityCities((prev)=>!prev)
        console.log(visibilityCities)
    }
    return(
        <>  
            <h1>Info for the cities available are: 
                <button onClick={buttonDisplayHandler} className='show-hide-button'
                >
                    {visibilityCities? "Show":"Hide"}
                </button></h1>

            <p style={{width: "60px"

            }}
            className={visibilityCities? "hide-info":"show-info"}>delhi
                london
                mumbai
                newyork
                paris
                tokyo
                sydney
                cairo
                toronto
                madrid
                beijing
                bangkok
                moscow
                berlin
                rome
                lisbon
                singapore
                seoul
                dubai
                amsterdam
                athens
                vienna
                zurich
                jakarta
                istanbul
                prague
                stockholm
                brussels
                manila
                kualaLumpur
                bangalore
                chennai
                hyderabad
                kolkata
                pune
                jaipur
                lucknow
                patna
                surat
                indore
                kanpur
                nagpur
                visakhapatnam
                vadodara
                rajkot
                guwahati
                shillong
                bhopal
                trivandrum
                ranchi
                dehradun
                chandigarh
                agra
                varanasi
                mysore
                coimbatore
                madurai
                tiruchirappalli
                nashik
                ujjain
                jodhpur
                ajmer
                gorakhpur
                bhubaneswar
                siliguri
                dhaka
                kathmandu
                lahore
                karachi
                islamabad
                colombo
                male
                doha
                tehran
                baghdad
                riyadh
                mecca
                medina
                abuDhabi
                kuwaitCity
                muscat
                dover
                miami
                losAngeles
                sanFrancisco
                chicago
                houston
                boston
                seattle
                lasVegas
                phoenix
                denver
                atlanta
                orlando
                dallas
                detroit
                minneapolis
                philadelphia
                washingtonDC
            </p>    
        </>
    )
}
export default Citiesnames;