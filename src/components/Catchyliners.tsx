import React from "react";
require('../styles/catchyliners.css')

const Catchyliners = (): any => {
    return(
        <section id='catchy-liners'>
            <div>
                <h1 className="catchy-head">Engineering with purpose.</h1>
                <p className="large-p">
                I Give life to imaginative ideas through code.
                </p>
            </div><hr id='catchy-hr' />
            <div>
                <h1 className="catchy-head">Crafting strategic web and digital solutions.</h1>
                <p className="large-p">
                I shape online and digital experiences that resonate and make every moment count.
                </p>
            </div>
        </section>
    )
}

export default Catchyliners;