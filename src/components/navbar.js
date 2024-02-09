import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <h3>User List</h3>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;