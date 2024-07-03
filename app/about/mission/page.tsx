import Button from "@/app/components/Button";

export default function missionPage() {
    return (
        <main className="mt-5">
            <h1 className="text-3xl">This is Mission Page (server component) 😎</h1>
            <h3 className="text-xl text-orange-400 mt-6">
                Join Us in Making a Difference:
            </h3>
            <p className="text-lg text-gray-300 mt-3 w-4/12 text-justify">
                At Venus Leather, our mission is to redefine luxury leather
                products by combining traditional craftsmanship with sustainable
                practices. We strive to create timeless pieces that not only
                enhance style but also promote ethical sourcing and
                manufacturing. Together, we can build a future where fashion
                meets sustainability. Join us in supporting responsible
                consumption and craftsmanship.
            </p>

            <small className="text-sm mt-10">👇 client component</small>
            <div className="mt-5">
                <Button />
            </div>
        </main>
    );
}
