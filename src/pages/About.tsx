export default function About({ changePage }: { changePage: () => void}) {
    const goHome = (e: React.SyntheticEvent) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
        changePage();
    }

    return (
        <>
            <div className="about-page">
                <h1 className="title">
                    About us
                </h1>

                <p className="normal-text">
                    We are 4 friends who loved the original <span className="red-text">Netflix</span> series &laquo;Narcos&raquo;
                </p>

                <p className="bigger-text">
                    We are not related with Netflix, and we did it just <span className="red-text">for fun</span> and <span className="red-text">for free.</span>
                </p>

                <p className="normal-text">
                    Contact: <a href="mailto:soypabloapp@gmail.com">soypabloapp@gmail.com</a>
                </p>

                <p>
                    Back to the <a href="#" onClick={goHome}>cartel</a> 
                </p>
            </div>
        </>
    )
}