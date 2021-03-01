import React from 'react'
import Header from '../../components/header'

import './index.css'

function Init() {
    return (
        <>
            <main className="main-content">
                <section className="title-content">
                    <Header />
                    <div className="title-subtitle-content">
                        <div className="title">
                        <h1>Raphael Andrey Martinez Velasquez</h1>
                        </div>
                        <div className="subtitle">
                            <p>Bienvenido a mi sitio, bienvenido a mi hoja de vida, bienvenido a un poco de mi.</p>
                        </div>
                    </div>
                </section>
                <section></section>
            </main>
        </>
    )
}

export default Init;