import "../assets/styles/Home.css";

export default function Home() {
    return (
        <main>
            <header>
                This content is fixed <br />
                Added flex-shrink:0 to prevent resizing
            </header>
            <section>
                Using flex-grow : 1 to make this grow to remaining height in
                column <br />
                <div></div>
            </section>
            <footer>
                This footer is fixed <br />
                Added flex-shrink:0 to prevent resizing
            </footer>
        </main>
    );
}
