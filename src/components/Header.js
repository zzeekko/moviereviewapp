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
                            <li className="list-inline-item list-group-item"><a href="#" className="text-capitalize">films</a></li>
                            {/* "films" will take you to a page with sections for "most popular films" with a show more button and "popular films right now" with a show more button (names pending). The films are represented by cards with poster, title and two buttons that read "add review" and "show reviews". add review will bring the user to a new page which only contains a form to write a review. "show reviews" will bring the user to a page similar to the "films" page except it has popular reviews, most liked, reviews by popular users, etc. the reviews will have a "read more" button, in case the review is too long to be displayed in the preview. clicking the read more will bring you to a page similar to the "add review" page, but instead of a form to fill out, it is the review with more details and the ability to reply to it. the movie being reviewed as well as some quick details like director and release date will be visible on the side of the review page, and the ability to like or dislike a review (if you are signed in) */}
                            <li className="list-inline-item list-group-item"><a href="#" className="text-capitalize">reviews</a></li>
                            {/* this link will also take you to the "show reviews" page. it is merely a faster way to get there from any page in the app, since the reviews are the main appeal. */}
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