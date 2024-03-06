import MainScreenTopBar from "./mainScreentopbar";
import TradingViewWidget from "./tradingViewWidget"


export default function Main() {
    return(
        <section className="w-8/12 border border-red ml-10   ">
            <MainScreenTopBar />
            <TradingViewWidget />
        </section>
    )
}