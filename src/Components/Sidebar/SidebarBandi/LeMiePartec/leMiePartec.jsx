import React from 'react'

//* COMPONENTS */
import LeMiePartTable from './Component/LeMiePartTable/leMiePartTable';
import "./leMiePartec.css"

const leMiePartec = () => {
    return (
        <>
            <div style={{ fontSize: '20px', marginTop: '5rem' }}>
                <div style={{
                    height: '70px',
                    backgroundColor: '#44a556',
                    width: '100%',
                    display: 'flex',
                   
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                }} className="bold-columns text-center text-white header-hieght">
                    LE MIE PARTECIPAZIONI
                </div>
                <div className="row row-overflow col-12 mt-4"></div>

                  <div className="container custom-container" style={{ backgroundColor: "#f3f3f3" }}>
                 

                    <LeMiePartTable />
                   
                </div>
            </div>
        </>
    )
}

export default leMiePartec
