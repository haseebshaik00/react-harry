import React from 'react'

export default function Footer() {
    let styleFoot = {
        position: "relative",
        top: "20vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark p-2 text-dark bg-opacity-10 text-dark py-4" style={styleFoot}>
            <center>Copyright &copy; Haseeb <br /> todohaseeb.netlify.app</center>
        </footer>
    )
}
