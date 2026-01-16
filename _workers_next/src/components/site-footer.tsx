import { getSetting } from "@/lib/db/queries"
import { FooterContent } from "./footer-content"

export async function SiteFooter() {
    let shopFooter: string | null = null
    try {
        shopFooter = await getSetting('shop_footer')
    } catch {
        shopFooter = null
    }

    return <FooterContent customFooter={shopFooter} />
}
