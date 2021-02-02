import React from 'react'
import Form from '../components/Form.js'

export default function Header({setGeolocation}) {
    return (
        <header className="bg-hero-pattern bg-cover
                           bg-no-repeat bg-center
                           h-96 pt-4 font-rubik
                           
                          ">
            <h1 className="text-white text-center text-xl md:text-2xl font-bold">IP Address Tracker</h1>
            <Form setGeolocation={setGeolocation}/>
        </header>
    )
}
