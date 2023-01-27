import Navbar from './Header'
import Footer from './Footer'

export default function Layout(props: any) {
    const { children } = props
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
