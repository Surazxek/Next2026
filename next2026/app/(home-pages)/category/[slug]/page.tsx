import { Metadata } from "next";

export const generateMetadata = async(params: Promise<{slug: string}>): Promise<Metadata> => {
    const paramsData = await params
    console.log(paramsData)
    return {
        title: `Category Detail of $${paramsData.slug} || Ecommerce Page `
    } as Metadata
}

export default async function CategoryDetail({params}: {params: {slug: string}}) {

    const paramsData = await params
    return (<>
    category Detail  of {paramsData.slug}
    </>)

}
