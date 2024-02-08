import GlobalStyle from "../src/theme/GlobalStyle"

function MyApp({ Component, PageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...PageProps} />
        </>
    )
}

export default MyApp