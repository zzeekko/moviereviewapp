const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                {/* row-cols-1 row-cols-md-2 row-cols-lg-4 */}
                <div className="row">
                    <div className="col col-1 col-md-2 row-cols-lg-4">
                        <hi className="text-capitalize display-2">logo</hi>
                    </div>
                    <div className="col offset-7 offset-md-7 offset-lg-7">
                        {/* trying to make it so that the list items are horizontal unless the screen is small, but im having trouble. list-group and list-group-item are good, this way they are either all horizontal or none of them are, but now they arent on the top of the screen */}
                        <ul className="list-unstyled list-inline list-group list-group-horizontal-md list-group-horizontal-lg">
                            {/* make it so that the <li> elements are buttons to other pages that are highlighted when hovered over, "active" when clicked, and "disabled" when the user is already on the page the button would link to. additionally. look into how to make "sign in" and "create account" disappear and show "my account" instead when the user is signed in */}
                            <li className="list-inline-item list-group-item"><a href="#" className="text-capitalize">sign in</a></li>
                            <li className="list-inline-item list-group-item"><a href="#" className="text-capitalize">create account</a></li>
                        </ul>
                    </div>
                </div>
                <figure className="text-end">
                    <blockquote class="blockquote">
                        <p className="text-decoration-underline">“If it can be written, or thought, it can be filmed.”
                        </p>
                    </blockquote>
                    {/* look into if it's proper to use "source title" for this when it's not the source */}
                    <figcaption class="blockquote-footer">
                        <cite title="Source Title">Stanley Kubrick, 1988</cite>
                    </figcaption>
                </figure>
            </div>
        </header>
    )
}

export default Header