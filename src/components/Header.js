const Header =()=> {

    return (
        <header className="header bg-dark bg-gradient text-white py-3" id="header">
            <div className="container">
                {/* row-cols-1 row-cols-md-2 row-cols-lg-4 */}
                <div className="row align-items-center">
                    <div className="col-12 col-md-2">
                        <hi className="text-capitalize display-4">logo</hi>
                    </div>
                    <div className="col-12 col-md-10 text-md-end">
                        <ul className="list-unstyled list-inline mb-0">
                            {/* make it so that the <li> elements are buttons to other pages that are highlighted when hovered over, "active" when clicked, and "disabled" when the user is already on the page the button would link to. additionally. look into how to make "sign in" and "create account" disappear and show "my account" instead when the user is signed in
                            
                            Update: I decided there wasn't a logical way to make a user account function here without a full database so I didn't do it, but that's what I was thinking of.*/}
                            <li className="list-inline-item">
                                <a href="#" className="btn btn-outline-light text-capitalize">sign in</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn btn-outline-light text-capitalize">create account</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <figure className="text-end mt-3">
                    <blockquote className="blockquote">
                        <p className="text-decoration-underline">“If it can be written, or thought, it can be filmed.”
                        </p>
                    </blockquote>
                    <figcaption className="blockquote-footer text-white">
                        <cite title="Source Title">Stanley Kubrick, 1988</cite>
                    </figcaption>
                </figure>
            </div>
        </header>
    )
}

export default Header