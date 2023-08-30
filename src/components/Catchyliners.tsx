import React from "react";
require('../styles/catchyliners.css')

const Catchyliners = (): any => {
    return(
        <section id='catchy-liners'>
            <div>
                <h1 className="catchy-head">Purposeful Engineering!</h1>
                <p className="large-p">
                    Giving life to imaginative ideas through code!!
                </p>
            </div><hr id='catchy-hr' />
            <div>
                <h1 className="catchy-head">Crafting Strategic Web & Digital Solutions!</h1>
                <p className="large-p">
                    Shaping web and digital experiences and making every moment count!!
                </p>
            </div>
        </section>
    )
}

export default Catchyliners;